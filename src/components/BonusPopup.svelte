<script lang="ts">
	import { getContext } from '../game/context';
	import { MainContainer } from 'components-layout';
	import { FadeContainer } from 'components-pixi';
	import { Container, Rectangle, Sprite, BitmapText } from 'pixi-svelte';
	import { stateBet } from 'state-shared';
	const context = getContext();
	const { eventEmitter } = context;

	let visible = false;
	let show = false;

	eventEmitter.subscribeOnMount({
		openPopUp: () => {
			visible = true;
			show = true;
		},
	});

	const close = () => {
		visible = false;
		show = false;
	};
	
	const confirm = () => {
		eventEmitter.broadcast({ type: 'bet' });
		visible = false;
	};
</script>

{#if visible}
	<Container zIndex={9999}>
		<Rectangle
			eventMode="static"
			cursor="pointer"
			alpha={0.001}
			backgroundColor={0x000000}
			width={context.stateLayoutDerived.canvasSizes().width}
			height={context.stateLayoutDerived.canvasSizes().height}
			x={context.stateLayoutDerived.canvasSizes().width * 0.5}
			y={context.stateLayoutDerived.canvasSizes().height * 0.5}
			anchor={0.5}
			onpointertap={close}
		/>

		<FadeContainer {show}>
			<Container
				x={context.stateLayoutDerived.mainLayout().width * 0.5}
				y={context.stateLayoutDerived.mainLayout().height * 0.48}
				scale={0.8}
			>
				<Sprite key="board_popup" anchor={0.5} scale={0.55} />

				{#if stateBet.activeBetModeKey === 'BONUS'}
					<BitmapText
						anchor={{ x: 0.5, y: 0.5 }}
						y={-160}
						text="ARE YOU SURE "
						style={{ fontFamily: 'gold', fontSize: 44, align: 'center' }}
					/>
					<BitmapText
						anchor={{ x: 0.5, y: 0.5 }}
						y={-100}
						text="YOU WANT TO PURCHASE"
						style={{ fontFamily: 'gold', fontSize: 44, align: 'center' }}
					/>
					<BitmapText
						anchor={{ x: 0.5, y: 0.5 }}
						y={-30}
						text="10 FREE SPINS "
						style={{ fontFamily: 'gold', fontSize: 64, align: 'center' }}
					/>
					<Container x={0} y={40}>
						<BitmapText
							anchor={{ x: 1, y: 0.5 }}
							x={-10}
							text="AT COST OF"
							style={{ fontFamily: 'gold', fontSize: 44, align: 'center' }}
						/>

						<BitmapText
							anchor={{ x: 0, y: 0.5 }}
							x={10}
							text={`$${stateBet.betAmount * 100}`}
							style={{ fontFamily: 'gold', fontSize: 64, align: 'center' }}
						/>
					</Container>
				{:else if stateBet.activeBetModeKey === 'superBonus'}
					<BitmapText
						anchor={{ x: 0.5, y: 0.5 }}
						y={-160}
						text="ARE YOU SURE "
						style={{ fontFamily: 'gold', fontSize: 44, align: 'center' }}
					/>
					<BitmapText
						anchor={{ x: 0.5, y: 0.5 }}
						y={-100}
						text="YOU WANT TO PURCHASE"
						style={{ fontFamily: 'gold', fontSize: 44, align: 'center' }}
					/>
					<BitmapText
						anchor={{ x: 0.5, y: 0.5 }}
						y={-30}
						text="10 FREE SPINS "
						style={{ fontFamily: 'gold', fontSize: 64, align: 'center' }}
					/>
					<Container x={0} y={40}>
						<BitmapText
							anchor={{ x: 1, y: 0.5 }}
							x={-10}
							text="AT COST OF"
							style={{ fontFamily: 'gold', fontSize: 44, align: 'center' }}
						/>

						<BitmapText
							anchor={{ x: 0, y: 0.5 }}
							x={10}
							text={`$${stateBet.betAmount * 1000}`}
							style={{ fontFamily: 'gold', fontSize: 64, align: 'center' }}
						/>
					</Container>
				{:else if stateBet.activeBetModeKey === 'double'}
					<BitmapText
						anchor={{ x: 0.5, y: 0.5 }}
						text=" HAVE "
						style={{ fontFamily: 'gold', fontSize: 44, align: 'center' }}
					/>{/if}

				<Container eventMode="static" cursor="pointer" onpointertap={close} x={-190} y={145}>
					<Sprite anchor={0.5} scale={0.65} key="noButton" />
					<Sprite anchor={0.5} scale={0.8} key="noText" />
				</Container>

				<Container eventMode="static" cursor="pointer" onpointertap={confirm} x={190} y={145}>
					<Sprite anchor={0.5} scale={0.65} key="yesButton" />
					<Sprite anchor={0.5} scale={0.8} key="yesText" />
				</Container>
			</Container>
		</FadeContainer>
	</Container>
{/if}
