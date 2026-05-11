

<script lang="ts">
	import { Sprite, SpineProvider, SpineTrack } from 'pixi-svelte';

	import { getContext } from '../game/context';

	const context = getContext();
	
	const show = $derived(context.stateGame.gameType != 'basegame');
	const SPINE_SCALE = { width: 0.59, height: 0.62 };
	const SPRITE_SCALE = { width: 1.07, height: 1 };
	const BG_RATIO = 937 / 806;
	const POSITION_ADJUSTMENT = 1.01;

	

	console.log("BoardFrame mounted");
</script>


{#if show}
	
		<Sprite
		key="reel_base_bonus"
		anchor={0.5}
		x={context.stateGameDerived.boardLayout().x}
		y={context.stateGameDerived.boardLayout().y-20}
		width={context.stateGameDerived.boardLayout().width * SPINE_SCALE.width * 2}
		height={context.stateGameDerived.boardLayout().height * SPINE_SCALE.height * 1.38}
		scale={{ x: 0.73, y: 0.8 }}
		zIndex={-10}
	/>
{:else}
<Sprite
		key="reel_base"
		anchor={0.5}
		x={context.stateGameDerived.boardLayout().x}
		y={context.stateGameDerived.boardLayout().y - 45}
		width={context.stateGameDerived.boardLayout().width * SPINE_SCALE.width * 2}
		height={context.stateGameDerived.boardLayout().height * SPINE_SCALE.height * 1.38}
		scale={{ x: 0.73, y: 0.8 }}
		zIndex={-10}
	/>
{/if}


<!-- 
<Sprite
	key="reel_top"
	anchor={0.5}
	x={context.stateGameDerived.boardLayout().x}
	y={context.stateGameDerived.boardLayout().y -45}
	width={context.stateGameDerived.boardLayout().width * SPINE_SCALE.width * 2}
	height={context.stateGameDerived.boardLayout().height * SPINE_SCALE.height * 1.38}
	scale={{ x: 0.73, y: 0.8 }}
	zIndex={10} 
/> -->

<!-- <Sprite
	key="frame_edge.png"
	anchor={0.5}
	x={context.stateGameDerived.boardLayout().x * POSITION_ADJUSTMENT}
	y={context.stateGameDerived.boardLayout().y * POSITION_ADJUSTMENT}
	width={context.stateGameDerived.boardLayout().width * BG_RATIO * SPRITE_SCALE.width}
	height={context.stateGameDerived.boardLayout().width * SPRITE_SCALE.height}
/> -->
