<script lang="ts">
	import { getContext } from '../game/context';
	import { Container, Graphics, Text , Sprite } from 'pixi-svelte';

	const { eventEmitter } = getContext();

	let visible = false;

	// 🎯 listen event
	eventEmitter.subscribeOnMount({
		openPopUp: () => {
			console.log('📦 openPopUp event received');
			visible = true;
		},
	});
const context = getContext();
	const close = () => {
		visible = false;
	};
</script>

{#if visible}

	<Container zIndex={9999} interactive={true} onclick={close} x={context.stateLayoutDerived.mainLayout().width * 0.358}
			y={context.stateLayoutDerived.mainLayout().height * 0.35} scale={0.8}>
		
		
		<!-- 📦 POPUP BOX -->
		<Container >
			 <Sprite
				anchor={{ x: 0.5, y: 0.5 }}
				x={context.stateLayoutDerived.mainLayout().x/3.8}
				y={context.stateLayoutDerived.mainLayout().y/4}
					scale={{ x: 0.6, y: 0.55 }}
				key="freeSpinPopup"
			/>
			 <Sprite
				anchor={{ x: 0.5, y: 0.5 }}
				x={context.stateLayoutDerived.mainLayout().x/2.35}
				y={context.stateLayoutDerived.mainLayout().y/2}
				scale={0.65}
				key="yesButton"
			/>
			 <Sprite
				anchor={{ x: 0.5, y: 0.5 }}
				x={context.stateLayoutDerived.mainLayout().x/2.35}
				y={context.stateLayoutDerived.mainLayout().y/2}
				scale={0.8}
				key="yesText"
			/>
			 <Sprite
				anchor={{ x: 0.5, y: 0.5 }}
				x={context.stateLayoutDerived.mainLayout().x/10}
				y={context.stateLayoutDerived.mainLayout().y/2}
				scale={0.65}
				key="noButton"
			/>
			 <Sprite
				anchor={{ x: 0.5, y: 0.5 }}
					x={context.stateLayoutDerived.mainLayout().x/10}
				y={context.stateLayoutDerived.mainLayout().y/2}
				scale={0.8}
				key="noText"
			/>
			 <Sprite
				anchor={{ x: 0.5, y: 0.5 }}
				x={context.stateLayoutDerived.mainLayout().x/3.85}
				y={context.stateLayoutDerived.mainLayout().y/8.5}
				scale={0.55}
				key="popupText"
			/>
			
			

			<!-- 📝 TEXT -->
			
		</Container>
	</Container>
{/if}