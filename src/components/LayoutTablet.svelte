<script lang="ts">
	import { stateUi } from 'state-shared';
	import { BLACK } from 'constants-shared/colors';
	import { MainContainer } from 'components-layout';
	import { Container, Rectangle, Sprite, anchorToPivot } from 'pixi-svelte';

	import { DESKTOP_BASE_SIZE, DESKTOP_BACKGROUND_WIDTH_LIST } from '../game/constants';
	import { getContext } from '../game/context';
	import type { LayoutUiProps } from '../game/types';

	const props: LayoutUiProps = $props();
	const baseHeight = DESKTOP_BACKGROUND_WIDTH_LIST.reduce((sum, width) => sum + width, 0);
	const context = getContext();
	const layout = () => context.stateLayoutDerived.mainLayoutStandard();
</script>

<!-- <Container x={20}>
	{@render props.gameName()}
</Container>

<Container x={context.stateLayoutDerived.canvasSizes().width - 20}>
	{@render props.logo()}
</Container> -->

<MainContainer standard alignVertical="bottom">
	<!-- <Rectangle
		alpha={0.5}
		backgroundColor={BLACK}
		anchor={0.5}
		width={context.stateLayoutDerived.mainLayoutStandard().width*1.2}
		height={DESKTOP_BASE_SIZE}
		x={context.stateLayoutDerived.mainLayoutStandard().width * 0.5}
		y={
			context.stateLayoutDerived.mainLayoutStandard().height
			- DESKTOP_BASE_SIZE * 0.4
			
		}
	/> -->


	<Container
		x={context.stateLayoutDerived.mainLayoutStandard().width * 0.5}
		y={context.stateLayoutDerived.mainLayoutStandard().height - DESKTOP_BASE_SIZE }
		pivot={anchorToPivot({
			anchor: { x: 0.5, y: 0 },
			sizes: {
				height: DESKTOP_BASE_SIZE/6,
				width: DESKTOP_BACKGROUND_WIDTH_LIST.reduce((sum, width) => sum + width, 0),
			},
		})}
	>
		<Container>	

<Sprite	
		key="betControl"
		anchor={0.5}
		y={70	} x={DESKTOP_BASE_SIZE * 3.7}
		scale={{ x: 2, y: 2 }}
	/>

			<Container y={33} x={DESKTOP_BASE_SIZE * 4.45} scale={1}>
			{@render props.amountBalance({ stacked: true })}
		</Container>
<Sprite	
		key="betControl"
		anchor={0.5}
		y={70} x={DESKTOP_BASE_SIZE * 8.4}
		scale={{ x: 1.7, y: 2 }}
	/>
		<Container y={33} x={DESKTOP_BASE_SIZE * 9.3} scale={1}>
			{@render props.amountWin({ stacked: true })}
		</Container>

		

		</Container>
		<Container y={DESKTOP_BASE_SIZE * 0.7} x={DESKTOP_BASE_SIZE *2.3} scale={0.3}>
			{@render props.buttonGameRules({ anchor: 0.5 })}
		</Container>
		<Container y={DESKTOP_BASE_SIZE * 0.25} x={DESKTOP_BASE_SIZE *2.3} scale={0.4}>
			{@render props.buttonMenu({ anchor: 0.5 })}
		</Container>

		<Container y={DESKTOP_BASE_SIZE * 0.65} x={DESKTOP_BASE_SIZE * 10.95} scale={{ x: 0.8, y: 0.3 }}>
			{@render props.buttonAutoSpin({ anchor: 0.5 })}
		</Container>
		<Container 	y={DESKTOP_BASE_SIZE * 0.29} x={DESKTOP_BASE_SIZE * 10.95} scale={{ x: 0.8, y: 0.3}}>
			{@render props.buttonTurbo({ anchor: 0.5 })}
		</Container>
		<Sprite	
		key="betControl"
		anchor={0.5}
		y={DESKTOP_BASE_SIZE * 0.52} x={DESKTOP_BASE_SIZE * 6.15}
		scale={{ x: 2.3, y: 2 }}
	/>
	<Container y={DESKTOP_BASE_SIZE * 0.25} x={DESKTOP_BASE_SIZE * 7.38} scale={1}>
			{@render props.amountBet({ stacked: true })}
		</Container>
		<Container>	
			<Container
			y={DESKTOP_BASE_SIZE * 0.45} x={DESKTOP_BASE_SIZE * 10}
			scale={1}
			width={DESKTOP_BASE_SIZE * 1.3}
		>
			{@render props.buttonBet({ anchor: 0.5 })}
		</Container>

		<Container y={DESKTOP_BASE_SIZE * 0.5} x={DESKTOP_BASE_SIZE * 5.33} scale={{ x: 0.6, y: 0.6 }}>
			{@render props.buttonDecrease({ anchor: 0.5 })}
		</Container>

		<Container y={DESKTOP_BASE_SIZE * 0.52} x={DESKTOP_BASE_SIZE * 6.98} scale={0.6}>
			{@render props.buttonIncrease({ anchor: 0.5 })}
		</Container>
		<Sprite	
		key="vantaLogo"
		anchor={0.5}
		y={DESKTOP_BASE_SIZE * 0.52} x={DESKTOP_BASE_SIZE * 1.6}
		scale={1.5}
	/>
		</Container>
	</Container>
</MainContainer>



	

