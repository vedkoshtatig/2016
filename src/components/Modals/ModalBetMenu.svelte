<script lang="ts">
	import { Button } from 'components-shared';
	import { zIndex } from 'constants-shared/zIndex';
	import { stateModal } from 'state-shared';
	import Popup from './Popup.svelte';

	import BaseIcon from './BaseIcon.svelte';
	import BaseTitle from './BaseTitle.svelte';
	import BaseContent from './BaseContent.svelte';
	import BaseScrollable from './BaseScrollable.svelte';
	import BaseButtonWrap from './BaseButtonWrap.svelte';
	import BaseButtonContent from './BaseButtonContent.svelte';
	import BetMenuAmountToggle from './BetMenuAmountToggle.svelte';
	import BetMenuAmountGrid from './BetMenuAmountGrid.svelte';
	import { i18nDerived } from '../../i18n/i18nDerived';

	const confirm = () => {
		stateModal.modal = null;
	};
</script>

{#if stateModal.modal?.name === 'betAmountMenu'}
	<Popup zIndex={zIndex.modal} onclose={() => (stateModal.modal = null)}>
		<div class="autoplay-popup-bg">
			<BaseContent maxWidth="100%">
				<BaseTitle>
					{i18nDerived.betMenu()}
				</BaseTitle>
				<BaseScrollable type="column">
					<BetMenuAmountToggle />
					<BetMenuAmountGrid />
				</BaseScrollable>
				<BaseButtonWrap type="full-width">
					<Button data-test="confirm-button" onclick={confirm}>
						<span style="font-size: 1.5rem;color:white ;margin-top:10px;"
							>{i18nDerived.confirm()}</span
						>
					</Button>
				</BaseButtonWrap>
			</BaseContent>
		</div>
	</Popup>
{/if}

<style>
	.autoplay-popup-bg {
		position: relative;
		z-index: 200;

		background-color: rgba(0, 0, 0, 0.9);
		margin: 0;
		padding: 2rem;
		border-radius: 1rem;
	}
</style>
