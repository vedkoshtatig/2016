<script lang="ts">
	import OptionsGrid from './OptionsGrid.svelte';
	import { getContextLayout } from 'utils-layout';
	import { stateBet, stateConfig } from 'state-shared';

	import BaseIcon from './BaseIcon.svelte';
	import BaseButtonContent from './BaseButtonContent.svelte';
	import { stateModal } from 'state-shared';
	const { stateLayoutDerived } = getContextLayout();

	stateConfig.betMenuOptions = [
		0.1, 0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 1, 6, 18,
		20, 30, 40, 50, 60, 70, 80, 90, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700,
		750, 800, 850, 900, 950, 1000,
	];

	const count = $derived(stateLayoutDerived.layoutType() === 'landscape' ? 15 : 18);
	const confirm = () => {
		stateModal.modal = null;
	};

	const options = $derived(
		[
			...stateConfig.betMenuOptions
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
			on:click={confirm}
		>
			<BaseIcon
				width="5rem"
				height="2.5rem"
				normal={hoveredOption === option || stateBet.betAmount === option
					? '/assets/sprites/uiSlotsAssetsBespoke/betModalAmountBgDown.png'
					: '/assets/sprites/uiSlotsAssetsBespoke/betModalAmountBg.png'}
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
