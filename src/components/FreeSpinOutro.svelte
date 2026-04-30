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
	const fstyle={
		fontFamily: 'sans-serif',
		 fontSize: 72, align: 'center' 
	}
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
							scale={0.65}
							x={boardPopupX}
							y={boardPopupY*1.6}
						/>

						<BitmapText
							anchor={{ x: 0.5, y: 0.5 }}
							x={boardPopupX}
							y={-boardPopupY +30}
							text="CONGRATULATION"
							style={fstyle}
						/>

						<BitmapText
							anchor={{ x: 0.5, y: 0.5 }}
							x={boardPopupX}
							y={-boardPopupY + 110}
							text="YOU HAVE WON"
							style={fstyle}
						/>

						<SpineProvider key="fsOutroNumber" width={sizes.width * 0.2} y={-20}>
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
									style={fstyle}
									text={bookEventAmountToCurrencyString(countUpAmount)}
									maxWidth={sizes.width}
								/>
							</SpineSlot>
						</SpineProvider>

						<BitmapText
							anchor={{ x: 0.5, y: 0.5 }}
							x={boardPopupX}
							y={boardPopupY/2}
							text={`IN FREE SPINS`}
							style={fstyle}
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
