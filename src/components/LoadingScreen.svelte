<script lang="ts">
	import { SpineProvider, SpineTrack, Container, Sprite } from 'pixi-svelte';
	import { FadeContainer } from 'components-pixi';
	import { MainContainer } from 'components-layout';
	import gsap from 'gsap';
	import { getContext } from '../game/context';
	import { onDestroy } from 'svelte';

	let pulseTween: gsap.core.Tween | undefined;
	let spinPulse = $state({ scale: 1, alpha: 1 });
	type Props = {
		onloaded: () => void;
	};

	const props: Props = $props();
	const context = getContext();

	let loadingType = $state<'start'>('start'); // ✅ only start
	let isHover = $state(false);
let selectedIntro = $state<'left' | 'middle' | 'right'>('left');
	
	const spinButtonLoaded = $derived.by(
		() => !!$state.snapshot(context.stateApp.loadedAssets['spinButton']),
	);

	const stopPulse = () => {
		pulseTween?.kill();
		pulseTween = undefined;
		spinPulse.scale = 1;
		spinPulse.alpha = 1;
	};

	const startPulse = () => {
		stopPulse();
		pulseTween = gsap.to(spinPulse, {
			scale: 1.08,
			alpha: 0.85,
			duration: 0.45,
			repeat: -1,
			yoyo: true,
			ease: 'sine.inOut',
		});
	};

	$effect(() => {
		const shouldPulse = loadingType === 'start' && spinButtonLoaded;
		if (!shouldPulse) return stopPulse();
		startPulse();
	});

	onDestroy(() => {
		stopPulse();
	});
</script>

<!-- logo and loading progress -->
<FadeContainer show={loadingType === 'start'}>
	<MainContainer>
		<Container
			x={context.stateLayoutDerived.mainLayout().width * 0.5}
			y={context.stateLayoutDerived.mainLayout().height * 0.5}
		>
	<SpineProvider
	key={
		selectedIntro === 'left'
			? 'introReel1'
			: selectedIntro === 'middle'
				? 'introReel2'
				: 'introReel3'
	}
	anchor={0.5}
	x={25}
	y={140}
	scale={{ x: 0.35, y: 0.35 }}
>
	<SpineTrack
		trackIndex={0}
		animationName={'animation'}
		loop
	/>
</SpineProvider>
		
			<SpineProvider
				key="logo"
				x={context.stateGameDerived.boardLayout().x / 1.52}
				y={-context.stateGameDerived.boardLayout().y / 1.8}
				scale={{ x: 0.065, y: 0.07 }}
			>
				<SpineTrack trackIndex={0} animationName={'animation'} loop timeScale={3} />
			</SpineProvider>
			<Sprite
				key="volatility"
				x={475}
				y={190}
				anchor={0.5}
				scale={0.9}
			/>
			<!-- <Sprite
				key="checkbox"
				x={475}
				y={context.stateGameDerived.boardLayout().y/1.2}
				anchor={0.5}
				scale={0.75}
			/> -->
			<Sprite
	key={
		selectedIntro === 'left'
			? 'introtext3'
			: selectedIntro === 'middle'
				? 'introtext2'
				: 'introtext'
	}
	x={-context.stateGameDerived.boardLayout().x / 3.5}
	y={context.stateGameDerived.boardLayout().y / 1.1}
	anchor={0.5}
	scale={0.3}
/>
		<!-- LEFT BUTTON -->
<!-- LEFT BUTTON -->
<Sprite
	key={selectedIntro === 'left'
		? 'introStateActive'
		: 'introStateDisabled'}
	x={-context.stateGameDerived.boardLayout().x / 3}
	y={context.stateGameDerived.boardLayout().y / 1.25}
	anchor={0.5}
	scale={0.75}
	eventMode="static"
	cursor="pointer"
	onpointertap={() => {
		selectedIntro = 'left';
	}}
/>

<!-- MIDDLE BUTTON -->
<Sprite
	key={selectedIntro === 'middle'
		? 'introStateActive'
		: 'introStateDisabled'}
	x={-context.stateGameDerived.boardLayout().x / 3.5}
	y={context.stateGameDerived.boardLayout().y / 1.25}
	anchor={0.5}
	scale={0.75}
	eventMode="static"
	cursor="pointer"
	onpointertap={() => {
		selectedIntro = 'middle';
	}}
/>

<!-- RIGHT BUTTON -->
<Sprite
	key={selectedIntro === 'right'
		? 'introStateActive'
		: 'introStateDisabled'}
	x={-context.stateGameDerived.boardLayout().x / 4.18}
	y={context.stateGameDerived.boardLayout().y / 1.25}
	anchor={0.5}
	scale={0.75}
	eventMode="static"
	cursor="pointer"
	onpointertap={() => {
		selectedIntro = 'right';
	}}
/>
		</Container>
	</MainContainer>
</FadeContainer>

<!-- press to continue -->
<!-- spin button instead of press anywhere -->
<FadeContainer show={loadingType === 'start' && spinButtonLoaded}>
	<MainContainer>
		<Container
			x={context.stateLayoutDerived.mainLayout().width / 1.2}
			y={context.stateLayoutDerived.mainLayout().height / 2}
			scale={1.5}
		>
			<Sprite
				key="spinButton"
				anchor={0.5}
				scale={{
					x: spinPulse.scale * (isHover ? 0.32 : 0.3),
					y: spinPulse.scale * (isHover ? 0.32 : 0.3),
				}}
				alpha={spinPulse.alpha * (context.stateApp.loaded ? 1 : 0.75)}
				eventMode={context.stateApp.loaded ? 'static' : 'none'}
				cursor={context.stateApp.loaded ? 'pointer' : 'default'}
				onpointerenter={() => (isHover = true)}
				onpointerleave={() => (isHover = false)}
				onpointertap={() => {
					if (!context.stateApp.loaded) return;
					props.onloaded();
				}}
			/>
		</Container>
	</MainContainer>
</FadeContainer>
