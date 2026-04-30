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
			eventEmitter.broadcast({ type: 'soundOnce', name: 'Pop_up_Sound' });
			visible = true;
			show = true;
		},
	});

	const close = () => {
		eventEmitter.broadcast({ type: 'soundOnce', name: 'sfx_btn_general' });
		visible = false;
		show = false;
	};

	const confirm = () => {
		eventEmitter.broadcast({ type: 'soundOnce', name: 'sfx_btn_general' });
		eventEmitter.broadcast({ type: 'bet' });
		visible = false;
	};
	const fstyle = {
		fontFamily: 'sans-serif',
		fontSize: 54,
		letterSpacing:3,
		align: 'center',
	};
	const fstyle2 = {
		fontFamily: 'sans-serif',
		fontSize: 84,
		letterSpacing:3,
	
		align: 'center',
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
				<Sprite key="bonus_popup" anchor={0.5} scale={0.65} />

				{#if stateBet.activeBetModeKey === 'BONUS'}
					<BitmapText
						anchor={{ x: 0.5, y: 0.5 }}
						y={-160}
						text="ARE YOU SURE "
						style={fstyle}
					/>
					<BitmapText anchor={{ x: 0.5, y: 0.5 }} y={-100} text="YOU WANT TO PURCHASE" style={fstyle} />
					<BitmapText
						anchor={{ x: 0.5, y: 0.5 }}
						y={-30}
						text="10 FREE SPINS "
						style={fstyle2}
					/>
					<Container x={0} y={40}>
						<BitmapText
							anchor={{ x: 1, y: 0.5 }}
							x={-10}
							text="AT COST OF"
							style={fstyle}
						/>

						<BitmapText
							anchor={{ x: 0, y: 0.5 }}
							x={10}
							text={`$${stateBet.betAmount * 100}`}
							style={fstyle2}
						/>
					</Container>
				{:else if stateBet.activeBetModeKey === 'superBonus'}
					<BitmapText
						anchor={{ x: 0.5, y: 0.5 }}
						y={-160}
						text="ARE YOU SURE "
						style={fstyle}
					/>
					<BitmapText
						anchor={{ x: 0.5, y: 0.5 }}
						y={-100}
						text="YOU WANT TO PURCHASE"
						style={fstyle}
					/>
					<BitmapText
						anchor={{ x: 0.5, y: 0.5 }}
						y={-30}
						text="10 FREE SPINS "
						style={fstyle2}
					/>
					<Container x={0} y={40}>
						<BitmapText
							anchor={{ x: 1, y: 0.5 }}
							x={-10}
							text="AT COST OF"
							style={fstyle}
						/>

						<BitmapText
							anchor={{ x: 0, y: 0.5 }}
							x={10}
							text={`$${stateBet.betAmount * 500}`}
							style={fstyle2}
						/>
					</Container>
				{:else if stateBet.activeBetModeKey === 'anteBet'}
					<BitmapText
						anchor={{ x: 0.5, y: 0.5 }}
						y={-160}
						text="ARE YOU SURE "
						style={fstyle}
					/>
					<BitmapText
						anchor={{ x: 0.5, y: 0.5 }}
						y={-100}
						text="YOU WANT TO DOUBLE BET"
						style={fstyle}
					/>
					<BitmapText
						anchor={{ x: 0.5, y: 0.5 }}
						y={-30}
						text="CHANCE TO WIN FEATURE"
						style={fstyle2}
					/>

					<Container x={0} y={40}>
						<BitmapText
							anchor={{ x: 1, y: 0.5 }}
							x={-10}
							text="AT COST OF"
							style={fstyle}
						/>

						<BitmapText
							anchor={{ x: 0, y: 0.5 }}
							x={10}
							text={`$${stateBet.betAmount * 1.25}`}
							style={fstyle2}
						/>
					</Container>
				{/if}

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
