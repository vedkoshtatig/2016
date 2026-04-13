<script lang="ts">
	import { SpineProvider, SpineTrack, Container, Sprite } from 'pixi-svelte';
	import { FadeContainer, LoadingProgress } from 'components-pixi';
	import { MainContainer } from 'components-layout';

	import { getContext } from '../game/context';
	import PressToContinue from './PressToContinue.svelte';

	type Props = {
		onloaded: () => void;
	};

	const props: Props = $props();
	const context = getContext();

	let loadingType = $state<'start'>('start'); // ✅ only start
	let isChecked = $state(false);
	let isHover = $state(false);
</script>

<!-- logo and loading progress -->
<FadeContainer show={loadingType === 'start'}>
	<MainContainer>
		<Container
			x={context.stateLayoutDerived.mainLayout().width * 0.5}
			y={context.stateLayoutDerived.mainLayout().height * 0.5}
		>
			<SpineProvider
				key="intro"
				x={-context.stateGameDerived.boardLayout().x /4}
				y={-context.stateGameDerived.boardLayout().y / 10}
				scale={{ x: 0.37, y: 0.37 }}
			>
				<SpineTrack trackIndex={0} animationName={'reel'} loop timeScale={3} />
			</SpineProvider>
			<SpineProvider
				key="intro"
				x={context.stateGameDerived.boardLayout().x / 1.48}
				y={-context.stateGameDerived.boardLayout().y / 2}
				scale={{ x: 0.34, y: 0.34 }}
			>
				<SpineTrack trackIndex={0} animationName={'pay_anywhere'} loop timeScale={3} />
			</SpineProvider>
			<SpineProvider
				key="intro"
				x={context.stateGameDerived.boardLayout().x / 1.4}
				y={context.stateGameDerived.boardLayout().y / 1.3}
				scale={{ x: 0.45, y: 0.45 }}
			>
				<SpineTrack trackIndex={0} animationName={'check_box_text'} loop timeScale={3} />
			</SpineProvider>
			<SpineProvider
				key="intro"
				x={context.stateGameDerived.boardLayout().x / 2.13}
				y={context.stateGameDerived.boardLayout().y / 1.3}
				scale={{ x: 0.35, y: 0.35 }}
				eventMode="static"
				cursor="pointer"
				onpointertap={() => {
					isChecked = !isChecked;
				}}
			>
				<SpineTrack
					trackIndex={0}
					animationName={isChecked
						? 'dont_dhow_next_time_checked'
						: 'dont_dhow_next_time_unchecked'}
					loop
					timeScale={3}
				/>
			</SpineProvider>
		</Container>
	</MainContainer>
</FadeContainer>

<!-- press to continue -->
<!-- spin button instead of press anywhere -->
<FadeContainer show={loadingType === 'start' && context.stateApp.loaded}>
	<MainContainer>
		<Container
			x={context.stateLayoutDerived.mainLayout().width / 1.2}
			y={context.stateLayoutDerived.mainLayout().height / 2}
			scale={0.7}
		>
			<Sprite
	key={isHover ? "spinButton_hover" : "spinButton"}
	anchor={0.5}
	eventMode="static"
	cursor="pointer"
	onpointerenter={() => (isHover = true)}
	onpointerleave={() => (isHover = false)}
	onpointerdown={(e) => e.currentTarget.scale.set(0.9)}
	onpointerup={(e) => e.currentTarget.scale.set(1)}
	onpointertap={() => {
		props.onloaded();
	}}
/>
		</Container>
	</MainContainer>
</FadeContainer>
