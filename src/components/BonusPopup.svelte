<script lang="ts">
	import { getContext } from '../game/context';
	import { Container, Graphics, Text } from 'pixi-svelte';

	const { eventEmitter } = getContext();

	let visible = false;

	// 🎯 listen event
	eventEmitter.subscribeOnMount({
		openPopUp: () => {
			console.log('📦 openPopUp event received');
			visible = true;
		},
	});

	const close = () => {
		visible = false;
	};
</script>

{#if visible}
	<Container zIndex={9999} interactive={true} onclick={close}>
		
		<!-- 🔲 DARK BACKGROUND -->
		<Graphics
			draw={(g) => {
				g.clear();
				g.beginFill(0x000000, 0.7);
				g.drawRect(0, 0, window.innerWidth, window.innerHeight);
				g.endFill();
			}}
		/>

		<!-- 📦 POPUP BOX -->
		<Container x={window.innerWidth / 2} y={window.innerHeight / 2}>
			
			<Graphics
				draw={(g) => {
					g.clear();
					g.beginFill(0x1e1e1e);
					g.drawRoundedRect(-200, -120, 400, 240, 20);
					g.endFill();

					g.lineStyle(4, 0xffffff);
					g.drawRoundedRect(-200, -120, 400, 240, 20);
				}}
			/>

			<!-- 📝 TEXT -->
			<Text
				text="FREE SPIN ACTIVATED 🎉"
				anchor={0.5}
				x={0}
				y={-20}
				style={{
					fill: '#ffffff',
					fontSize: 24,
					fontWeight: 'bold',
					align: 'center',
				}}
			/>

			<Text
				text="Click anywhere to close"
				anchor={0.5}
				x={0}
				y={40}
				style={{
					fill: '#cccccc',
					fontSize: 16,
					align: 'center',
				}}
			/>
		</Container>
	</Container>
{/if}