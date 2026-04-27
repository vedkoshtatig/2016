<script lang="ts">
	import { zIndex } from 'constants-shared/zIndex';
	import Popup from './Popup.svelte';
	import { stateModal, stateSound } from 'state-shared';

	import BaseTitle from './BaseTitle.svelte';
	import BaseContent from './BaseContent.svelte';
	import BaseScrollable from './BaseScrollable.svelte';
	import ModalSettingsSound from './ModalSettingsSound.svelte';
	import { i18nDerived } from '../../i18n/i18nDerived';

</script>

{#if stateModal.modal?.name === 'settings'}
	<Popup zIndex={zIndex.modal} onclose={() => (stateModal.modal = null)}>
		<div class="wrap">
			

			<ModalSettingsSound
				bind:value={stateSound.volumeValueSoundEffect}
				iconSet={{
					on: 'assets/sprites/uiSlotsAssetsBespoke/soundnormal.png',
					off: 'assets/sprites/uiSlotsAssetsBespoke/sounddisable.png',
					hover: 'assets/sprites/uiSlotsAssetsBespoke/soundhover.png',
					active: 'assets/sprites/uiSlotsAssetsBespoke/soundnormal.png',
				}}
			>
				{i18nDerived.soundEffectVolume()}
			</ModalSettingsSound>
			<ModalSettingsSound
				bind:value={stateSound.volumeValueMusic}
				iconSet={{
					on: 'assets/sprites/uiSlotsAssetsBespoke/musicnormal.png',
					off: 'assets/sprites/uiSlotsAssetsBespoke/sounddisable.png',
					hover: 'assets/sprites/uiSlotsAssetsBespoke/musichover.png',
					active: 'assets/sprites/uiSlotsAssetsBespoke/musicnormal.png',
				}}
			>
				{i18nDerived.musicVolume()}
			</ModalSettingsSound>
		</div>
	</Popup>
{/if}

<style lang="scss">
	.wrap {
		position: relative;
		z-index: 200;
		right: 30%;
		background-color: rgba(0, 0, 0, 0.8);
		top: 27%;
		padding: 1rem;
		border-radius: 1rem;
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		display: flex;
		flex-direction: column;
		
	}
</style>
