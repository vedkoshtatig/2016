<script lang="ts">
	import { Container } from 'pixi-svelte';
	import { Button, type ButtonProps } from 'components-pixi';
	import { OnHotkey } from 'components-shared';

	import { getContext } from '../game/context';
	import { stateBetDerived } from 'state-shared';

	import UiSprite from './UiSprite.svelte';
	import ButtonBuyProvider from './ButtonBuyProvider.svelte';
	import { UI_BASE_SIZE } from '../game/constants';

	const props: Partial<Omit<ButtonProps, 'children'>> = $props();

	const disabled = $derived(!stateBetDerived.isBetCostAvailable());
	const sizes = { width: UI_BASE_SIZE, height: UI_BASE_SIZE };

	const context = getContext();
</script>

<ButtonBuyProvider>
	{#snippet children({ key, onpress })}
		<OnHotkey hotkey="KeyB" {disabled} {onpress} />

		<Button {...props} {sizes} {onpress} {disabled}>
			{#snippet children({ center, hovered, pressed })}

			
				{@const baseKey =  'betDoubleButton'}

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
						height={sizes.height +110}
						anchor={0.5}
					/>
				</Container>

			{/snippet}
		</Button>
	{/snippet}
</ButtonBuyProvider>