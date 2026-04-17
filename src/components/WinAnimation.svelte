<script lang="ts">
	import type { Snippet } from 'svelte';

	import { SpineProvider, SpineTrack, SpineSlot } from 'pixi-svelte';

	import { getContext } from '../game/context';

	type AnimationState = 'intro' | 'idle' | 'outro';

	type Props = {
		animationMap: {
			intro:
				| 'nice_intro'
				| 'sensational_intro'
				| 'super_intro'
				| 'congratulation_intro'
				| 'congratulation_intro';
			idle: 'nice_loop' | 'sensational_loop' | 'super_loop' | 'congratulation_loop' | 'congratulation_loop';
			outro: 'nice_outro' | 'sensational_outro' | 'super_outro' | 'congratulation_outro' | 'congratulation_outro';
		};
		children: Snippet;
	};

	const props: Props = $props();
	const context = getContext();

	let oncomplete = $state(() => {});
	let animationState = $state<AnimationState>('intro');
</script>

<SpineProvider width={context.stateGameDerived.boardLayout().width} key="bigwin">
	<SpineTrack
		trackIndex={0}
		animationName={props.animationMap[animationState]}
		loop={animationState === 'idle'}
		listener={{
			complete: () => {
				if (animationState === 'intro') animationState = 'idle';
				if (animationState === 'outro') oncomplete();
			},
		}}
	/>
	<!-- <SpineSlot slotName="slot_win_count">
		{@render props.children()}
	</SpineSlot> -->
</SpineProvider>
