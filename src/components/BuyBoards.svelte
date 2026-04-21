<script lang="ts">
	import { Container, Sprite, Text, Rectangle } from 'pixi-svelte';
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

			// total stack height
			const totalHeight = explosionStack.length * ITEM_HEIGHT;

			// ✅ only move when overflowing
			if (totalHeight > MASK_HEIGHT) {
				stackOffsetY += 20 // ✅ move only one step
			} else {
				stackOffsetY = 0;
			}
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
			<Text
				text={'BUY'}
				anchor={0.5}
				x={0}
				y={-15}
				style={{ fill: '#7F5112', fontSize: 10, fontWeight: 'bold' }}
			/>
			<Text
				text={'FREE SPIN'}
				anchor={0.5}
				x={0}
				y={-2}
				style={{ fill: '#7F5112', fontSize: 10, fontWeight: 'bold' }}
			/>
			<Text
				text={'$200.00'}
				anchor={0.5}
				x={0}
				y={15}
				style={{ fill: '#7F5112', fontSize: 18, fontWeight: 'bolder' }}
			/>
		</Container>

		<Container
			x={0}
			y={40}
			interactive={true}
			onclick={() => (stateBet.activeBetModeKey = 'superBonus')}
		>
			<ButtonBuyBonus x={0} y={0} scale={{ x: 0.83, y: 0.52 }} anchor={0.5} />
			<Text text={'BUY'} anchor={0.5} x={0} y={-17} style={{ fill: '#7F5112', fontSize: 10 }} />
			<Text
				text={'SUPER'}
				anchor={0.5}
				x={0}
				y={-6}
				style={{ fill: '#7F5112', fontSize: 15, fontWeight: 'bolder' }}
			/>
			<Text text={'FREE SPIN'} anchor={0.5} x={0} y={6} style={{ fill: '#7F5112', fontSize: 11 }} />
			<Text
				text={'$1,000.00'}
				anchor={0.5}
				x={0}
				y={18}
				style={{ fill: '#7F5112', fontSize: 15, fontWeight: '900' }}
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
		<Container x={0} y={148}>
			<ButtonBuyBonus x={0} y={0} scale={{ x: 0.83, y: 0.73 }} anchor={0.5} />
			<Text
				text="Double"
				anchor={0.5}
				x={0}
				y={0}
				style={{ fill: '#7F5112', fontSize: 25, fontWeight: 'bold' }}
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

		<!-- BG -->
		<Sprite key="Leaderboard" anchor={0.5} x={0} y={0} scale={{ x: 0.22, y: 0.21 }} zIndex={-10} />

		<!-- 🔥 STACK WRAPPER (THIS IS THE CORE FIX) -->
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
