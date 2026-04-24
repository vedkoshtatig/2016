<script lang="ts">
	import { Button } from 'components-shared';
	import {
		stateUi,
		stateBet,
		stateModal,
		stateBetDerived,
		AUTO_SPINS_TEXT_OPTION_MAP,
		AUTO_SPINS_LOSS_LIMIT_MULTIPLIER_MAP,
		AUTO_SPINS_SINGLE_WIN_LIMIT_MULTIPLIER_MAP,
	} from 'state-shared';
	import { getContextEventEmitter } from 'utils-event-emitter';
	import { i18nDerived } from '../../i18n/i18nDerived';
	import type { EmitterEventModal } from '../../game/types';
	const { eventEmitter } = getContextEventEmitter<EmitterEventModal>();
	const startAutoBet = () => {
		stateBet.autoSpinsCounter = AUTO_SPINS_TEXT_OPTION_MAP[stateUi.autoSpinsText];
		stateBet.autoSpinsLossLimitAmount =
			stateBet.betAmount * AUTO_SPINS_LOSS_LIMIT_MULTIPLIER_MAP[stateUi.autoSpinsLossLimitText];
		stateBet.autoSpinsSingleWinLimitAmount =
			stateBet.betAmount *
			AUTO_SPINS_SINGLE_WIN_LIMIT_MULTIPLIER_MAP[stateUi.autoSpinsSingleWinLimitText];
		if (stateBetDerived.activeBetMode().type === 'buy') stateBet.activeBetModeKey = 'BASE';
		eventEmitter.broadcast({ type: 'soundPressGeneral' });
		eventEmitter.broadcast({ type: 'autoBet' });
		stateModal.modal = null;
	};
</script>

<img
	src="/assets/sprites/uiSlotsAssetsBespoke/autoPlayStart.png"
	alt="Start Autoplay"
	class="btn-image"
	onclick={startAutoBet}
/>

<style lang="scss">
 .btn-image { width: 50%; // 🔥 fill button properly 
	height: auto; display: block; cursor:pointer; margin: 0; padding: 0; }
</style>
