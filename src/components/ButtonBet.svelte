<script lang="ts">
	import { Container, Text } from 'pixi-svelte';
	import { Sprite } from 'pixi-svelte';
	import { getContext } from '../game/context';
	import { Button, type ButtonProps } from 'components-pixi';
	import { OnHotkey } from 'components-shared';
	import { stateBetDerived } from 'state-shared';

	import UiSprite from './UiSprite.svelte';
	import ButtonBetProvider from './ButtonBetProvider.svelte';
	import { UI_BASE_FONT_SIZE, UI_BASE_SIZE } from '../game/constants';
	import { i18nDerived } from '../i18n/i18nDerived';

	const props: Partial<Omit<ButtonProps, 'children'>> = $props();
	const disabled = $derived(!stateBetDerived.isBetCostAvailable());
	const sizes = { width: UI_BASE_SIZE, height: UI_BASE_SIZE };
	const context = getContext();
</script>

<ButtonBetProvider>
	{#snippet children({ key, onpress })}
		<OnHotkey hotkey="Space" {disabled} {onpress} />

		<Button {...props} {sizes} {onpress} {disabled}>
			{#snippet children({ center, hovered, pressed })}

				{@const isStop = key.startsWith('stop')}
				{@const baseKey = isStop ? 'stopButton' : 'spinButton'}

				<Container {...center}>
					<UiSprite
						assetKey={
							disabled
								? `${baseKey}_disabled`
								: pressed
								? `${baseKey}_down`
								: hovered
								? `${baseKey}_hover`
								: baseKey
						}
						width={sizes.width}
						height={sizes.height+30}
						anchor={0.5}
					/>
				</Container>

			{/snippet}
		</Button>
	{/snippet}
</ButtonBetProvider>
