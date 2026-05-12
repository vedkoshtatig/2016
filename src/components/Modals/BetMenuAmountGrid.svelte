<script lang="ts">
	import OptionsGrid from './OptionsGrid.svelte';
	import { getContextLayout } from 'utils-layout';
	import { stateBet, stateConfig, stateModal } from 'state-shared';

	import BaseIcon from './BaseIcon.svelte';
	import BaseButtonContent from './BaseButtonContent.svelte';

	const { stateLayoutDerived } = getContextLayout();

	stateConfig.betMenuOptions = [
		0.1, 0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 1, 6, 18,
		20, 30, 40, 50, 60, 70, 80, 90, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700,
		750, 800, 850, 900, 950, 1000,
	];

	const isMobile = $derived(['portrait', 'mobile'].includes(stateLayoutDerived.layoutType()));

	/* ✅ fewer rows on mobile */
	const count = $derived(isMobile ? 9 : 15);

	const confirm = () => {
		stateModal.modal = null;
	};

	const options = $derived(
		[...stateConfig.betMenuOptions].filter((value, index, array) => array.indexOf(value) === index),
	);

	let hoveredOption = $state<number | null>(null);

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
			className="bet-menu-icon"
				width="clamp(3.8rem, 10vw, 5rem)"
	height="clamp(2rem, 4vw, 2.5rem)"
				normal={hoveredOption === option || stateBet.betAmount === option
					? 'assets/sprites/uiSlotsAssetsBespoke/betModalAmountBgDown.png'
					: 'assets/sprites/uiSlotsAssetsBespoke/betModalAmountBg.png'}
				hover="assets/sprites/uiSlotsAssetsBespoke/betModalAmountBgDown.png"
				pressed="assets/sprites/uiSlotsAssetsBespoke/betModalAmountBgDown.png"
			/>

			<BaseButtonContent>
				<div class="text-padding">
					<span
						class="option-text"
						class:hovered={hoveredOption === option}
						class:selected={stateBet.betAmount === option}
					>
						{formatValue(option)}$
					</span>
				</div>
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

		margin-top: 4px;

		min-width: 0;
		min-height: 0;

		transition: transform 0.15s ease;
	}

	.option-wrap:hover {
		transform: translateY(-1px);
	}

	.text-padding {
		padding-inline: 0.45rem;
		padding-block: 0.15rem;

		display: flex;
		align-items: center;
		justify-content: center;

		width: 100%;
		height: 100%;

		box-sizing: border-box;
	}

.option-text {
	font-family: 'Inter', sans-serif;
	font-weight: 700;

	font-size: clamp(9px, 1.6vw, 16px);

	line-height: 1;

	letter-spacing: 0.3px;

	color: #ffffff;

	text-align: center;

	transition: color 0.15s ease;

	white-space: nowrap;
}

	.option-text.hovered,
	.option-text.selected {
		color: #ffd54a;
	}

	/* 📱 MOBILE */
	@media (max-width: 768px) {
		.option-wrap {
			margin-top: 2px;
		}

		.text-padding {
			padding-inline: 0.35rem;
		}

		.option-text {
			font-size: 11px;
			letter-spacing: 0;
		}
	}

	/* 📱 VERY SMALL DEVICES */
	@media (max-width: 480px) {
		.text-padding {
			padding-inline: 0.25rem;
		}

		.option-text {
			font-size: 10px;
		}
	}
	:global(.bet-menu-icon) {
	border-radius: 4px;
}

@media (max-width: 500px) {
	:global(.bet-menu-icon) {
		width: 10vw !important;
		height: 4vh !important;
	}
}
</style>
