<script lang="ts">
	import { getContextLayout } from 'utils-layout';
	import { stateUi, AUTO_SPINS_TEXT_OPTIONS } from '../../i18n/stateUi.svelte';
	import OptionsGrid from './OptionsGrid.svelte';

	import BaseIcon from './BaseIcon.svelte';
	import BaseButtonContent from './BaseButtonContent.svelte';

	const { stateLayoutDerived } = getContextLayout();
	const layoutType = $derived(stateLayoutDerived.layoutType());
	const isCompact = $derived(['portrait', 'tablet'].includes(layoutType));

	const AUTO_SPINS_TEXT_OPTIONS_PORTRAIT = AUTO_SPINS_TEXT_OPTIONS.filter(
		(value) => value !== '1000',
	);

	const options = $derived(
		layoutType === 'landscape'
			? AUTO_SPINS_TEXT_OPTIONS_PORTRAIT
			: AUTO_SPINS_TEXT_OPTIONS,
	);

	let hoveredOption = $state<string | null>(null);

	const getOptionSize = (option: string) => {
		if (isCompact) {
			if (option === '∞') return '2.4rem';
			if (option.length >= 3) return '2.8rem';
			return '2.4rem';
		}
		if (option === '∞') return '3rem';
		if (option.length >= 3) return '3.5rem';
		return '3rem';
	};
</script>

<OptionsGrid
	layout="row"
	rowGap={isCompact ? '0.6rem' : '1.25rem'}
	rowPaddingX={isCompact ? '0.25rem' : '0.5rem'}
	value={stateUi.autoSpinsText}
	{options}
	onchange={(value) => (stateUi.autoSpinsText = value)}
>
	{#snippet option({ option })}
		<div
			on:mouseenter={() => (hoveredOption = option)}
			on:mouseleave={() => (hoveredOption = null)}
			class="option-wrap"
			style={`--option-size: ${getOptionSize(option)}; --option-font-size: ${isCompact ? '14px' : '18px'};`}
		>
			<BaseIcon
				width={getOptionSize(option)}
				height={getOptionSize(option)}
				normal={hoveredOption === option || stateUi.autoSpinsText === option
					? 'assets/sprites/uiSlotsAssetsBespoke/baseIconHover.png'
					: 'assets/sprites/uiSlotsAssetsBespoke/baseIcon.png'}
				hover="assets/sprites/uiSlotsAssetsBespoke/baseIconHover.png"
				pressed="assets/sprites/uiSlotsAssetsBespoke/baseIconActive.png"
			/>

			<BaseButtonContent>
				<span
					class="option-text"
					class:hovered={hoveredOption === option}
					class:selected={stateUi.autoSpinsText === option}
					class:infinity={option === '∞'}
					data-test="round-options"
				>
					{option}
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
	width: var(--option-size);
	height: var(--option-size);
	flex: 0 0 auto;
	margin-top: 10px;

	
	transition: transform 0.2s ease;
	transform-origin: center;
}


.option-wrap:hover,
.option-text.selected + * {
	transform: scale(1.1);
}
	.option-text {
		font-family: 'Inter', sans-serif;
		font-weight: 700; // Bold
		font-size: var(--option-font-size);
		line-height: 12px;
		letter-spacing: 1px;

		color: #ffffff;

		text-align: center;
		text-transform: uppercase;

		transition: color 0.15s ease;
	}

	.option-text.hovered,
	.option-text.selected {
		color: #ffd54a;
	}

	.option-text.infinity {
		font-size: 1.2rem;
	}
</style>
