<script lang="ts">
	import { Text } from 'pixi-svelte';
	import { Button, type ButtonProps } from 'components-pixi';
	import { stateModal, stateBet, stateBetDerived } from 'state-shared';

	import UiSprite from './UiSprite.svelte';
	import { UI_BASE_FONT_SIZE, UI_BASE_SIZE } from '../game/constants';
	import { getContext } from '../game/context';
	import { i18nDerived } from '../i18n/i18nDerived';

	const props: Partial<Omit<ButtonProps, 'children'>> = $props();

	const { stateXstateDerived, eventEmitter, stateLayoutDerived } = getContext();

	const sizes = { width: UI_BASE_SIZE, height: UI_BASE_SIZE };

	const disabled = $derived(!stateXstateDerived.isIdle());

	const active = $derived(stateBetDerived.activeBetMode()?.type === 'activate');

	/* PORTRAIT CHECK */
	const isLandscape = $derived(() => {
		const { width, height } = context.stateLayoutDerived.canvasSizes();
		return width > height;
	});
	const context = getContext();
	const openModal = () => (stateModal.modal = { name: 'buyBonus' });

	const disableActiveBetMode = () => (stateBet.activeBetModeKey = 'BASE');

	const onpress = () => {
		eventEmitter.broadcast({ type: 'soundPressGeneral' });

		if (active) {
			disableActiveBetMode();
		} else {
			eventEmitter.broadcast({ type: 'openPopUp' });
		}
	};

	const getState = (value: {
		active: boolean;
		disabled: boolean;
		hovered: boolean;
		pressed: boolean;
	}) => {
		if (value.disabled) return 'disabled' as const;
		if (value.pressed) return 'down' as const;
		if (value.hovered) return 'hover' as const;
		if (value.active) return 'normal' as const;
		return 'default' as const;
	};

	/* DIFFERENT ASSET KEYS */
	const getAssetKey = (state: string) => {
		if (isLandscape()) {
			return state === 'default' ? 'buyFreeSpinButton' : `buyFreeSpinButton_${state}`;
		}
		return state === 'default' ? 'Box_01' : `Box_01`;
	};
</script>

<Button {...props} {sizes} {disabled} {onpress}>
	{#snippet children({ center, hovered, pressed })}
		{@const state = getState({
			active,
			disabled,
			hovered,
			pressed,
		})}

		<UiSprite
			assetKey={getAssetKey(state)}
			{...center}
			anchor={0.5}
			width={sizes.width}
			height={sizes.height}
		/>
	{/snippet}
</Button>
