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

<Container x={20}>
	{@render props.gameName()}
</Container>

<Container x={context.stateLayoutDerived.canvasSizes().width - 20}>
	{@render props.logo()}
</Container>

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

	<!-- <Sprite
		key="betPanelbg"
		anchor={0.5}
		x={context.stateLayoutDerived.mainLayoutStandard().width * 0.5}
		y={context.stateLayoutDerived.mainLayoutStandard().height - DESKTOP_BASE_SIZE + 55}
		width={baseHeight}
		height={DESKTOP_BASE_SIZE +10	}
	/> -->
	<Container
		x={context.stateLayoutDerived.mainLayoutStandard().width * 0.5}
		y={context.stateLayoutDerived.mainLayoutStandard().height - DESKTOP_BASE_SIZE}
		pivot={anchorToPivot({
			anchor: { x: 0.5, y: 0 },
			sizes: {
				height: DESKTOP_BASE_SIZE / 6,
				width: DESKTOP_BACKGROUND_WIDTH_LIST.reduce((sum, width) => sum + width, 0),
			},
		})}
	>
		<Container>
			

			<Container y={7} x={DESKTOP_BASE_SIZE * 2.1} scale={1.2}>
				{@render props.amountBalance({ stacked: true })}
			</Container>

			<Container y={7} x={DESKTOP_BASE_SIZE * 8.5} scale={1.2}>
				{@render props.amountWin({ stacked: true })}
			</Container>

		
		</Container>
		<Container y={DESKTOP_BASE_SIZE * 0.42} x={DESKTOP_BASE_SIZE - 50} scale={0.75}>
			{@render props.buttonMenu({ anchor: 0.5 })}
		</Container>
		///////Bet Types (Bet , autospin , turbo)
		<Container y={DESKTOP_BASE_SIZE * 0.45}
				x={DESKTOP_BASE_SIZE * 10.55}>
			<Container y={-DESKTOP_BASE_SIZE/2.7} x={DESKTOP_BASE_SIZE/1.2} scale={0.4}>
				{@render props.buttonAutoSpin({ anchor: 0.5 })}
			</Container>
			<Container y={12} x={DESKTOP_BASE_SIZE/1.2} scale={0.4}>
				{@render props.buttonTurbo({ anchor: 0.5 })}
			</Container>

			<Container
				y={-DESKTOP_BASE_SIZE/10}
				x={0}
				scale={1}
				width={DESKTOP_BASE_SIZE * 1.4}
			>
				{@render props.buttonBet({ anchor: 0.5 })}
			</Container>
		</Container>
		/////Bet Control (bg , + , - ,bet)
		<Container y={DESKTOP_BASE_SIZE * 0.42} x={DESKTOP_BASE_SIZE * 6}>
			<Sprite
				key="betControl"
				anchor={0.5}
				x={0}
				y={0}
				width={DESKTOP_BASE_SIZE * 2.8}
				height={DESKTOP_BASE_SIZE / 1.5}
			/>
			<Container y={0} x={DESKTOP_BASE_SIZE} scale={0.25}>
				{@render props.buttonDecrease({ anchor: 0.5 })}
			</Container>

			<Container y={0} x={-DESKTOP_BASE_SIZE} scale={0.25}>
				{@render props.buttonIncrease({ anchor: 0.5 })}
			</Container>
				<Container y={-DESKTOP_BASE_SIZE/3.2} x={-DESKTOP_BASE_SIZE/4.5	} scale={1.1}>
				{@render props.amountBet({ stacked: true })}
			</Container>
		</Container>
	</Container>
</MainContainer>
