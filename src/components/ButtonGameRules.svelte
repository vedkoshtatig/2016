<script lang="ts">
	import type { ButtonProps } from 'components-pixi';
	import { stateModal } from 'state-shared';
	import { getContextLayout } from 'utils-layout';

	import UiButton from './UiButton.svelte';
	import { getContext } from '../game/context';
	import { UI_BASE_SIZE } from '../game/constants';

	const props: Partial<Omit<ButtonProps, 'children'>> = $props();

	const context = getContext();
	const { stateLayoutDerived } = getContextLayout();

	const sizes = { width: UI_BASE_SIZE * 1.3, height: UI_BASE_SIZE * 1.3 };

	// ✅ ACTIVE STATE
	const active = $derived(stateModal.modal?.name === 'gameRules');

	// ✅ ICON CONTROL (YOU control suffix here)
	const icon = $derived.by(() => {
		const layout = stateLayoutDerived.layoutType();

		if (layout === 'portrait') {
			return active ? 'infoPortrait_active' : 'infoPortrait';
		}

		return active ? 'info_active' : 'info';
	});

	// ✅ TOGGLE MODAL
	const onpress = () => {
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });

		if (stateModal.modal?.name === 'gameRules') {
			stateModal.modal = null;
		} else {
			stateModal.modal = { name: 'gameRules' };
		}
	};
</script>

<UiButton
	{...props}
	{sizes}
	{onpress}
	{icon}
	{active}
	variant="light"
/>