<script lang="ts">
	import { Popup } from 'components-shared';
	import { zIndex } from 'constants-shared/zIndex';
	import { stateModal } from 'state-shared';
	import { scrollIntoView } from 'utils-shared/scroll';

	import { i18nDerived } from '../i18n/i18nDerived';
	import BaseContent from 'components-ui-html/src/components/BaseContent.svelte';
	import BaseTitle from 'components-ui-html/src/components/BaseTitle.svelte';
	import BaseScrollable from 'components-ui-html/src/components/BaseScrollable.svelte';
	import AutoSpinsOptions from 'components-ui-html/src/components/AutoSpinsOptions.svelte';
	import AutoSpinsAdvanced from 'components-ui-html/src/components/AutoSpinsAdvanced.svelte';
	import BaseButtonWrap from 'components-ui-html/src/components/BaseButtonWrap.svelte';
	import AutoSpinsStartButton from 'components-ui-html/src/components/AutoSpinsStartButton.svelte';
	console.log('Debug Modal');
</script>

{#if stateModal.modal?.name === 'autoSpin'}
	<Popup zIndex={zIndex.modal} onclose={() => (stateModal.modal = null)}>
		<BaseContent maxWidth="100%">
			<!-- <BaseTitle>
			 
				{i18nDerived.autoSpins()}
			</BaseTitle> -->
			<BaseScrollable type="column">
				{#snippet children({ element })}
					<div class="subtitle" data-test="number-of-rounds">{i18nDerived.numberOfRounds()}</div>
					<AutoSpinsOptions />
					<AutoSpinsAdvanced
						ontoggle={(duration) => {
							if (element) {
								scrollIntoView({ element, duration });
							}
						}}
					/>
				{/snippet}
			</BaseScrollable>
			<BaseButtonWrap type="full-width">
				<AutoSpinsStartButton />
			</BaseButtonWrap>
		</BaseContent>
	</Popup>
{/if}
