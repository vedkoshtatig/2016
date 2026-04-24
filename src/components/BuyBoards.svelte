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
	const MASK_HEIGHT = layout.height * 0.5;

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
	x={layout.x / 1.4}
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
			y={0}
			width={layout.width * 1.1}
			height={layout.height * 1.1}
			scale={{ x: 0.7, y: 0.7 }}
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
					fill: '#7F5112',
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
					fill: '#7F5112',
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
					fill: '#7F5112',
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
				style={{ fill: '#7F5112', fontSize: 10 }}
			/>
			<BitmapText
				text={'SUPER'}
				anchor={0.5}
				x={0}
				y={-6}
				style={{
					fontFamily: 'Neuton',
					fill: '#7F5112',
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
				style={{ fontFamily: 'Neuton', fill: '#7F5112', fontSize: 11 }}
				interactive={false}
				eventMode="none"
			/>
			<BitmapText
				text={`$${stateBet.betAmount * 500}`}
				anchor={0.5}
				x={0}
				y={18}
				style={{ fontFamily: 'Neuton', fill: '#7F5112', fontSize: 15, fontWeight: '900' }}
				interactive={false}
				eventMode="none"
			/>
		</Container>
	</Container>

	<!-- ===== DOUBLE ===== -->
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
		<Container
			x={0}
			y={148}
			interactive={true}
			onclick={() => {
				console.log('done')
				stateBet.activeBetModeKey = 'anteBet';
				console.log('done')
			}}
		>
			<ButtonBuyBonus x={0} y={0} scale={{ x: 0.83, y: 0.73 }} anchor={0.5} />
			<BitmapText
				text={'BET'}
				anchor={0.5}
				x={0}
				y={-22}
				style={{ fill: '#7F5112', fontSize: 10 }}
			/>
			<BitmapText
				text={`$${stateBet.betAmount * 1.25}`}
				anchor={0.5}
				x={0}
				y={-6}
				style={{ fill: '#7F5112', fontSize: 15, fontWeight: 'bolder' }}
				interactive={false}
				eventMode="none"
			/>
			<BitmapText
				text={'DOUBLE'}
				anchor={0.5}
				x={0}
				y={6}
				style={{ fill: '#7F5112', fontSize: 11 }}
				interactive={false}
				eventMode="none"
			/>
			<BitmapText
				text={`CHANCE TO`}
				anchor={0.5}
				x={0}
				y={15}
				style={{ fill: '#7F5112', fontSize: 10, fontWeight: '900' }}
				interactive={false}
				eventMode="none"
			/>
			<Text
				text={`WIN FEATURE`}
				anchor={0.5}
				x={0}
				y={25}
								style={{ fontFamily: 'Neuton', fill: '#7F5112', fontSize: 11 , fontWeight:"800" }}
				interactive={false}
				eventMode="none"
			/>
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
			y={0}
			width={layout.width * 1.2}
			height={layout.height * 1.1}
			scale={{ x: 0.22, y: 0.21 }}
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
		<Rectangle isMask x={-60} y={-110} width={layout.width * 0.2} height={layout.height * 0.27} />

		<Sprite key="Leaderboard" anchor={0.5} x={0} y={0} scale={{ x: 0.22, y: 0.21 }} zIndex={-10} />

		<Container y={stackOffsetY}>
			{#each explosionStack as item, i}
				<Container x={0} y={-20 * (explosionStack.length - 1 - i)}>
					<Sprite key="buyBoardPlaceHolder" anchor={0.5} scale={{ x: 0.22, y: 0.21 }} />
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
							fill: '#7F5112',
							fontSize: 14,
							fontWeight: 'bold',
						}}
					/>
				</Container>
			{/each}
		</Container>
	</Container>
</Container>
