<script lang="ts">
	import { Container } from 'pixi-svelte';
	import type { ButtonProps } from 'components-pixi';
	import { stateBet, stateBetDerived, stateModal } from 'state-shared';
	import { getContextLayout } from 'utils-layout';

	import UiButton from './UiButton.svelte';
	import { getContext } from '../game/context';
	import { UI_BASE_SIZE } from '../game/constants';

	const props: Partial<Omit<ButtonProps, 'children'>> = $props();

	const context = getContext();
	const { stateLayoutDerived } = getContextLayout();

	const sizes = { width: UI_BASE_SIZE, height: UI_BASE_SIZE };

	const active = $derived(stateModal.modal?.name === 'settings');

	const icon = $derived.by(() => {
		return stateModal.modal?.name === 'settings' ? 'menuExit' : 'menu';
	});

	const onpress = () => {
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });

		stateModal.modal =
			stateModal.modal?.name === 'settings'
				? null
				: { name: 'settings' };
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