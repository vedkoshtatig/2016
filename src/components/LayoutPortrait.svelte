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
				y={-DESKTOP_BASE_SIZE }
				x={DESKTOP_BASE_SIZE *6.5}
				scale={{ x: 0.37, y: 0.5 }}
			/>
			<Container y={-20}>
				<Container>
					<Sprite
						key="balanceBg"
						anchor={0.5}
						y={-DESKTOP_BASE_SIZE/1.1}
						x={DESKTOP_BASE_SIZE * 4}
						scale={{ x: 0.5, y: 0.43 }}
					/>

					<Sprite
						key="winBg"
						anchor={0.5}
						y={-DESKTOP_BASE_SIZE /1.1	}
						x={DESKTOP_BASE_SIZE * 9.25}
						scale={{ x: 0.5, y: 0.42 }}
					/>
					<Sprite
						key="betControl2"
						anchor={0.5}
						y={-DESKTOP_BASE_SIZE}
						x={DESKTOP_BASE_SIZE * 6.7}
						scale={{ x: 0.5, y: 0.47 }}
					/>
					<Sprite
						key="betMultiplier"
						anchor={0.5}
						y={-DESKTOP_BASE_SIZE/2}
						x={DESKTOP_BASE_SIZE * 6.7}
						scale={{ x: 0.5, y: 0.47 }}
					/>
					<Sprite
						key="betBg"
						anchor={0.5}
						y={-DESKTOP_BASE_SIZE}
						x={DESKTOP_BASE_SIZE * 6.7}
						scale={{ x: 0.5, y: 0.47 }}
					/>
					<Sprite
						key="spinBg"
						anchor={0.5}
						y={DESKTOP_BASE_SIZE * 0.48}
						x={DESKTOP_BASE_SIZE * 6.7}
						scale={{ x: 0.43, y: 0.39 }}
					/>

					<Container y={-DESKTOP_BASE_SIZE*1.2 }>
						{@render props.amountBalance({ stacked: true })}
						<Container y={0} x={DESKTOP_BASE_SIZE * 4} scale={0.85}>
							{@render props.amountBalance({ stacked: true })}
						</Container>
						<Container y={0} x={DESKTOP_BASE_SIZE * 9.25} scale={0.85}>
							{@render props.amountWin({ stacked: true })}
						</Container>
						<Container y={0} x={DESKTOP_BASE_SIZE * 6.7} scale={0.85}>
							{@render props.amountBet({ stacked: true })}
						</Container>
					</Container>
					<Container>
						<Container
							y={DESKTOP_BASE_SIZE * 0.475}
							x={DESKTOP_BASE_SIZE * 6.7}
							scale={0.87}
							width={DESKTOP_BASE_SIZE * 1.15}
						>
							{@render props.buttonBet({ anchor: 0.5 })}
						</Container>

						<Container x={-12}>
							<Container
								y={-DESKTOP_BASE_SIZE}
								x={DESKTOP_BASE_SIZE * 5.62}
								scale={{ x: 0.55, y: 0.65 }}
							>
								{@render props.buttonDecrease({ anchor: 0.5 })}
							</Container>

							<Container
								y={-DESKTOP_BASE_SIZE}
								x={DESKTOP_BASE_SIZE * 7.95}
								scale={{ x: 0.55, y: 0.65 }}
							>
								{@render props.buttonIncrease({ anchor: 0.5 })}
							</Container>
						</Container>
					</Container>
				</Container>

				<Container x={-10}>
					<Sprite
						key="vantaLogo"
						anchor={0.5}
						y={DESKTOP_BASE_SIZE * 0.5}
						x={DESKTOP_BASE_SIZE * 4.65}
						scale={0.4}
					/>
					
					<Container y={DESKTOP_BASE_SIZE * 0.7} x={DESKTOP_BASE_SIZE * 5.55} scale={0.3}>
						{@render props.buttonGameRules({ anchor: 0.5 })}
					</Container>
					<Container y={DESKTOP_BASE_SIZE * 0.25} x={DESKTOP_BASE_SIZE * 5.55} scale={0.4}>
						{@render props.buttonMenu({ anchor: 0.5 })}
					</Container>
				</Container>

				<Container >
					<Container
						y={DESKTOP_BASE_SIZE * 0.75}
						x={DESKTOP_BASE_SIZE * 8.4}
						scale={{ x: 1.2, y: 0.42	 }}
					>
						{@render props.buttonAutoSpin({ anchor: 0.5 })}
					</Container>
					<Container
						y={DESKTOP_BASE_SIZE * 0.28}
						x={DESKTOP_BASE_SIZE * 8.4}
						scale={{ x: 1.2	, y: 0.42 }}
					>
						{@render props.buttonTurbo({ anchor: 0.5 })}
					</Container>
				</Container>
			</Container>
		</Container>
	</Container>
</MainContainer>

