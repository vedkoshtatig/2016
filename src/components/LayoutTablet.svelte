<script lang="ts">
	import { stateUi } from 'state-shared';
	import { BLACK } from 'constants-shared/colors';
	import { MainContainer } from 'components-layout';
	import { Container, Rectangle, anchorToPivot } from 'pixi-svelte';

	import { getContext } from '../game/context';
	import type { LayoutUiProps } from '../game/types';
	import LabelFreeSpinCounter from './LabelFreeSpinCounter.svelte';
	import { 	TABLET_BASE_SIZE,DESKTOP_BASE_SIZE, DESKTOP_BACKGROUND_WIDTH_LIST } from '../game/constants';


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
	scale={0.7}
	pivot={anchorToPivot({
		anchor: { x: 0.5, y: 0 },
		sizes: {
			height: DESKTOP_BASE_SIZE,
			width: DESKTOP_BACKGROUND_WIDTH_LIST.reduce((sum, w) => sum + w, 0),
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
		<Container y={TABLET_BASE_SIZE*0.29} x={TABLET_BASE_SIZE*1.7} scale={0.9}>
			{@render props.amountBalance({ stacked: true })}
		</Container>

		<Container y={TABLET_BASE_SIZE*0.25 } x={TABLET_BASE_SIZE*5} scale={1.2}>
			{@render props.amountWin({ stacked: true })}
		</Container>

		<Container y={TABLET_BASE_SIZE*0.29 } x={TABLET_BASE_SIZE*8.2} scale={0.9}>
			{@render props.amountBet({ stacked: true })}
		</Container>

		<Container y={TABLET_BASE_SIZE*0.5 } x={TABLET_BASE_SIZE-550} scale={0.9}>
			{@render props.buttonMenu({ anchor: 0.5 })}
		</Container>

		<Container y={TABLET_BASE_SIZE*0.52 } x={TABLET_BASE_SIZE-400} scale={1.2}>
			{@render props.buttonBuyBonus({ anchor: 0.5 })}
		</Container>
		<Container y={TABLET_BASE_SIZE *0.5} x={TABLET_BASE_SIZE-230} scale={0.75}>
			{@render props.buttonSoundSwitch({ anchor: 0.5 })}
		</Container>

		<Container y={TABLET_BASE_SIZE *0.5} x={TABLET_BASE_SIZE*12.1} scale={1}>
			{@render props.buttonAutoSpin({ anchor: 0.5 })}
		</Container>

		<Container y={TABLET_BASE_SIZE *0.2} x={TABLET_BASE_SIZE*11.1} scale={1.5}>
			{@render props.buttonBet({ anchor: 0.5 })}
		</Container>

		<Container y={TABLET_BASE_SIZE* 0.5} x={TABLET_BASE_SIZE*10.1} scale={1}>
			{@render props.buttonTurbo({ anchor: 0.5 })}
		</Container>

		<Container y={TABLET_BASE_SIZE*0.5} x={TABLET_BASE_SIZE*7.3	} scale={0.8}>
			{@render props.buttonDecrease({ anchor: 0.5 })}
		</Container>

		<Container y={TABLET_BASE_SIZE*0.5 } x={TABLET_BASE_SIZE*9.1	} scale={0.8}>
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
			y={context.stateLayoutDerived.mainLayoutStandard().height - TABLET_BASE_SIZE - 10}
		>
			<Container scale={0.8} y={TABLET_BASE_SIZE * 0.5 - 150 - 170 * 3}>
				{@render props.buttonPayTable({ anchor: 0.5 })}
			</Container>

			<Container scale={0.8} y={TABLET_BASE_SIZE * 0.5 - 150 - 170 * 2}>
				{@render props.buttonGameRules({ anchor: 0.5 })}
			</Container>

			<Container scale={0.8} y={TABLET_BASE_SIZE * 0.5 - 150 - 170 * 1}>
				{@render props.buttonSettings({ anchor: 0.5 })}
			</Container>


			<Container scale={0.8} y={TABLET_BASE_SIZE * 0.5}>
				{@render props.buttonMenuClose({ anchor: 0.5 })}
			</Container>
		</Container>
	</MainContainer>
{/if}
