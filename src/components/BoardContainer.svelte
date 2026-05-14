<script lang="ts">
	import type { Snippet } from 'svelte';

	import { Container, Sprite, SpineProvider, SpineTrack } from 'pixi-svelte';

	import { getContext } from '../game/context';
	import BoardFrame from './BoardFrame.svelte';
	type Props = {
		children: Snippet;
	};

	const props: Props = $props();
	const context = getContext();
	const layout = context.stateGameDerived.boardLayout();

	const reelTopX = layout.x;
	const reelTopY = layout.y - 45;
</script>

<Container
	x={context.stateGameDerived.boardLayout().x - 52}
	y={context.stateGameDerived.boardLayout().y}
	height={context.stateGameDerived.boardLayout().height}
	scale={1.12}
	pivot={context.stateGameDerived.boardLayout().pivot}
	sortableChildren={true}
>

	{@render props.children()}
	
	<Container
		x={context.stateGameDerived.boardLayout().x / 2.05}
		y={context.stateGameDerived.boardLayout().y / 1.9}
	>
		<Sprite
			key="reel_top"
			anchor={0.5}
			
			width={context.stateGameDerived.boardLayout().width * 1.42}
			height={context.stateGameDerived.boardLayout().height * 1.35}
		
			zIndex={10}
		/>
		<SpineProvider
			key="logo"
			y={-280}
			width={context.stateGameDerived.boardLayout().width / 3}
			height={context.stateGameDerived.boardLayout().height / 11.3}
			zIndex={10}
		>
			<SpineTrack trackIndex={0} animationName={'animation'} timeScale={3} />
		</SpineProvider>
	</Container>
</Container>
