<script lang="ts">
	import { getContext } from '../game/context';
	import { Container, Sprite } from 'pixi-svelte';
	import { stateBet } from 'state-shared';
	import { stateMeta } from 'state-shared';
	const { eventEmitter } = getContext();
	const context = getContext();

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
		console.log(stateMeta.betModeMeta)
		visible = false;
	};
</script>

{#if visible}

	<!-- FULL SCREEN WRAPPER -->
	<Container
		zIndex={9999}
		interactive={true}
		onclick={close}
	>

		<!-- POPUP ROOT (keep your ratio positioning) -->
		<Container
			x={context.stateLayoutDerived.mainLayout().width * 0.358}
			y={context.stateLayoutDerived.mainLayout().height * 0.35}
			scale={0.8}
		>

			<!-- BACKGROUND / PANEL -->
			<Sprite
				key="freeSpinPopup"
				anchor={{ x: 0.5, y: 0.5 }}
				x={context.stateLayoutDerived.mainLayout().x / 3.8}
				y={context.stateLayoutDerived.mainLayout().y / 4}
				scale={{ x: 0.6, y: 0.55 }}
			/>

			<!-- YES BUTTON (interactive container fix) -->
			<Container
				interactive={true}
				onclick={confirm}
				x={context.stateLayoutDerived.mainLayout().x / 2.35}
				y={context.stateLayoutDerived.mainLayout().y / 2}
			>
				<Sprite
					anchor={{ x: 0.5, y: 0.5 }}
					scale={0.65}
					key="yesButton"
				/>

				<Sprite
					anchor={{ x: 0.5, y: 0.5 }}
					scale={0.8}
					key="yesText"
				/>
			</Container>

			<!-- NO BUTTON -->
			<Container
				interactive={true}
				onclick={close}
				x={context.stateLayoutDerived.mainLayout().x / 10}
				y={context.stateLayoutDerived.mainLayout().y / 2}
			>
				<Sprite
					anchor={{ x: 0.5, y: 0.5 }}
					scale={0.65}
					key="noButton"
				/>

				<Sprite
					anchor={{ x: 0.5, y: 0.5 }}
					scale={0.8}
					key="noText"
				/>
			</Container>

			<!-- TITLE TEXT -->
			<Sprite
				anchor={{ x: 0.5, y: 0.5 }}
				x={context.stateLayoutDerived.mainLayout().x / 3.85}
				y={context.stateLayoutDerived.mainLayout().y / 8.5}
				scale={0.55}
				key="popupText"
			/>

		</Container>
	</Container>

{/if}