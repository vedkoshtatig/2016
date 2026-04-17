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
	let isChecked = $state(false);
	let isHover = $state(false);

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
		const shouldPulse = loadingType === 'start' && context.stateApp.loaded;
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
				key="intro"
				x={-context.stateGameDerived.boardLayout().x / 4}
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
			scale={1.5}
		>
			<Sprite
				key={isHover ? 'spinButton_hover' : 'spinButton'}
				anchor={0.5}
				scale={{
					x: spinPulse.scale,
					y: spinPulse.scale,
				}}
				alpha={spinPulse.alpha}
				eventMode="static"
				cursor="pointer"
				onpointerenter={() => (isHover = true)}
				onpointerleave={() => (isHover = false)}
				onpointertap={() => {
					props.onloaded();
				}}
			/>
		</Container>
	</MainContainer>
</FadeContainer>
