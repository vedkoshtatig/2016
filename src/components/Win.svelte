<script lang="ts" module>
	import type { WinLevelData } from '../game/winLevelMap';

	export type EmitterEventWin =
		| { type: 'winShow' }
		| { type: 'winHide' }
		| { type: 'winUpdate'; amount: number; winLevelData: WinLevelData };
</script>

<script lang="ts">
	import { Container } from 'pixi-svelte';
	import { FadeContainer, WinCountUpProvider, ResponsiveBitmapText } from 'components-pixi';
	import { waitForTimeout } from 'utils-shared/wait';
	import { bookEventAmountToCurrencyString } from 'utils-shared/amount';
	import { CanvasSizeRectangle, MainContainer } from 'components-layout';
	import { OnMount } from 'components-shared';

	import WinAnimation from './WinAnimation.svelte';
	import PressToContinue from './PressToContinue.svelte';
	import { SYMBOL_SIZE } from '../game/constants';
	import { getContext } from '../game/context';

	const context = getContext();

	let show = $state(false);
	let amount = $state(0);
	let winLevelData = $state<WinLevelData>();
	let countUpResolved = $state(false);

	// ===============================
	// SAFE PROMISE PER WIN EVENT
	// ===============================
	let resolveWinUpdate: (() => void) | null = null;

	const waitForWinComplete = () => {
		countUpResolved = false;

		return new Promise<void>((resolve) => {
			console.warn(resolve,"  -> ")
			resolveWinUpdate = resolve;
			console.warn(resolveWinUpdate,"  -> ")
			

			// 🔥 SAFETY NET: prevents freeze forever
			// setTimeout(() => {
			// 	if (resolveWinUpdate) {
			// 		console.warn('⚠️ winUpdate auto-resolved (timeout fallback)');
			// 		resolveWinUpdate();
			// 		resolveWinUpdate = null;
			// 	}
			// }, 8000);
		});
	};

	context.eventEmitter.subscribeOnMount({
		winShow: () => (show = true),
		winHide: () => (show = false),

		winUpdate: async (emitterEvent) => {
			amount = emitterEvent.amount;
			winLevelData = emitterEvent.winLevelData;

			// 🔥 IMPORTANT: block until UI animation completes OR timeout hits
			await waitForWinComplete();
		},
	});
</script>

<FadeContainer {show}>
	{#if winLevelData}
		{@const isBigWin = winLevelData.type === 'big'}
		{@const duration = winLevelData.presentDuration}

		<WinCountUpProvider {amount} {duration}>
			{#snippet children({ countUpAmount, startCountUp, finishCountUp, countUpCompleted })}

				{#if isBigWin}
					<CanvasSizeRectangle backgroundColor={0x000000} backgroundAlpha={0.5} />
				{/if}

				<!-- ===============================
				     START ANIMATION ON MOUNT
				=============================== -->
				<OnMount
					onmount={async () => {
						await startCountUp();
						await waitForTimeout(300);

						// 🔥 RELEASE BACKEND FLOW
						if (resolveWinUpdate) {
							resolveWinUpdate();
							resolveWinUpdate = null;
						}

						countUpResolved = true;
					}}
				/>

				<MainContainer>
					<Container
						x={context.stateGameDerived.boardLayout().x}
						y={context.stateGameDerived.boardLayout().y}
						sortableChildren={true}
					>
						{#if winLevelData?.animation}
							<Container zIndex={0}>
								<WinAnimation animationMap={winLevelData.animation} />
							</Container>
							<Container zIndex={1}>
								<ResponsiveBitmapText
									anchor={0.5}
									y={SYMBOL_SIZE * 1.8}
									maxWidth={2130}
									text={bookEventAmountToCurrencyString(countUpAmount)}
									style={{
										fontFamily: 'gold',
										fontSize: SYMBOL_SIZE * 1.2,
										align: 'center',
										fontWeight: 'bold',
									}}
								/>
							</Container>
						{:else}
							<ResponsiveBitmapText
								anchor={0.5}
								maxWidth={context.stateLayoutDerived.canvasSizes().width /
									context.stateLayoutDerived.mainLayout().scale}
								text={bookEventAmountToCurrencyString(countUpAmount)}
								style={{
									fontFamily: 'gold',
									fontSize: SYMBOL_SIZE,
									align: 'center',
									fontWeight: 'bold',
								}}
							/>
						{/if}
					</Container>
				</MainContainer>

				<!-- ===============================
				     USER SKIP / CONTINUE
				=============================== -->
				<PressToContinue
					onpress={() => {
						if (countUpCompleted) {
							if (resolveWinUpdate) {
								resolveWinUpdate();
								resolveWinUpdate = null;
							}
						} else {
							finishCountUp();
						}
					}}
				/>
			{/snippet}
		</WinCountUpProvider>
	{/if}
</FadeContainer>