<script lang="ts" module>
	
	import type { WinLevelData } from '../game/winLevelMap';

	export type EmitterEventFreeSpinOutro =
		| { type: 'freeSpinOutroShow' }
		| { type: 'freeSpinOutroHide' }
		| {
				type: 'freeSpinOutroCountUp';
				amount: number;
				winLevelData: WinLevelData;
				totalFreeSpins: number;
		  };
</script>

<script lang="ts">
	import { Sprite, SpineProvider, SpineTrack, SpineSlot, BitmapText } from 'pixi-svelte';
	import { FadeContainer, WinCountUpProvider, ResponsiveBitmapText } from 'components-pixi';
	import { bookEventAmountToCurrencyString } from 'utils-shared/amount';
	import { waitForResolve } from 'utils-shared/wait';
	import { CanvasSizeRectangle } from 'components-layout';
	import { OnMount } from 'components-shared';

	import { getContext } from '../game/context';
	import FreeSpinAnimation from './FreeSpinAnimation.svelte';
	import PressToContinue from './PressToContinue.svelte';

	type AnimationName = 'intro' | 'idle';

	const context = getContext();
	const boardPopupX = 0;
	const boardPopupY = 200;

	let show = $state(true);
	let animationName = $state<AnimationName>('intro');
	let amount = $state(0);
	let freeSpinsFromEvent = $state(0);
	let winLevelData = $state<WinLevelData>();
	let oncomplete = $state(() => {});
	let onCountUpComplete = $state(() => {});

	context.eventEmitter.subscribeOnMount({
		freeSpinOutroShow: () => (show = true),
		freeSpinOutroHide: async () => (show = false),
		freeSpinOutroCountUp: async (emitterEvent) => {
			amount = emitterEvent.amount;
			winLevelData = emitterEvent.winLevelData;
			freeSpinsFromEvent = emitterEvent.totalFreeSpins;

			await waitForResolve((resolve) => (oncomplete = resolve));
		},
	});
</script>

<FadeContainer {show}>
	{#if winLevelData}
		{@const duration = winLevelData.presentDuration}
		{@const isBigWin = winLevelData.type === 'big'}

		<WinCountUpProvider {amount} {duration} oncomplete={() => onCountUpComplete()}>
			{#snippet children({ countUpAmount, startCountUp, finishCountUp, countUpCompleted })}
				<OnMount onmount={() => startCountUp()} />

				<CanvasSizeRectangle backgroundColor={0x000000} backgroundAlpha={0.5} />

				<FreeSpinAnimation>
					{#snippet children({ sizes })}
						<Sprite
							anchor={{ x: 0.5, y: 1.2 }}
							key="board_popup"
							scale={0.5}
							x={boardPopupX}
							y={boardPopupY}
						/>

						<BitmapText
							anchor={{ x: 0.5, y: 0.5 }}
							x={boardPopupX}
							y={-boardPopupY - 30}
							text="CONGRATULATION"
							style={{ fontFamily: 'gold', fontSize: 72, align: 'center' }}
						/>

						<BitmapText
							anchor={{ x: 0.5, y: 0.5 }}
							x={boardPopupX}
							y={-boardPopupY + 50}
							text="YOU HAVE WON"
							style={{ fontFamily: 'gold', fontSize: 44, align: 'center' }}
						/>

						<SpineProvider key="fsOutroNumber" width={sizes.width * 0.1} y={-90}>
							<SpineTrack
								trackIndex={0}
								{animationName}
								loop={animationName === 'idle'}
								listener={{
									complete: () => (animationName = 'idle'),
								}}
							/>

							<SpineSlot slotName="slot_number">
								<ResponsiveBitmapText
									anchor={0.5}
									style={{
										fontFamily: 'gold',
										fontSize: sizes.width * 0.15,
									}}
									text={bookEventAmountToCurrencyString(countUpAmount)}
									maxWidth={sizes.width}
								/>
							</SpineSlot>
						</SpineProvider>

						<BitmapText
							anchor={{ x: 0.5, y: 0.5 }}
							x={boardPopupX}
							y={-boardPopupY + 230}
							text={`IN FREE SPINS`}
							style={{ fontFamily: 'gold', fontSize: 72, align: 'center' }}
						/>
					{/snippet}
				</FreeSpinAnimation>

				<PressToContinue
					onpress={() => (countUpCompleted ? oncomplete() : finishCountUp())}
				/>
			{/snippet}
		</WinCountUpProvider>
	{/if}
</FadeContainer>
