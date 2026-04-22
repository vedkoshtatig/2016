<script lang="ts">
	import { Container } from 'pixi-svelte';
	import { Button, type ButtonProps } from 'components-pixi';
	import { stateBet, stateBetDerived } from 'state-shared';
	import { getContextLayout } from 'utils-layout';

	import UiSprite from './UiSprite.svelte';
	import { UI_BASE_SIZE } from '../game/constants';
	import { getContext } from '../game/context';

	const props: Partial<Omit<ButtonProps, 'children'>> = $props();

	const context = getContext();
	const { stateLayoutDerived } = getContextLayout();

	const sizes = { width: UI_BASE_SIZE, height: UI_BASE_SIZE };

	const active = $derived(stateBet.isTurbo);
	const disabled = $derived(stateBet.isSpaceHold);

	const isPortrait = $derived(stateLayoutDerived.layoutType() === 'portrait');

	const assetPrefix = $derived.by(() => {
		return isPortrait ? 'turboButtonPortrait' : 'turboButton';
	});

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
						? `${assetPrefix}_disabled`
						: active
						? pressed
							? `${assetPrefix}_active_down`
							: hovered
							? `${assetPrefix}_active_hover`
							: `${assetPrefix}_active`
						: pressed
						? `${assetPrefix}_down`
						: hovered
						? `${assetPrefix}_hover`
						: assetPrefix
				}
				width={sizes.width}
				height={sizes.height}
				anchor={0.5}
			/>
		</Container>
	{/snippet}
</Button>