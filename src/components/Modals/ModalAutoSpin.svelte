<script lang="ts">
	import Popup  from './Popup.svelte';
	import { zIndex } from 'constants-shared/zIndex';
	import { stateModal } from 'state-shared';
	import { scrollIntoView } from 'utils-shared/scroll';

	import BaseContent from './BaseContent.svelte';
	import BaseTitle from './BaseTitle.svelte';
	import BaseScrollable from './BaseScrollable.svelte';
	import BaseButtonWrap from './BaseButtonWrap.svelte';
	import AutoSpinsOptions from './AutoSpinsOptions.svelte';
	import AutoSpinsAdvanced from './AutoSpinsAdvanced.svelte';
	import AutoSpinsStartButton from './AutoSpinsStartButton.svelte';
	import { i18nDerived } from '../../i18n/i18nDerived';
</script>

{#if stateModal.modal?.name === 'autoSpin'}
	<Popup zIndex={zIndex.modal} onclose={() => (stateModal.modal = null)}>
		<div class="autoplay-popup-bg">
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
	position: fixed; 
	top: 55%;
	left: 73%;
	transform: translateX(-50%);

	z-index: 200;

	background-color: rgba(0, 0, 0, 0.9);
	padding: 2rem;
	border-radius: 1rem;

	width: 500px;
	max-width: 90vw;
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