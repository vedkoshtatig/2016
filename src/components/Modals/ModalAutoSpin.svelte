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
	const isMobileMenu = $derived(['portrait', 'tablet'].includes(stateLayoutDerived.layoutType()));
</script>

{#if stateModal.modal?.name === 'autoSpin'}
	<Popup zIndex={zIndex.modal} onclose={() => (stateModal.modal = null)}>
		<div class="autoplay-popup-bg" class:mobile-menu={isMobileMenu}>
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

	background-color: rgba(0, 0, 0, 0.8);
	padding: 2rem;
	border-radius: 1rem;
	backdrop-filter: blur(8px);          
	-webkit-backdrop-filter: blur(8px);  

	width: 450px;
	max-width: 90vw;
	height: 200px;
}

.autoplay-popup-bg.mobile-menu {
	transform: translateY(clamp(40px, 8vh, 140px));
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
