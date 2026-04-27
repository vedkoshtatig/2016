<script lang="ts">
	import { Container, Sprite, Text, Rectangle, BitmapText } from 'pixi-svelte';
	import { getContext } from '../game/context';
	import ButtonBuyBonus from './ButtonBuyBonus.svelte';
	import { stateBet } from 'state-shared';

	const context = getContext();
	const layout = context.stateGameDerived.boardLayout();
	const scaleFactor = 1.2;

	// ✅ STACK STATE
	let explosionStack: { symbol: string; value: number }[] = [];

	// ✅ NEW: offset for scrolling effect
	let stackOffsetY = 0;
	const ITEM_HEIGHT = 40;
	const MASK_HEIGHT = layout.height * 0.55;

	context.eventEmitter.subscribeOnMount({
		symbolExplode: ({ data }) => {
			explosionStack = [
				{
					symbol: data.symbol,
					value: data.value,
				},
				...explosionStack,
			];

			const totalHeight = explosionStack.length * ITEM_HEIGHT;

			if (totalHeight > MASK_HEIGHT) {
				stackOffsetY += 20;
			} else {
				stackOffsetY = 0;
			}
		},
		bet: () => {
			explosionStack = [];
			stackOffsetY = 0;
		},
		clearLeaderboard: () => {
			explosionStack = [];
			stackOffsetY = 0;
		},
	});
</script>

<!-- ================= MAIN CONTAINER ================= -->
<Container
	x={layout.x / 1.4 - 20}
	y={layout.y * 1.05}
	height={layout.height}
	scale={scaleFactor}
	pivot={layout.pivot}
>
	<!-- ===== BUY BUTTONS ===== -->
	<Container>
		<Sprite
			key="buyFreeSpinBg"
			anchor={0.5}
			x={0}
			y={1}
			width={layout.width * 1.1}
			height={layout.height * 1.1}
			scale={{ x: 0.33, y: 0.34 }}
			zIndex={-10}
		/>

		<Container
			x={0}
			y={-40}
			interactive={true}
			onclick={() => (stateBet.activeBetModeKey = 'BONUS')}
		>
			<ButtonBuyBonus x={0} y={0} scale={{ x: 0.83, y: 0.52 }} anchor={0.5} />
			<BitmapText
				text={'BUY'}
				anchor={0.5}
				x={0}
				y={-15}
				style={{
					fontFamily: 'Neuton',
					fill: '#ede18c',
					fontSize: 10,
					fontWeight: 'bold',
				}}
				interactive={false}
				eventMode="none"
			/>
			<BitmapText
				text={'FREE SPIN'}
				anchor={0.5}
				x={0}
				y={-2}
				style={{
					fontFamily: 'Neuton',
					fill: '#ede18c',
					fontSize: 10,
					fontWeight: 'bold',
				}}
				interactive={false}
				eventMode="none"
			/>
			<BitmapText
				text={`$${stateBet.betAmount * 100}`}
				anchor={0.5}
				x={0}
				y={15}
				style={{
					fontFamily: 'Neuton',
					fill: '#ede18c',
					fontSize: 18,
					fontWeight: 'bolder',
				}}
				interactive={false}
				eventMode="none"
			/>
		</Container>

		<Container
			x={0}
			y={40}
			interactive={true}
			onclick={() => (stateBet.activeBetModeKey = 'superBonus')}
		>
			<ButtonBuyBonus x={0} y={0} scale={{ x: 0.83, y: 0.52 }} anchor={0.5} />
			<BitmapText
				text={'BUY'}
				anchor={0.5}
				x={0}
				y={-17}
				style={{ fill: '#ede18c', fontSize: 10 }}
			/>
			<BitmapText
				text={'SUPER'}
				anchor={0.5}
				x={0}
				y={-6}
				style={{
					fontFamily: 'Neuton',
					fill: '#ede18c',
					fontSize: 15,
					fontWeight: 'bolder',
				}}
				interactive={false}
				eventMode="none"
			/>
			<BitmapText
				text={'FREE SPIN'}
				anchor={0.5}
				x={0}
				y={6}
				style={{ fontFamily: 'Neuton', fill: '#ede18c', fontSize: 11 }}
				interactive={false}
				eventMode="none"
			/>
			<BitmapText
				text={`$${stateBet.betAmount * 500}`}
				anchor={0.5}
				x={0}
				y={18}
				style={{ fontFamily: 'Neuton', fill: '#ede18c', fontSize: 15, fontWeight: '900' }}
				interactive={false}
				eventMode="none"
			/>
		</Container>
	</Container>

	<!-- ===== DOUBLE ===== -->
	<Container y={25}>
		<Sprite
			key="doubleBetbg"
			anchor={0.5}
			x={0}
			y={layout.y / 2.7}
			width={layout.width * 1.1}
			height={layout.height * 1.1}
			scale={{ x: 0.33, y: 0.3 }}
			zIndex={-10}
		/>
		<Container
			x={0}
			y={148}
			interactive={true}
			onclick={() => {
				
				stateBet.activeBetModeKey = 'anteBet';
			}}
		>
			
			<!-- <ButtonBuyBonus x={0} y={0} scale={{ x: 0.83, y: 0.73 }} anchor={0.5} /> -->
			<Container y={-10}>
				<BitmapText
					text={'BET'}
					anchor={0.5}
					x={0}
					y={-22}
					style={{ fill: '#8d3b15', fontSize: 10 }}
				/>
				<BitmapText
					text={`$${stateBet.betAmount * 1.25}`}
					anchor={0.5}
					x={0}
					y={-6}
					style={{ fill: '#fffc74', fontSize: 15, fontWeight: 'bolder' }}
					interactive={false}
					eventMode="none"
				/>
				<BitmapText
					text={'DOUBLE'}
					anchor={0.5}
					x={0}
					y={6}
					style={{ fill: '#8d3b15', fontSize: 11 }}
					interactive={false}
					eventMode="none"
				/>
				<BitmapText
					text={`CHANCE TO`}
					anchor={0.5}
					x={0}
					y={15}
					style={{ fill: '#8d3b15', fontSize: 10, fontWeight: '900' }}
					interactive={false}
					eventMode="none"
				/>
				<Text
					text={`WIN FEATURE`}
					anchor={0.5}
					x={0}
					y={25}
					style={{ fontFamily: 'Neuton', fill: '#8d3b15', fontSize: 11, fontWeight: '800' }}
					interactive={false}
					eventMode="none"
				/>
			</Container>


			<Container y={30}>
				<Sprite
					key="onBar"
					anchor={0.5}
				
					width={layout.width * 1.1}
					height={layout.height * 1.1}
					scale={{ x: 0.33, y: 0.3 }}
				
				/>
				<Sprite
					key="onBarYes"
					anchor={0.5}
				
					width={layout.width * 1.1}
					height={layout.height * 1.1}
					scale={{ x: 0.33, y: 0.3 }}
				/>
			</Container>
		</Container>
	</Container>

	<!-- ===== STATIC BG ===== -->
	<Container
		x={layout.x / 1.98}
		y={layout.y * 1.63}
		height={layout.height}
		scale={scaleFactor}
		pivot={layout.pivot}
	>
		<Sprite
			key="Leaderboard"
			anchor={0.5}
			x={0}
			y={10}
			width={layout.width * 1.2}
			height={layout.height * 1.1}
			scale={{ x: 0.28, y: 0.3 }}
			zIndex={-10}
		/>
	</Container>

	<!-- ================= LEADERBOARD ================= -->
	<Container
		x={layout.x / 1.98}
		y={layout.y * 1.63}
		height={layout.height}
		scale={scaleFactor}
		pivot={layout.pivot}
		sortableChildren={true}
	>
		<!-- MASK -->
		<Rectangle isMask x={-48} y={-65} width={layout.width * 0.16} height={layout.height * 0.27} />

		<!-- <Sprite key="Leaderboard" anchor={0.5} x={0} y={0} scale={{ x: 0.3, y: 0.33 }} zIndex={-10} /> -->

		<Container y={stackOffsetY + 60}>
			{#each explosionStack as item, i}
				<Container x={0} y={-20 * (explosionStack.length - 1 - i)}>
					<Sprite key="buyBoardPlaceHolder" anchor={0.5} scale={{ x: 0.27, y: 0.3 }} />
					<Sprite
						key={`${item.symbol.toLowerCase()}`}
						anchor={0.5}
						x={-30}
						y={0}
						scale={{ x: 0.16, y: 0.15 }}
					/>

					<Text
						text={`+${item.value / 100}`}
						anchor={0.5}
						x={20}
						style={{
							fill: '#ede18c',
							fontSize: 14,
							fontWeight: 'bolder',
						}}
					/>
				</Container>
			{/each}
		</Container>
	</Container>
</Container>
