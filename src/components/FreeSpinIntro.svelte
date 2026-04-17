<script lang="ts" module>
	export type EmitterEventFreeSpinIntro =
		| { type: 'freeSpinIntroShow' }
		| { type: 'freeSpinIntroHide' }
		| { type: 'freeSpinIntroUpdate'; totalFreeSpins: number };
</script>

<script lang="ts">
	import { CanvasSizeRectangle } from 'components-layout';
	import { stateUrlDerived } from 'state-shared';
	import { FadeContainer } from 'components-pixi';
	import { waitForResolve } from 'utils-shared/wait';
	import { BitmapText, SpineProvider, SpineSlot, SpineTrack, Sprite } from 'pixi-svelte';

	import { getContext } from '../game/context';
	import PressToContinue from './PressToContinue.svelte';
	import FreeSpinAnimation from './FreeSpinAnimation.svelte';

	type AnimationName = 'intro' | 'idle';

	const context = getContext();
	const boardPopupX = 0;
	const boardPopupY = 200;

	let show = $state(false);
	let animationName = $state<AnimationName>('intro');
	let freeSpinsFromEvent = $state(0);
	let oncomplete = $state(() => {});

	context.eventEmitter.subscribeOnMount({
		freeSpinIntroShow: () => (show = true),
		freeSpinIntroHide: () => (show = false),
		freeSpinIntroUpdate: async (emitterEvent) => {
			// if (emitterEvent.extraSpins) {
			// 	context.eventEmitter.broadcast({ type: 'soundOnce', name: 'sfx_fs_respins' });
			// }
			// freeSpinsFromEvent = emitterEvent.extraSpins ?? emitterEvent.totalFreeSpins;
			freeSpinsFromEvent = emitterEvent.totalFreeSpins;
			await waitForResolve((resolve) => (oncomplete = resolve));
		},
	});
</script>

<FadeContainer {show}>
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
	y={-boardPopupY-30}
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

<BitmapText
	anchor={{ x: 0.5, y: 0.5 }}
	x={boardPopupX}
	y={-boardPopupY+130}
	text={`${freeSpinsFromEvent}`}
	style={{ fontFamily: 'gold', fontSize: 88, align: 'center' }}
/>

<BitmapText
	anchor={{ x: 0.5, y: 0.5 }}
	x={boardPopupX}
	y={-boardPopupY + 230}
	text="FREE SPINS"
	style={{ fontFamily: 'gold', fontSize: 72, align: 'center' }}
/>

<!-- <BitmapText
	anchor={{ x: 0.5, y: 0.5 }}
	x={boardPopupX}
	y={-boardPopupY + 280}
	text="PRESS ANYWHERE TO CONTINUE"
	style={{ fontFamily: 'gold', fontSize: 36, align: 'center' }}
/> -->
			<!-- <SpineProvider key="fsIntroNumber" width={sizes.width * 0.4}>
				<SpineTrack
					trackIndex={0}
					{animationName}
					loop={animationName === 'idle'}
					listener={{
						complete: () => (animationName = 'idle'),
					}}
				/>
				<SpineSlot slotName="slot_number">
					<BitmapText
						anchor={{ x: 0.5, y: 0.5 }}
						text={freeSpinsFromEvent}
						style={{
							fontFamily: 'gold',
							fontSize: sizes.width * 0.15,
							fontWeight: 'bold',
						}}
					/>
				</SpineSlot>
			</SpineProvider> -->

			<!-- <Sprite anchor={{ x: 0.5, y: -3 }} width={183 * 2.2} height={42 * 2.2} key="freespins.png" /> -->
		{/snippet}
	</FreeSpinAnimation>

	<PressToContinue onpress={() => oncomplete()} />	
</FadeContainer>
