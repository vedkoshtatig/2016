<script lang="ts">
	import { Container, Sprite, SpineProvider, SpineTrack, Text } from 'pixi-svelte';
	import { getContext } from '../game/context';
	import ButtonBuy from './ButtonBuy.svelte';
	import BuyDoubleBet from './BuyDoubleBet.svelte';

	const context = getContext();
	const layout = context.stateGameDerived.boardLayout();

	// Custom offsets for Buy Board
	const offsetX = 0;
	const offsetY = 0;

	const scaleFactor = 1.2;
</script>

<!-- BUY BOARD MAIN CONTAINER -->
<Container
	x={layout.x / 1.4}
	y={layout.y * 1.05}
	height={layout.height}
	scale={scaleFactor}
	pivot={layout.pivot}
>
	<Container>
		<Sprite
			key="buyFreeSpinBg"
			anchor={0.5}
			x={0}
			y={0}
			width={layout.width * 1.1}
			height={layout.height * 1.1}
			scale={{ x: 0.7, y: 0.7 }}
			zIndex={-10}
		/>
		<Container x={0} y={-40}>
			<ButtonBuy x={0} y={0} scale={{ x: 0.83, y: 0.43 }} anchor={0.5} />

			<Text
				text="BUY"
				anchor={0.5}
				x={0}
				y={0}
				style={{
					fill: '#ffffff',
					fontSize: 36,
					fontWeight: 'bold',
				}}
			/>
		</Container>
		<Container x={0} y={40}>
			<ButtonBuy x={0} y={0} scale={{ x: 0.83, y: 0.43 }} anchor={0.5} />

			<Text
				text="BUY"
				anchor={0.5}
				x={0}
				y={0}
				style={{
					fill: '#ffffff',
					fontSize: 36,
					fontWeight: 'bold',
				}}
			/>
		</Container>
	</Container>
	<Container>
		<Sprite
			key="doubleBetbg"
			anchor={0.5}
			x={0}
			y={layout.y / 2.7}
			width={layout.width * 1.1}
			height={layout.height * 1.1}
			scale={{ x: 0.7, y: 0.7 }}
			zIndex={-10}
		/>
        <Container x={0} y={148}>
			<BuyDoubleBet x={0} y={0} scale={{ x: 0.83, y: 0.42 }} anchor={0.5} />

			<Text
				text="Double"
				anchor={0.5}
				x={0}
				y={0}
				style={{
					fill: '#ffffff',
					fontSize: 25,
					fontWeight: 'bold',
				}}
			/>
		</Container>
	</Container>
</Container>
