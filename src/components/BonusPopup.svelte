<script lang="ts">
	import { getContext } from '../game/context';
	import { MainContainer } from 'components-layout';
	import { Container, Rectangle, Sprite } from 'pixi-svelte';
	const context = getContext();
	const { eventEmitter } = context;

	let visible = false;

	eventEmitter.subscribeOnMount({
		openPopUp: () => {
			visible = true;
		},
	});

	const close = () => {
		visible = false;
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

		<MainContainer>
			<Container
				x={context.stateLayoutDerived.mainLayout().width * 0.5}
				y={context.stateLayoutDerived.mainLayout().height * 0.5}
				scale={0.8}
			>
				<Sprite key="board_popup" anchor={0.5} scale={0.55} />

				<Sprite key="popupText" anchor={0.5} x={0} y={-70} scale={0.55} />

				<Container eventMode="static" cursor="pointer" onpointertap={close} x={-190} y={145}>
					<Sprite anchor={0.5} scale={0.65} key="noButton" />
					<Sprite anchor={0.5} scale={0.8} key="noText" />
				</Container>

				<Container eventMode="static" cursor="pointer" onpointertap={confirm} x={190} y={145}>
					<Sprite anchor={0.5} scale={0.65} key="yesButton" />
					<Sprite anchor={0.5} scale={0.8} key="yesText" />
				</Container>
			</Container>
		</MainContainer>
	</Container>

{/if}
