<script lang="ts">
	import Popup  from './Popup.svelte';
	import { zIndex } from 'constants-shared/zIndex';
	import { stateModal } from 'state-shared';
	import { scrollIntoView } from 'utils-shared/scroll';
	import { getContextLayout } from 'utils-layout';

	import BaseContent from './BaseContent.svelte';
	import BaseTitle from './BaseTitle.svelte';
	import BaseScrollable from './BaseScrollable.svelte';
	import BaseButtonWrap from './BaseButtonWrap.svelte';
	import AutoSpinsOptions from './AutoSpinsOptions.svelte';
	import AutoSpinsAdvanced from './AutoSpinsAdvanced.svelte';
	import AutoSpinsStartButton from './AutoSpinsStartButton.svelte';
	import { i18nDerived } from '../../i18n/i18nDerived';

	const { stateLayoutDerived } = getContextLayout();
	const layoutType = $derived(stateLayoutDerived.layoutType());
	const isMobileMenu = $derived(['portrait', 'tablet'].includes(layoutType));
	const isLandscape = $derived(layoutType === 'landscape');
</script>

{#if stateModal.modal?.name === 'autoSpin'}
	<Popup zIndex={zIndex.modal} onclose={() => (stateModal.modal = null)}>
		<div class="autoplay-popup-bg" class:mobile-menu={isMobileMenu} class:landscape={isLandscape}>
			<BaseContent maxWidth="100%">
				<BaseTitle>
					{i18nDerived.autoSpins()}
				</BaseTitle>

				<BaseScrollable type="column">
					{#snippet children({ element })}
						<div class="subtitle" data-test="number-of-rounds">
							{i18nDerived.numberOfRounds()}
						</div>

						<AutoSpinsOptions />
					{/snippet}
				</BaseScrollable>

				<BaseButtonWrap type="max-width">
					<AutoSpinsStartButton />
				</BaseButtonWrap>
			</BaseContent>
		</div>
	</Popup>
{/if}

<style lang="scss">
.autoplay-popup-bg {
	z-index: 200;
	position: fixed;
	right: clamp(120px, 10vw, 260px);
	bottom: clamp(130px, 16vh, 300px);
	display: flex;
	align-items: center;
	justify-content: center;
	--popup-scale: 0.9;
	transform: scale(var(--popup-scale));
	transform-origin: bottom right;

	background-color: rgba(0, 0, 0, 0.8);
	padding: clamp(1rem, 2.6vw, 2rem);
	border-radius: clamp(0.65rem, 1.6vw, 1rem);
	backdrop-filter: blur(8px);          
	-webkit-backdrop-filter: blur(8px);  

	width: min(450px, 90vw);
	max-width: 90vw;
	min-height: clamp(170px, 22vh, 200px);
	box-sizing: border-box;
}

.autoplay-popup-bg.landscape {
	right: clamp(60px, 6vw, 140px);
	bottom: clamp(110px, 14vh, 240px);
}

.autoplay-popup-bg :global(.ui-popup-standard-content-wrap) {
	transform: translateY(clamp(10px, 1.6vh, 16px));
}

.autoplay-popup-bg.mobile-menu {
	left: 50%;
	right: auto;
	--popup-scale: 0.82;
	transform: translateX(-50%) scale(var(--popup-scale));
	transform-origin: bottom center;
	bottom: clamp(180px, 22vh, 340px);
	width: min(320px, 92vw);
	min-height: clamp(160px, 22vh, 175px);
}

@media (max-height: 520px) {
	.autoplay-popup-bg {
		--popup-scale: 0.82;
	}
}
.subtitle {
	font-family: 'Inter', sans-serif;
	font-weight: 700;
	font-size: 15px;
	line-height: 12px;
	letter-spacing: 1px;

	text-align: center;
	text-transform: uppercase;

	color: #858691;
}
</style>
