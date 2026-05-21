<script lang="ts">
	import type { Snippet } from 'svelte';

	import { Container, SpineProvider, SpineTrack } from 'pixi-svelte';

	import { getContext } from '../game/context';

	type AnimationState = 'intro' | 'idle' | 'outro';

	type Props = {
		animationMap: {
			intro:
				| 'big_intro'
				| 'mega_intro'
				| 'nice_intro'
				| 'sensational_intro'
				| 'super_intro';
			idle: 'big_loop' | 'mega_loop' | 'nice_loop' | 'sensational_loop' | 'super_loop';
			outro: 'big_outro' | 'mega_outro' | 'nice_outro' | 'sensational_outro' | 'super_outro';
		};
		children?: Snippet;
	};

	const props: Props = $props();
	const context = getContext();

	let oncomplete = $state(() => {});
	let animationState = $state<AnimationState>('intro');
</script>

<SpineProvider width={context.stateGameDerived.boardLayout().width} key="BigWin">
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
	{#if props.children}
		<Container>
			{@render props.children()}
		</Container>
	{/if}
</SpineProvider>
