<script lang="ts">
	import { Button, type ButtonProps } from 'components-pixi';
	import UiSprite from './UiSprite.svelte';
	import type { ButtonIcon } from '../game/types';
	import type { Snippet } from 'svelte';

	type Props = Omit<ButtonProps, 'children'> & {
		icon?: ButtonIcon;
		sizes: { width: number; height: number };
		active?: boolean;
		children?: Snippet;
		variant?: 'dark' | 'light';
	};

	const {
		icon,
		active = false,
		variant = 'dark',
		children: childrenFromParent,
		...buttonProps
	}: Props = $props();

	/**
	 * Builds button asset key safely.
	 * UiSprite decides sprite vs rectangle fallback.
	 */
	const resolveAssetKey = (
		hovered: boolean,
		pressed: boolean,
		disabled?: boolean,
		active?: boolean
	): string | undefined => {
		// ✅ guard invalid icons (fixes ".Button" error)
		if (!icon || icon.trim() === '' ) {
			return undefined;
		}

		let suffix = '';

		if (disabled) suffix = '_disabled';
		else if (pressed) suffix = '_down';
		else if (hovered) suffix = '_hover';
		else if (active) suffix = '_normal';

		return `${icon}Button${suffix}`;
	};
</script>

<Button {...buttonProps}>
	{#snippet children({ center, hovered, pressed })}
		{@const assetKey = resolveAssetKey(
			hovered,
			pressed,
			buttonProps.disabled,
			active
		)}

		<!-- Always render UiSprite -->
		<UiSprite
			assetKey={assetKey}
			{...center}
			anchor={0.5}
			width={buttonProps.sizes.width}
			height={buttonProps.sizes.height}
			backgroundColor={
				buttonProps.disabled
					? 0xaaaaaa
					: variant === 'dark'
						? 0x000000
						: 0xffffff
			}
			{...active
				? {
						borderWidth: 6,
						borderColor:
							variant === 'dark' ? 0xffffff : 0x000000
				  }
				: {}}
		/>

		{@render childrenFromParent?.()}
	{/snippet}
</Button>