<script lang="ts">
	import OptionsGrid  from './OptionsGrid.svelte';
	import { getContextLayout } from 'utils-layout';
	import { stateBet, stateConfig } from 'state-shared';

	import BaseIcon from './BaseIcon.svelte';
	import BaseButtonContent from './BaseButtonContent.svelte';

	const { stateLayoutDerived } = getContextLayout();

	const count = $derived(stateLayoutDerived.layoutType() === 'landscape' ? 15 : 18);

	const options = $derived(
		[
			...stateConfig.betMenuOptions.slice(0, count - 1),
			...stateConfig.betMenuOptions.slice(-1),
		].filter((value, index, array) => array.indexOf(value) === index),
	);

	// ✅ hover state (same as toggle)
	let hoveredOption = $state<number | null>(null);

	// ✅ clean format (no K/M, no MAX)
	const formatValue = (value: number) => value.toFixed(2);
</script>

<OptionsGrid
layout="grid"
	value={stateBet.betAmount}
	{options}
	onchange={(value) => (stateBet.betAmount = value)}
>
	{#snippet option({ option })}
		<div
			class="option-wrap"
			on:mouseenter={() => (hoveredOption = option)}
			on:mouseleave={() => (hoveredOption = null)}
		>
			<BaseIcon
				width="5rem"
				height="2.5rem"
				normal="/assets/sprites/uiSlotsAssetsBespoke/betModalAmountBg.png"
				hover="/assets/sprites/uiSlotsAssetsBespoke/betModalAmountBgDown.png"
				pressed="/assets/sprites/uiSlotsAssetsBespoke/betModalAmountBgDown.png"
			/>

			<BaseButtonContent>
				<span
					class="option-text"
					class:hovered={hoveredOption === option}
					class:selected={stateBet.betAmount === option}
				>
					{formatValue(option)}$
				</span>
			</BaseButtonContent>
		</div>
	{/snippet}
</OptionsGrid>

<style lang="scss">
.option-wrap {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 6px;
}

/* TEXT STYLE */
.option-text {
	font-family: 'Inter', sans-serif;
	font-weight: 700;
	font-size: 16px;
	letter-spacing: 1px;

	color: #ffffff;
	text-align: center;

	transition: color 0.15s ease;
}

/* 🔥 hover + selected = yellow */
.option-text.hovered,
.option-text.selected {
	color: #ffd54a;
}

/* optional micro interaction */
.option-wrap:hover {
	transform: translateY(-1px);
}
</style>

