<script lang="ts">
	import { Container } from 'pixi-svelte';
	import { Button, type ButtonProps } from 'components-pixi';
	import { stateBet, stateBetDerived } from 'state-shared';

	import UiSprite from './UiSprite.svelte';
	import { UI_BASE_SIZE } from '../game/constants';
	import { getContext } from '../game/context';

	const props: Partial<Omit<ButtonProps, 'children'>> = $props();

	const context = getContext();

	const sizes = { width: UI_BASE_SIZE, height: UI_BASE_SIZE };

	const active = $derived(stateBet.isTurbo);
	const disabled = $derived(stateBet.isSpaceHold);

	const onpress = () => {
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });
		stateBetDerived.updateIsTurbo(!stateBet.isTurbo, { persistent: true });
	};

	context.eventEmitter.subscribeOnMount({
		stopButtonClick: () => stateBetDerived.updateIsTurbo(true, { persistent: false }),
		stopButtonEnable: () => stateBetDerived.updateIsTurbo(false, { persistent: false }),
	});
</script>

<Button {...props} {sizes} {onpress} {disabled}>
	{#snippet children({ center, hovered, pressed })}
		<Container {...center}>
			<UiSprite
				assetKey={
					disabled
						? 'turboButton_disabled'
						: active
						? pressed
							? 'turboButton_active_down'
							: hovered
							? 'turboButton_active_hover'
							: 'turboButton_active'
						: pressed
						? 'turboButton_down'
						: hovered
						? 'turboButton_hover'
						: 'turboButton'
				}
				width={sizes.width}
				height={sizes.height}
				anchor={0.5}
			/>
		</Container>
	{/snippet}
</Button>