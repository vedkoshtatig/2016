<script lang="ts">
	import { Container } from 'pixi-svelte';
	import type { ButtonProps } from 'components-pixi';
	import { stateBet, stateBetDerived, stateModal, stateUi } from 'state-shared';
	import { getContextLayout } from 'utils-layout';

	import UiButton from './UiButton.svelte';
	import { getContext } from '../game/context';
	import { UI_BASE_SIZE } from '../game/constants';
	import ButtonBetAutoSpinsCounter from './ButtonBetAutoSpinsCounter.svelte';

	const props: Partial<Omit<ButtonProps, 'children'>> = $props();

	const context = getContext();
	const { stateLayoutDerived } = getContextLayout();

	const sizes = { width: UI_BASE_SIZE, height: UI_BASE_SIZE };

	// ✅ Active ONLY when modal is open (not when spins running)
const active = $derived(
	stateModal.modal?.name === 'autoSpin' &&
	!stateBetDerived.hasAutoBetCounter()
);

	// ✅ Disabled logic (unchanged)
	const disabled = $derived.by(() => {
		if (stateBet.isSpaceHold) return true;
		if (!context.stateXstateDerived.isIdle() && !stateBetDerived.hasAutoBetCounter()) return true;
		if (!stateBetDerived.isBetCostAvailable()) return true;
		return false;
	});

	// ✅ Icon logic (3 states)
	const icon = $derived.by(() => {
	if (stateBetDerived.hasAutoBetCounter()) return undefined;

	if (stateModal.modal?.name === 'autoSpin') return 'autoSpinActive';

	const layout = stateLayoutDerived.layoutType();
	if (layout === 'portrait') return 'autoSpinPortrait';
	return 'autoSpin';
});

	const onpress = () => {
	context.eventEmitter.broadcast({ type: 'soundPressGeneral' });

	// If spins running → stop
	if (stateBetDerived.hasAutoBetCounter()) {
		stateBet.autoSpinsCounter = 0;
		return;
	}

	// Toggle modal directly
	if (stateModal.modal?.name === 'autoSpin') {
		stateModal.modal = null;
	} else {
		stateModal.modal = { name: 'autoSpin' };
	}
};
</script>

<UiButton
	{...props}
	{sizes}
	{active}
	{onpress}
	{disabled}
	{icon}
>
	{#if stateBetDerived.hasAutoBetCounter()}
		<Container x={sizes.width * 0.5} y={sizes.height * 0.5}>
			<ButtonBetAutoSpinsCounter />
		</Container>
	{/if}
</UiButton>