<script lang="ts">
	import { stateUi } from 'state-shared';
	import { BLACK } from 'constants-shared/colors';
	import { MainContainer } from 'components-layout';
	import { Container, Rectangle, anchorToPivot } from 'pixi-svelte';
	import { DESKTOP_BASE_SIZE, DESKTOP_BACKGROUND_WIDTH_LIST } from '../game/constants';
	import { LANDSCAPE_BASE_SIZE, LANDSCAPE_BACKGROUND_WIDTH_LIST } from '../game/constants';
	import type { LayoutUiProps } from '../game/types';
	import { getContext } from '../game/context';

	const props: LayoutUiProps = $props();
	const context = getContext();
</script>

<Container x={20}>
	{@render props.gameName()}
</Container>

<Container x={context.stateLayoutDerived.canvasSizes().width - 20}>
	{@render props.logo()}
</Container>

<MainContainer standard alignVertical="bottom">

	<Container
		x={context.stateLayoutDerived.mainLayoutStandard().width * 0.5}
		y={context.stateLayoutDerived.mainLayoutStandard().height - DESKTOP_BASE_SIZE - 10}
		pivot={anchorToPivot({
			anchor: { x: 0.5, y: 0 },
			sizes: {
				height: DESKTOP_BASE_SIZE,
				width: DESKTOP_BACKGROUND_WIDTH_LIST.reduce((sum, width) => sum + width, 0),
			},
		})}
	>
	<!-- <Rectangle
	alpha={0.5}
	backgroundColor={BLACK}
	width={context.stateLayoutDerived.canvasSizes().width}
	height={context.stateLayoutDerived.canvasSizes().height}
	x={context.stateLayoutDerived.canvasSizes().width * 0.5}
	y={context.stateLayoutDerived.canvasSizes().height * 0.5}
	anchor={0.5}
/> -->
		<Container y={DESKTOP_BASE_SIZE * 0.42} x={DESKTOP_BASE_SIZE*3.4} scale={0.7}>
			{@render props.amountBalance({ stacked: true })}
		</Container>

		<Container y={DESKTOP_BASE_SIZE * 0.38} x={DESKTOP_BASE_SIZE*6.4} scale={0.8}>
			{@render props.amountWin({ stacked: true })}
		</Container>

		<Container y={DESKTOP_BASE_SIZE * 0.42} x={DESKTOP_BASE_SIZE*9.4} scale={0.7}>
			{@render props.amountBet({ stacked: true })}
		</Container>

		<Container y={DESKTOP_BASE_SIZE * 0.63} x={DESKTOP_BASE_SIZE-150} scale={0.63}>
			{@render props.buttonMenu({ anchor: 0.5 })}
		</Container>

		<Container y={DESKTOP_BASE_SIZE * 1.08} x={DESKTOP_BASE_SIZE*1.1} scale={0.8}>
			{@render props.buttonBuyBonus({ anchor: 0.5 })}
		</Container>
		<Container y={DESKTOP_BASE_SIZE * 0.63} x={DESKTOP_BASE_SIZE*1.5} scale={0.5}>
			{@render props.buttonSoundSwitch({ anchor: 0.5 })}
		</Container>

		<Container y={DESKTOP_BASE_SIZE * 0.62} x={DESKTOP_BASE_SIZE*13} scale={0.7}>
			{@render props.buttonAutoSpin({ anchor: 0.5 })}
		</Container>

		<Container y={DESKTOP_BASE_SIZE * 0.4} x={DESKTOP_BASE_SIZE*12.1} scale={1}>
			{@render props.buttonBet({ anchor: 0.5 })}
		</Container>

		<Container y={DESKTOP_BASE_SIZE * 0.62} x={DESKTOP_BASE_SIZE*11.2} scale={0.7}>
			{@render props.buttonTurbo({ anchor: 0.5 })}
		</Container>

		<Container y={DESKTOP_BASE_SIZE * 0.65} x={DESKTOP_BASE_SIZE*8.4} scale={0.6}>
			{@render props.buttonDecrease({ anchor: 0.5 })}
		</Container>

		<Container y={DESKTOP_BASE_SIZE * 0.65} x={DESKTOP_BASE_SIZE*10.4} scale={0.6}>
			{@render props.buttonIncrease({ anchor: 0.5 })}
		</Container>
	</Container>
</MainContainer>

{#if stateUi.menuOpen}
	<Rectangle
		eventMode="static"
		cursor="pointer"
		alpha={0.5}
		anchor={0.5}
		backgroundColor={BLACK}
		width={context.stateLayoutDerived.canvasSizes().width}
		height={context.stateLayoutDerived.canvasSizes().height}
		x={context.stateLayoutDerived.canvasSizes().width * 0.5}
		y={context.stateLayoutDerived.canvasSizes().height * 0.5}
		onpointerup={() => (stateUi.menuOpen = false)}
	/>

	<MainContainer standard alignVertical="bottom">
		<Container
			x={298}
			y={context.stateLayoutDerived.mainLayoutStandard().height - DESKTOP_BASE_SIZE - 10}
		>
			<Container scale={0.8} y={DESKTOP_BASE_SIZE * 0.5 - 150 - 170 * 3}>
				{@render props.buttonPayTable({ anchor: 0.5 })}
			</Container>

			<Container scale={0.8} y={DESKTOP_BASE_SIZE * 0.5 - 150 - 170 * 2}>
				{@render props.buttonGameRules({ anchor: 0.5 })}
			</Container>

			<Container scale={0.8} y={DESKTOP_BASE_SIZE * 0.5 - 150 - 170 * 1}>
				{@render props.buttonSettings({ anchor: 0.5 })}
			</Container>


			<Container scale={0.8} y={DESKTOP_BASE_SIZE * 0.5}>
				{@render props.buttonMenuClose({ anchor: 0.5 })}
			</Container>
		</Container>
	</MainContainer>
{/if}