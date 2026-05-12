<script lang="ts">
	import { SpineProvider, SpineTrack } from 'pixi-svelte';
	import { stateBet } from 'state-shared';

	import { getSymbolBackgroundInfo } from '../game/utils';
	import { SYMBOL_SIZE } from '../game/constants';

	type Props = {
		symbolBackgroundInfo: ReturnType<typeof getSymbolBackgroundInfo>;
		x?: number;
		y?: number;
		loop?: boolean;
	};

	const props: Props = $props();

	const animationTimeScale = () => (stateBet.isTurbo ? 2.5 : 1.5);
</script>

<!-- background -->
{#if props.symbolBackgroundInfo}
	<SpineProvider
		x={props.x}
		y={props.y}
		key={props.symbolBackgroundInfo.assetKey}
		height={SYMBOL_SIZE * props.symbolBackgroundInfo.sizeRatios.height}
	>
		<SpineTrack
			loop={props.loop}
			trackIndex={0}
			animationName={props.symbolBackgroundInfo.animationName}
			timeScale={animationTimeScale()}
		/>
	</SpineProvider>
{/if}
