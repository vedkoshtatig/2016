<script lang="ts">
	import { SpineProvider, SpineTrack } from 'pixi-svelte';
	import { stateBetDerived } from 'state-shared';

	import { getContext } from '../game/context';
	import type { Reel } from '../game/stateGame.svelte';
	import { REEL_PADDING, SYMBOL_SIZE } from '../game/constants';

	type Props = {
		reel: Reel;
		oncomplete: () => void;
	};

	const props: Props = $props();
	const context = getContext();

	type AnimationName = 'anticipation_intro' | 'anticipation_loop' | 'anticipation_out';

	let animationName = $state<AnimationName>('anticipation_intro');

	$effect(() => {
		if (props.reel.reelState.motion === 'stopped') {
			animationName = 'anticipation_out';
		}
	});
</script>

<SpineProvider
	key="anticipation"
	width={SYMBOL_SIZE * 0.63}
	x={context.stateGameDerived.boardLayout().x -
		context.stateGameDerived.boardLayout().width * 0.653 +
		(props.reel.reelIndex + REEL_PADDING) * SYMBOL_SIZE *1.3}
	y={context.stateGameDerived.boardLayout().y - SYMBOL_SIZE +83}
>
	<SpineTrack
		trackIndex={0}
		{animationName}
		loop={true}
		timeScale={stateBetDerived.timeScale()}
		listener={{
			complete: () => {
				if (animationName === 'anticipation_intro') {
					animationName = 'anticipation_loop';
				}

				if (animationName === 'anticipation_out') {
					props.oncomplete();
				}
			},
		}}
	/>
</SpineProvider>
