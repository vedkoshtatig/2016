<script lang="ts">
	import type { ButtonProps } from 'components-pixi';
	import { stateUi } from 'state-shared';

	import UiButton from './UiButton.svelte';
	import { UI_BASE_SIZE } from '../game/constants';
	import { getContext } from '../game/context';

	const props: Partial<Omit<ButtonProps, 'children'>> = $props();
	const context = getContext();
	const sizes = { width: UI_BASE_SIZE, height: UI_BASE_SIZE };

	const active = $derived(stateUi.menuOpen);

	const onpress = () => {
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });

		// toggle menu open / close
		stateUi.menuOpen = !stateUi.menuOpen;
	};
</script>

<UiButton
	{...props}
	{sizes}
	{active}
	{onpress}
	icon={stateUi.menuOpen ? 'menuExit' : 'menu'}
/>