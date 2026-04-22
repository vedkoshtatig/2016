<script lang="ts">
	import { Text, Rectangle, Sprite } from 'pixi-svelte';
	import { stateBet } from 'state-shared';
	import { DESKTOP_BASE_SIZE } from '../game/constants';
	import { WHITE } from 'constants-shared/colors';

	import { UI_BASE_SIZE } from '../game/constants';

	const fontSizeMultiplier = $derived.by(() => {
		if (stateBet.autoSpinsCounter === Infinity) return 3;
		if (stateBet.autoSpinsCounter > 99) return 1.5;
		if (stateBet.autoSpinsCounter > 9) return 2;
		return 2.5;
	});
</script>

{#if stateBet.autoSpinsCounter > 0}
	<Sprite key="betControl" anchor={0.5} scale={{ x: 1.1, y: 2.3 }} />
	<Text
		anchor={0.5}
		text={stateBet.autoSpinsCounter === Infinity ? '∞' : stateBet.autoSpinsCounter}
		style={{
			fontFamily: 'Neuton',
			fill: WHITE,
			fontWeight: 'bold',
			fontSize: fontSizeMultiplier * UI_BASE_SIZE * 0.2,
		}}
	/>
{/if}
