<script lang="ts">
	import { Container, Sprite, Text, Rectangle, BitmapText } from 'pixi-svelte';
	import { getContext } from '../game/context';
	import ButtonBuyBonus from './ButtonBuyBonus.svelte';
	import { stateBet } from 'state-shared';
	import { eventEmitter } from '../game/eventEmitter';
	import { doubleBetState } from '../doubleBetState.svelte';
	import { Tween } from 'svelte/motion';
	import { backOut, cubicOut } from 'svelte/easing';
	import  {bookEventAmountToCurrencyString}  from 'utils-shared/amount';

	

	const context = getContext();
	const layout = context.stateGameDerived.boardLayout();
	const scaleFactor = 1.2;


	// ✅ STACK STATE
	type ExplosionStackItem = {
		id: number;
		symbol: string;
		value: number;
		y: Tween<number>;
		scale: Tween<number>;
		alpha: Tween<number>;
	};

	let nextExplosionStackId = 1;
	let explosionStack: ExplosionStackItem[] = [];

	const ITEM_SPACING = 22;
	const STACK_BASE_Y = 60;
	
	const getTargetY = (index: number, length: number) => {
		const effectiveLength = Math.min(length, 6);
		return STACK_BASE_Y - (effectiveLength - 1) * ITEM_SPACING + index * ITEM_SPACING;
	};

	const fstyle = {
		fontFamily: 'sans-serif',
		fontSize: 14,

		align: 'center',
	};

	let animateStackTick = 0;
	let clearStackTimer: ReturnType<typeof setTimeout> | undefined;
	let isClearingStack = false;
	let pendingExplodes: { symbol: string; value: number }[] = [];

	let toggleAnimTick = 0;
	const toggleX = new Tween(0);
	const togglePulse = new Tween(1);
	const toggleAlpha = new Tween(1);
	let toggleInitialized = false;

	$: {
		const targetX = doubleBetState.isDouble ? 15 : -15;
		if (!toggleInitialized) {
			void toggleX.set(targetX, { duration: 0 });
			toggleInitialized = true;
		} else {
			void toggleX.set(targetX, { duration: 220, easing: backOut });
		}
	}
	

	const pulseToggle = () => {
		const tick = ++toggleAnimTick;
		void togglePulse.set(0.94, { duration: 60, easing: cubicOut });
		void toggleAlpha.set(0.86, { duration: 60, easing: cubicOut });
		setTimeout(() => {
			if (tick !== toggleAnimTick) return;
			void togglePulse.set(1.18, { duration: 180, easing: backOut });
			void toggleAlpha.set(1, { duration: 180, easing: cubicOut });
		}, 60);
		setTimeout(() => {
			if (tick !== toggleAnimTick) return;
			void togglePulse.set(1, { duration: 120, easing: cubicOut });
		}, 240);
	};

	const onToggleDoubleBet = () => {
		eventEmitter.broadcast({ type: 'setDoubleBet' });
		doubleBetState.isDouble = !doubleBetState.isDouble;
		pulseToggle();
	};
	const animateStack = (newItemId?: number) => {
		const tick = ++animateStackTick;
		const shiftDuration = 160;
		const dropDuration = 300;
		const dropDelayMs = 0;

		explosionStack.forEach((item, index) => {
			if (tick !== animateStackTick) return;
			const targetY = getTargetY(index, explosionStack.length);
			if (newItemId !== undefined && item.id === newItemId) {
				setTimeout(() => {
					if (tick !== animateStackTick) return;
					void item.y.set(targetY, { duration: dropDuration, easing: cubicOut });
					void item.scale.set(1, { duration: dropDuration, easing: cubicOut });
					void item.alpha.set(1, { duration: 180, easing: cubicOut });
				}, dropDelayMs);
				return;
			}

			void item.y.set(targetY, { duration: shiftDuration, easing: cubicOut });
			void item.scale.set(1, { duration: shiftDuration, easing: cubicOut });
			void item.alpha.set(1, { duration: 120, easing: cubicOut });
		});
	};
const doubleHoverScale = new Tween(1.1);
const doubleHoverAlpha = new Tween(1);

const onDoubleHoverEnter = () => {
	void doubleHoverScale.set(1.2, {
		duration: 180,
		easing: cubicOut
	});

	void doubleHoverAlpha.set(0.92, {
		duration: 180,
		easing: cubicOut
	});
};

const onDoubleHoverLeave = () => {
	void doubleHoverScale.set(1.1, {
		duration: 180,
		easing: cubicOut
	});

	void doubleHoverAlpha.set(1, {
		duration: 180,
		easing: cubicOut
	});
};
	const flushPendingExplodes = () => {
		if (isClearingStack) return;
		if (!pendingExplodes.length) return;

		const next = pendingExplodes.shift();
		if (!next) return;

		const nextStackLength = explosionStack.length + 1;
		const newItemTargetY = getTargetY(0, nextStackLength);
		const newItem: ExplosionStackItem = {
			id: nextExplosionStackId++,
			symbol: next.symbol,
			value: next.value,
			y: new Tween(newItemTargetY - ITEM_SPACING * 8),
			scale: new Tween(0.9),
			alpha: new Tween(0),
		};

		explosionStack = [newItem, ...explosionStack];
		requestAnimationFrame(() => animateStack(newItem.id));

		if (pendingExplodes.length) {
			setTimeout(flushPendingExplodes, 60);
		}
	};

	const clearStackAnimated = () => {
		if (clearStackTimer) {
			clearTimeout(clearStackTimer);
			clearStackTimer = undefined;
		}
		if (!explosionStack.length) return;

		const tick = ++animateStackTick;
		const duration = 420;
		const fallDistance = ITEM_SPACING * 4;
		isClearingStack = true;

		requestAnimationFrame(() => {
			if (tick !== animateStackTick) return;
			explosionStack.forEach((item) => {
				void item.y.set(item.y.current + fallDistance, { duration, easing: cubicOut });
				void item.alpha.set(0, { duration: duration - 120, easing: cubicOut });
				void item.scale.set(0.96, { duration, easing: cubicOut });
			});
		});

		clearStackTimer = setTimeout(() => {
			if (tick !== animateStackTick) return;
			explosionStack = [];
			isClearingStack = false;
			clearStackTimer = undefined;
			flushPendingExplodes();
		}, duration + 10);
	};

	context.eventEmitter.subscribeOnMount({
		symbolExplode: ({ data }) => {
			if (isClearingStack) {
				pendingExplodes = [{ symbol: data.symbol, value: data.value }, ...pendingExplodes];
				return;
			}
			const nextStackLength = explosionStack.length + 1;
			const newItemTargetY = getTargetY(0, nextStackLength);
			const newItem: ExplosionStackItem = {
				id: nextExplosionStackId++,
				symbol: data.symbol,
				value: data.value,
				y: new Tween(newItemTargetY - ITEM_SPACING * 8),
				scale: new Tween(0.9),
				alpha: new Tween(0),
			};

			explosionStack = [
				newItem,
				...explosionStack,
			];
			requestAnimationFrame(() => animateStack(newItem.id));
		},
		bet: () => {
			clearStackAnimated();
		},
		clearLeaderboard: () => {
			clearStackAnimated();
		},
	});
</script>

<!-- ================= MAIN CONTAINER ================= -->
<Container
	x={layout.x-5}
	y={layout.y * 0.3}
	height={layout.height}
	scale={{ x: scaleFactor * 1.4, y: scaleFactor * 1.4 }}
	pivot={layout.pivot}
>
	<!-- ===== BUY BUTTONS ===== -->
	<Container x={20} scale={{ x: 1, y: 1.4 }}>
		<Sprite
			key="buyFreeSpinBg"
			anchor={0.5}
			x={90}
			y={5}
			width={layout.width * 1.1}
			height={layout.height * 1.1}
			scale={{ x: 0.92, y: 0.25 }}
			zIndex={-10}
		/>

		<Container
			x={0}
			y={5}
			interactive={true}
			onclick={() => (stateBet.activeBetModeKey = 'BONUS')}
			scale={1.5}
		>
			<ButtonBuyBonus x={0} y={0} scale={{ x: 0.83, y: 0.52 }} anchor={0.5} />
			<BitmapText
				text={'BUY'}
				anchor={0.5}
				x={0}
				y={-16}
				style={{
					fontFamily: 'sans-serif',
					fontSize: 20,
					letterSpacing:1.2
				}}
				interactive={false}
				eventMode="none"
			/>
			<BitmapText
				text={'FREE SPINS'}
				anchor={0.5}
				x={0}
				y={0}
				style={{
					fontFamily: 'sans-serif',
					letterSpacing:1.2,
					fontSize: 20,
					
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
					fontFamily: 'sans-serif',
					fontSize: 20,
					letterSpacing:1.2,
					
				}}
				interactive={false}
				eventMode="none"
			/>
		</Container>

		<Container
			x={180}
			y={5}
			interactive={true}
			onclick={() => (stateBet.activeBetModeKey = 'superBonus')}
			scale={1.5}
			
		>
			<ButtonBuyBonus x={0} y={0} scale={{ x: 0.83, y: 0.52 }} anchor={0.5} />
			<BitmapText
				text={'	BUY'}
				anchor={0.5}
				x={0}
				y={-20}
				style={{ fontFamily: 'sans-serif', fontSize: 20, letterSpacing: 1.2 }}
			/>
			<BitmapText
				text={'SUPER'}
				anchor={0.5}
				x={0}
				y={-6}
				style={{
					fontFamily: 'sans-serif',
					letterSpacing:1.2,
					fontSize: 20,
				
				}}
				interactive={false}
				eventMode="none"
			/>
			<BitmapText
				text={'FREE SPINS'}
				anchor={0.5}
				x={0}
				y={8}
				style={{ fontFamily: 'sans-serif',fontSize: 20, letterSpacing: 1.2 }}
				interactive={false}
				eventMode="none"
			/>
			<BitmapText
				text={`$${stateBet.betAmount * 500}`}
				anchor={0.5}
				x={0}
				y={22}
				style={{ fontFamily: 'sans-serif',  fontSize: 20, letterSpacing: 1.2 }}
				interactive={false}
				eventMode="none"
			/>
		</Container>
	</Container>

	<!-- ===== DOUBLE ===== -->
	<Container
	x={layout.x / 1.64}
	y={-220}
	scale={doubleHoverScale.current}
	alpha={doubleHoverAlpha.current}
	interactive={true}
	onpointerenter={onDoubleHoverEnter}
	onpointerleave={onDoubleHoverLeave}
>
		<Container scale={{ x: 1, y: 1.4 }} >
			<Sprite
			key="doubleBetbg"
			anchor={0.5}
			x={0}
			y={layout.y / 2.7}
			width={layout.width * 1.1}
			height={layout.height * 1.1}
			scale={{ x: 0.33, y: 0.3 }}
			zIndex={-10}
			interactive={true}
			cursor=pointer
			onclick={onToggleDoubleBet}
		/>
		<Container
			x={0}
			y={148}
			eventMode="none"
			
		>
			<!-- <ButtonBuyBonus x={0} y={0} scale={{ x: 0.83, y: 0.73 }} anchor={0.5} /> -->
			<Container y={-10}>
				<BitmapText
					text={'BET'}
					anchor={0.5}
					x={0}
					y={-22}
					style={{ fontFamily: 'sans-serif', fill: '#8d3b15', fontSize: 18, fontWeight: 'bolder' }}
				/>
				<BitmapText
					text={`$${stateBet.betAmount * 1.25}`}
					anchor={0.5}
					x={0}
					y={-11}
					style={{ fontFamily: 'sans', fontSize: 14, fontWeight: 'bolder' }}
					interactive={false}
					eventMode="none"
				/>
				<BitmapText
					text={'DOUBLE'}
					anchor={0.5}
					x={0}
					y={9}
					style={{
						fontFamily: 'sans-serif',
						fill: '#8d3b15',
						fontSize: 18,
						fontWeight: 'bolder',
						
					}}
					interactive={false}
					eventMode="none"
				/>
				<BitmapText
					text={`CHANCE TO`}
					anchor={0.5}
					x={0}
					y={20}
					style={{ fontFamily: 'sans-serif', fill: '#8d3b15', fontSize: 16, fontWeight: 'bolder' }}
					interactive={false}
					eventMode="none"
				/>
				<BitmapText
					text={`WIN FEATURE`}
					anchor={0.5}
					x={0}
					y={30}
					style={{ fontFamily: 'sans-serif', fill: '#8d3b15', fontSize: 16, fontWeight: 'bolder' }}
					interactive={false}
					eventMode="none"
				/>
			</Container>

			<Container y={32}>
				<Sprite
					key="onBar"
					anchor={0.5}
					width={layout.width * 1.1}
					height={layout.height * 1.1}
					scale={{ x: 0.33, y: 0.3 }}
					interactive={true}
					onclick={onToggleDoubleBet}
				/>
				<Container
					x={toggleX.current}
					scale={togglePulse.current}
					alpha={toggleAlpha.current}
					interactive={true}
					onclick={onToggleDoubleBet}
				>
					{#if doubleBetState.isDouble}
						<Sprite
							key="onBarYes"
							anchor={0.5}
							width={layout.width * 1.1}
							height={layout.height * 1.1}
							scale={{ x: 0.33, y: 0.3 }}
							eventMode="none"
						/>
					{:else}
						<Sprite
							key="onBarNo"
							anchor={0.5}
							width={layout.width * 1.1}
							height={layout.height * 1.1}
							scale={{ x: 0.33, y: 0.3 }}
							eventMode="none"
						/>
					{/if}
				</Container>
			</Container>
		</Container> 
		</Container>
	</Container>

	<!-- ===== STATIC BG ===== -->
	<Container
		x={layout.x * 1.45 }
		y={layout.y * 0.85}
		height={layout.height}
		scale={scaleFactor * 1.15}
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
		x={layout.x * 1.5 }
		y={layout.y * 0.85}
		height={layout.height}
		scale={scaleFactor * 1.15}
		pivot={layout.pivot}
		sortableChildren={true}
	>
		<!-- MASK -->
		<Rectangle isMask x={-48} y={-58} width={layout.width * 0.16} height={layout.height * 0.26} />

		<!-- <Sprite key="Leaderboard" anchor={0.5} x={0} y={0} scale={{ x: 0.3, y: 0.33 }} zIndex={-10} /> -->

		<Container y={0}>
			{#each explosionStack as item (item.id)}
				<Container x={0} y={item.y.current} scale={item.scale.current} alpha={item.alpha.current}>
					<Sprite key="buyBoardPlaceHolder" anchor={0.5} scale={{ x: 0.27, y: 0.3 }} />
					<Sprite
						key={`${item.symbol.toLowerCase()}`}
						anchor={0.5}
						x={-30}
						y={0}
						scale={{ x: 0.16, y: 0.15 }}
					/>

					<BitmapText
						text={`+${bookEventAmountToCurrencyString(item.value)}`}
						anchor={0.5}
						x={20}
						style={fstyle}
					/>
				</Container>
			{/each}
		</Container>
	</Container>
</Container>
