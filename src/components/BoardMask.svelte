<script lang="ts">
	import { Rectangle } from 'pixi-svelte';

	import { getContext } from '../game/context';
	import { SYMBOL_SIZE } from '../game/constants';

	type Props = { debug?: boolean };

	const props: Props = $props();
	const context = getContext();
	const isLandscape = $derived(() => {
		const { width, height } = context.stateLayoutDerived.canvasSizes();
		return width > height;
	});
</script>

{#if props.debug}
	<Rectangle
		alpha={0.5}
		backgroundColor={0xffffff}
		y={isLandscape()?0:-80}
		width={context.stateGameDerived.boardLayout().width+150}
		height={isLandscape() ? context.stateGameDerived.boardLayout().height : context.stateGameDerived.boardLayout().height+150}
	/>
{/if}


<Rectangle
		isMask
	
		y={isLandscape()?0:-80}
		width={context.stateGameDerived.boardLayout().width+150}
		height={isLandscape() ? context.stateGameDerived.boardLayout().height : context.stateGameDerived.boardLayout().height+150}
	/>

<!-- <Rectangle
	isMask
	x={-SYMBOL_SIZE}
	y={isLandscape()?0:-50}
	width={context.stateGameDerived.boardLayout().width + SYMBOL_SIZE * 2+150}
	height={isLandscape() ? context.stateGameDerived.boardLayout().height : context.stateGameDerived.boardLayout().height+100}
/> -->
