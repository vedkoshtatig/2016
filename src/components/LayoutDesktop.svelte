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
				key="desktopBg"
				anchor={0.5}
				y={DESKTOP_BASE_SIZE / 3.1}
				x={DESKTOP_BASE_SIZE * 6.5}
				scale={{ x: 1.8, y: 1.2 }}
			/>
			<Container y={-20}>
				<Container>
					<Sprite
						key="betControl"
						anchor={0.5}
						y={70}
						x={DESKTOP_BASE_SIZE * 3.7}
						scale={{ x: 1.7, y: 1.5 }}
					/>

					<Sprite
						key="betControl"
						anchor={0.5}
						y={70}
						x={DESKTOP_BASE_SIZE * 8.4}
						scale={{ x: 1.7, y: 1.5 }}
					/>

					<Sprite
						key="betControl"
						anchor={0.5}
						y={DESKTOP_BASE_SIZE * 0.52}
						x={DESKTOP_BASE_SIZE * 6.05}
						scale={{ x: 2.3, y: 1.55 }}
					/>
					<Container>
						<Container y={38} x={DESKTOP_BASE_SIZE * 4.4} scale={0.85}>
							{@render props.amountBalance({ stacked: true })}
						</Container>
						<Container y={38} x={DESKTOP_BASE_SIZE * 9.2} scale={0.85}>
							{@render props.amountWin({ stacked: true })}
						</Container>
						<Container y={38} x={DESKTOP_BASE_SIZE * 6.9} scale={0.85}>
							{@render props.amountBet({ stacked: true })}
						</Container>
					</Container>
					<Container>
						<Container
							y={DESKTOP_BASE_SIZE * 0.45}
							x={DESKTOP_BASE_SIZE * 10.23}
							scale={1.18}
							width={DESKTOP_BASE_SIZE * 1.6}
						>
							{@render props.buttonBet({ anchor: 0.5 })}
						</Container>

						<Container x={-12}>
							<Container
								y={DESKTOP_BASE_SIZE * 0.5}
								x={DESKTOP_BASE_SIZE * 5.26}
								scale={{ x: 0.4, y: 0.4 }}
							>
								{@render props.buttonDecrease({ anchor: 0.5 })}
							</Container>

							<Container y={DESKTOP_BASE_SIZE * 0.5} x={DESKTOP_BASE_SIZE * 7.03} scale={0.4}>
								{@render props.buttonIncrease({ anchor: 0.5 })}
							</Container>
						</Container>
					</Container>
				</Container>

				<Container x={-10}>
					<Sprite
						key="vantaLogo"
						anchor={0.5}
						y={DESKTOP_BASE_SIZE * 0.4}
						x={DESKTOP_BASE_SIZE * 1.6}
						scale={1.5}
					/>

					<Container y={DESKTOP_BASE_SIZE * 0.7} x={DESKTOP_BASE_SIZE * 2.3} scale={0.3}>
						{@render props.buttonGameRules({ anchor: 0.5 })}
					</Container>
					<Container y={DESKTOP_BASE_SIZE * 0.25} x={DESKTOP_BASE_SIZE * 2.3} scale={0.4}>
						{@render props.buttonMenu({ anchor: 0.5 })}
					</Container>
				</Container>

				<Container y={7} x={40}>
					<Container
						y={DESKTOP_BASE_SIZE * 0.65}
						x={DESKTOP_BASE_SIZE * 11.05}
						scale={{ x: 0.9, y: 0.3 }}
					>
						{@render props.buttonAutoSpin({ anchor: 0.5 })}
					</Container>
					<Container
						y={DESKTOP_BASE_SIZE * 0.29}
						x={DESKTOP_BASE_SIZE * 11.05}
						scale={{ x: 0.9, y: 0.3 }}
					>
						{@render props.buttonTurbo({ anchor: 0.5 })}
					</Container>
				</Container>
			</Container>
		</Container>
	</Container>
</MainContainer>

{#if stateUi.menuOpen}
	<MainContainer standard alignVertical="bottom">
		<Container
			x={context.stateLayoutDerived.mainLayoutStandard().width * 0.5}
			y={context.stateLayoutDerived.mainLayoutStandard().height - DESKTOP_BASE_SIZE}
		>
			<Sprite key="menuBackground" anchor={0.5} y={-65} x={-475} scale={{ x: 1.7, y: 1.7 }} />
			<Container scale={{ x: 1.1, y: 0.2 }} y={-65} x={-450}>
				{@render props.buttonSoundSwitch({ anchor: 0.5 })}
			</Container>
		</Container>
	</MainContainer>
{/if}
