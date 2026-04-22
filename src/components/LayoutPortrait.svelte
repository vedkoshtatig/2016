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
			<Sprite
				key="portraitBg"
				anchor={0.5}
				y={-DESKTOP_BASE_SIZE}
				x={DESKTOP_BASE_SIZE * 6.5}
				scale={{ x: 4.2, y: 2.9 }}
			/>

			<Container y={DESKTOP_BASE_SIZE * 0.2} x={DESKTOP_BASE_SIZE * 4.2} scale={1.2}>
				{@render props.amountBalance({ stacked: true, center: true })}
			</Container>
			<Container y={DESKTOP_BASE_SIZE * 0.2} x={DESKTOP_BASE_SIZE * 8.8} scale={1.2}>
				{@render props.amountWin({ stacked: true, center: true })}
			</Container>
		</Container>
		<!-- <Container y={DESKTOP_BASE_SIZE * 0.7} x={DESKTOP_BASE_SIZE *2.3} scale={0.3}>
			{@render props.buttonGameRules({ anchor: 0.5 })}
		</Container> -->
		<Container y={-DESKTOP_BASE_SIZE * 1.4} x={DESKTOP_BASE_SIZE * 9.2} scale={0.6}>
			{@render props.buttonMenu({ anchor: 0.5 })}
		</Container>
		<!-- 
		<Container y={DESKTOP_BASE_SIZE * 0.65} x={DESKTOP_BASE_SIZE * 11.05} scale={{ x: 0.8, y: 0.3 }}>
			{@render props.buttonAutoSpin({ anchor: 0.5 })}
		</Container> -->
		<!-- <Container 	y={DESKTOP_BASE_SIZE * 0.29} x={DESKTOP_BASE_SIZE * 11.05} scale={{ x: 0.8, y: 0.3}}>
			{@render props.buttonTurbo({ anchor: 0.5 })}
		</Container> -->
		<Sprite
			key="betControl2"
			anchor={0.5}
			y={DESKTOP_BASE_SIZE * 0.52}
			x={DESKTOP_BASE_SIZE * 6.5}
			scale={{ x: 2.7, y: 2.7 }}
		/>
		<Container y={DESKTOP_BASE_SIZE * 0.2} x={DESKTOP_BASE_SIZE * 6.5} scale={1.2}>
			{@render props.amountBet({ stacked: true, center: true })}
		</Container>
		<Container>
			<Container
				y={-DESKTOP_BASE_SIZE}
				x={DESKTOP_BASE_SIZE * 6.5}
				scale={2}
				width={DESKTOP_BASE_SIZE * 2.6}
			>
				{@render props.buttonBet({ anchor: 0.5 })}
			</Container>

			<Container
				y={-DESKTOP_BASE_SIZE / 1.8}
				x={DESKTOP_BASE_SIZE * 4.85}
				scale={{ x: 0.8, y: 0.8 }}
			>
				{@render props.buttonDecrease({ anchor: 0.5 })}
			</Container>

			<Container y={-DESKTOP_BASE_SIZE / 1.8} x={DESKTOP_BASE_SIZE * 8.15} scale={0.8}>
				{@render props.buttonIncrease({ anchor: 0.5 })}
			</Container>
			<Sprite
				key="vantaLogo"
				anchor={0.5}
				y={-DESKTOP_BASE_SIZE * 1.4}
				x={DESKTOP_BASE_SIZE * 3.9}
				scale={1.2}
			/>
		</Container>
	</Container>
</MainContainer>

{#if stateUi.menuOpen}
	<MainContainer standard alignVertical="bottom">
		<Container
			x={context.stateLayoutDerived.mainLayoutStandard().width * 0.5}
			y={context.stateLayoutDerived.mainLayoutStandard().height - DESKTOP_BASE_SIZE}
		>
			<Sprite
				key="menuBackground"
				anchor={0.5}
				y={-DESKTOP_BASE_SIZE * 2.5}
				x={-DESKTOP_BASE_SIZE * 1.5}
				scale={{ x: 2.5, y: 2.2 }}
			/>
			<Container
				scale={{ x: 1.1, y: 0.2 }}
				y={-DESKTOP_BASE_SIZE * 2.5}
				x={-DESKTOP_BASE_SIZE * 1.3}
			>
				{@render props.buttonSoundSwitch({ anchor: 0.5 })}
			</Container>
			<Sprite
				key="menuBackground"
				anchor={0.5}
				y={-DESKTOP_BASE_SIZE * 3.65}
				x={-DESKTOP_BASE_SIZE * 1.5}
				scale={{ x: 2.5, y: 2.2 }}
			/>
			<Container
				y={-DESKTOP_BASE_SIZE * 3.65}
				x={-DESKTOP_BASE_SIZE * 1.1}
				scale={{ x: 1.8, y: 0.35 }}
			>
				{@render props.buttonTurbo({ anchor: 0.5 })}
			</Container>

			<Sprite
				key="menuBackground"
				anchor={0.5}
				y={-DESKTOP_BASE_SIZE * 4.8}
				x={-DESKTOP_BASE_SIZE * 1.5}
				scale={{ x: 2.5, y: 2.2 }}
			/>
			<Container y={-DESKTOP_BASE_SIZE * 4.8} x={-DESKTOP_BASE_SIZE *0.9} scale={{ x: 1.6, y: 0.22}}>
				{@render props.buttonGameRules({ anchor: 0.5 })}
			</Container>
			<Sprite
				key="menuBackground"
				anchor={0.5}
				y={-DESKTOP_BASE_SIZE * 2.5}
				x={DESKTOP_BASE_SIZE * 1.5}
				scale={{ x: 2.5, y: 2.2 }}
			/>
	<Container
				scale={{ x: 1.1, y: 0.2 }}
				y={-DESKTOP_BASE_SIZE * 2.5}
				x={DESKTOP_BASE_SIZE * 1.7}
			>
				{@render props.buttonSoundSwitch({ anchor: 0.5 })}
			</Container>
			<Sprite
				key="menuBackground"
				anchor={0.5}
				y={-DESKTOP_BASE_SIZE * 3.65}
				x={DESKTOP_BASE_SIZE * 1.5}
				scale={{ x: 2.5, y: 2.2 }}
			/>
			<Container
				y={-DESKTOP_BASE_SIZE * 3.65}
				x={DESKTOP_BASE_SIZE * 1.8}
				scale={{ x: 1.8, y: 0.35 }}
			>
				{@render props.buttonTurbo({ anchor: 0.5 })}
			</Container>
			<Sprite
				key="menuBackground"
				anchor={0.5}
				y={-DESKTOP_BASE_SIZE * 4.8}
				x={DESKTOP_BASE_SIZE * 1.5}
				scale={{ x: 2.5, y: 2.2 }}
			/>
			<Container
				y={-DESKTOP_BASE_SIZE * 4.75}
				x={DESKTOP_BASE_SIZE * 1.5}
				scale={{ x: 1.6, y: 0.6 }}
			>
				{@render props.buttonAutoSpin({ anchor: 0.5 })}
			</Container>
		</Container>
	</MainContainer>
{/if}
