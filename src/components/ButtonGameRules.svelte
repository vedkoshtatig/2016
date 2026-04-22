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

	const icon = $derived.by(() => {
		const layout = stateLayoutDerived.layoutType();

		if (layout === 'portrait') return 'infoPortrait';
		if (layout === 'landscape') return 'info'; // optional if you have one
		if (layout === 'tablet') return 'info'; // optional if you have one

		return 'info';
	});

	const onpress = () => {
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });
		stateModal.modal = { name: 'gameRules' };
	};
</script>

<UiButton {...props} {sizes} {onpress} {icon} variant="light" />