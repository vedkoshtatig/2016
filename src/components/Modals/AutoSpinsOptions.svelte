<script lang="ts">
	import { getContextLayout } from 'utils-layout';
	import { stateUi, AUTO_SPINS_TEXT_OPTIONS } from '../../i18n/stateUi.svelte';
	import  OptionsGrid  from './OptionsGrid.svelte';

	import BaseIcon from './BaseIcon.svelte';
	import BaseButtonContent from './BaseButtonContent.svelte';

	const { stateLayoutDerived } = getContextLayout();

	const AUTO_SPINS_TEXT_OPTIONS_PORTRAIT = AUTO_SPINS_TEXT_OPTIONS.filter(
		(value) => value !== '1000'
	);

	const options = $derived(
		stateLayoutDerived.layoutType() === 'landscape'
			? AUTO_SPINS_TEXT_OPTIONS_PORTRAIT
			: AUTO_SPINS_TEXT_OPTIONS
	);

	let hoveredOption = $state<string | null>(null);
</script>

<OptionsGrid
	layout="row"
	value={stateUi.autoSpinsText}
	{options}
	onchange={(value) => (stateUi.autoSpinsText = value)}
>
	{#snippet option({ option })}
		<div
			on:mouseenter={() => (hoveredOption = option)}
			on:mouseleave={() => (hoveredOption = null)}
			class="option-wrap"
		>
		<BaseIcon
	width="3rem"
	height="3rem"
	normal={
		hoveredOption === option || stateUi.autoSpinsText === option
			? "/assets/sprites/uiSlotsAssetsBespoke/baseIconHover.png"
			: "/assets/sprites/uiSlotsAssetsBespoke/baseIcon.png"
	}
	hover="/assets/sprites/uiSlotsAssetsBespoke/baseIconHover.png"
	pressed="/assets/sprites/uiSlotsAssetsBespoke/baseIconActive.png"
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
		margin-top: 10px;
	}
.option-text {
	font-family: 'Inter', sans-serif;
	font-weight: 700;        // Bold
	font-size: 18px;
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