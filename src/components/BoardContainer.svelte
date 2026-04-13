<script lang="ts">
	import type { Snippet } from 'svelte';

	import { Container, Sprite, SpineProvider, SpineTrack } from 'pixi-svelte';

	import { getContext } from '../game/context';

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
	x={context.stateGameDerived.boardLayout().x - 170}
	y={context.stateGameDerived.boardLayout().y -12}
	height={context.stateGameDerived.boardLayout().height}
	scale={1.12}
	pivot={context.stateGameDerived.boardLayout().pivot}
>
	{@render props.children()}
</Container>

<Sprite
	key="reel_top"
	anchor={0.5}
	x={context.stateGameDerived.boardLayout().x}
	y={context.stateGameDerived.boardLayout().y - 45}
	width={context.stateGameDerived.boardLayout().width * 1.12}
	height={context.stateGameDerived.boardLayout().height * 1.12}
	scale={{ x: 0.73, y: 0.8 }}
	zIndex={10}
/>
<SpineProvider
	key="logo"
	x={context.stateGameDerived.boardLayout().x}
	y={context.stateGameDerived.boardLayout().y / 8}
	width={context.stateGameDerived.boardLayout().width / 2.5}
	height={context.stateGameDerived.boardLayout().height / 9}
	zIndex={20}
>
	<SpineTrack trackIndex={0} animationName={'2016_logo'} loop timeScale={3} />
</SpineProvider>
