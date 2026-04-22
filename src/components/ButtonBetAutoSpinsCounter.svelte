<script lang="ts">
	import { Text, Sprite } from 'pixi-svelte';
	import { stateBet } from 'state-shared';
	import { WHITE } from 'constants-shared/colors';
	import { UI_BASE_SIZE } from '../game/constants';
	import { getContext } from '../game/context';

	const context = getContext();

	let prevCounter = stateBet.autoSpinsCounter;

	const fontSizeMultiplier = $derived.by(() => {
		if (stateBet.autoSpinsCounter === Infinity) return 3;
		if (stateBet.autoSpinsCounter > 99) return 1.5;
		if (stateBet.autoSpinsCounter > 9) return 2;
		return 2.5;
	});

	// ✅ runes-safe reactive effect
	$effect(() => {
		const current = stateBet.autoSpinsCounter;

		if (current > 0 && current < prevCounter) {
			context.eventEmitter.broadcast({ type: 'clearLeaderboard' });
		}

		prevCounter = current;
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
