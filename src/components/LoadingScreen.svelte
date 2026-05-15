<script lang="ts">
	import { SpineProvider, SpineTrack, Container, Sprite, Rectangle, Text } from 'pixi-svelte';
	import { FadeContainer } from 'components-pixi';
	import { MainContainer } from 'components-layout';
	import gsap from 'gsap';
	import { getContext } from '../game/context';
	import { onDestroy, onMount } from 'svelte';
	import { waitForResolve } from 'utils-shared/wait';

	let pulseTween: gsap.core.Tween | undefined;
	let spinPulse = $state({ scale: 1, alpha: 1 });
	type Props = {
		onloaded: () => void;
	};

	const props: Props = $props();
	const context = getContext();

	let loadingType = $state<'start'>('start'); // ✅ only start
	let isHover = $state(false);
	type IntroSelection = 'left' | 'middle' | 'right';

	let selectedIntro = $state<IntroSelection>('left');
	let visibleIntro = $state<IntroSelection>('left');
	let introShow = $state(true);
	let introSwitching = $state(false);
	let pendingIntro = $state<IntroSelection | null>(null);
	let resolveIntroFade: (() => void) | null = null;
	let autoIntroTimer: ReturnType<typeof setInterval> | null = null;
	const INTRO_AUTO_MS = 3000;
	const INTRO_CONTENT_Y_OFFSET = -35;
	const INTRO_SELECTION_Y_OFFSET = -35;
	const isPortraitLike = $derived.by(() =>
		['portrait', 'tablet'].includes(context.stateLayoutDerived.layoutType()),
	);
	const mainLayout = $derived.by(() => context.stateLayoutDerived.mainLayout());
	const canvasSizes = $derived.by(() => context.stateLayoutDerived.canvasSizes());

	type Phase = 'preload' | 'intro';
	let phase = $state<Phase>('preload');
	const allAssetsLoaded = $derived.by(() => context.stateApp.loaded);
	const gameloaderBgLoaded = $derived.by(() => !!$state.snapshot(context.stateApp.loadedAssets['gameloaderBg']));
	const bgLoadingMobileLoaded = $derived.by(() => !!$state.snapshot(context.stateApp.loadedAssets['bgLoadingMobile']));
	const loadingBarPosition = $derived.by(() => ({
		x: Math.round(mainLayout.width * 0.5),
		y: Math.round(mainLayout.height * 0.5) + 170,
		scale: 0.51875,
	}));
	const loadingPercent = $derived.by(() => {
		const raw = context.stateApp.loaded ? 100 : context.stateApp.loadingProgress;
		const numeric = Number(raw);
		if (!Number.isFinite(numeric)) return 0;
		return Math.max(0, Math.min(100, Math.round(numeric)));
	});
	const progressBar = $derived.by(() => {
		const width = Math.min(640, Math.max(260, canvasSizes.width * 0.58));
		const height = 16;
		return {
			x: Math.round(canvasSizes.width * 0.5),
			y: Math.round(loadingBarPosition.y + (isPortraitLike ? 145 : 125)),
			width: Math.round(width),
			height,
		};
	});
	const progressFillWidth = $derived.by(() =>
		Math.max(0, Math.round((progressBar.width * loadingPercent) / 100)),
	);
	const progressFillX = $derived.by(() =>
		Math.round(progressBar.x - progressBar.width / 2 + progressFillWidth / 2),
	);
	const progressTextY = $derived.by(() => Math.round(progressBar.y - 34));

	const MOBILE_ROOT = { x: 500, y: 400, scale: 2 };
	const MOBILE_SPIN_ROOT = { x: 735, y: 634, scale: 2.4 };
	const MOBILE_LOGO = { x: 116, y: -460, scale: { x: 0.08, y: 0.085 } };
	const MOBILE_INTRO_REEL = {
		x: 295,
		y: 50 + INTRO_CONTENT_Y_OFFSET,
		scale: { x: 0.28, y: 0.28 },
	};
	const MOBILE_INTRO_TEXT = { x: 113, y: 300 + INTRO_CONTENT_Y_OFFSET, scale: 0.35 };
	const MOBILE_DOTS = {
		y: 200 + INTRO_SELECTION_Y_OFFSET,
		x: { left: 30, middle: 100, right: 170 },
		scale: 0.75,
	};
	const MOBILE_VOLATILITY = { x: 112, y: 540, scale: 0.3 };
	const MOBILE_SPIN_BUTTON = { x: 0, y: 250 };

	const introReelKey = $derived.by(() =>
		visibleIntro === 'left' ? 'introReel1' : visibleIntro === 'middle' ? 'introReel2' : 'introReel3',
	);
	const introTextKey = $derived.by(() =>
		visibleIntro === 'left' ? 'introtext3' : visibleIntro === 'middle' ? 'introtext2' : 'introtext',
	);
	const introReelLoaded = $derived.by(() => !!$state.snapshot(context.stateApp.loadedAssets[introReelKey]));
	const introTextLoaded = $derived.by(() => !!$state.snapshot(context.stateApp.loadedAssets[introTextKey]));
	const logoLoaded = $derived.by(() => !!$state.snapshot(context.stateApp.loadedAssets['logo']));
	const volatilityLoaded = $derived.by(() => !!$state.snapshot(context.stateApp.loadedAssets['volatility']));
	const introStateActiveLoaded = $derived.by(
		() => !!$state.snapshot(context.stateApp.loadedAssets['introStateActive']),
	);
	const introStateDisabledLoaded = $derived.by(
		() => !!$state.snapshot(context.stateApp.loadedAssets['introStateDisabled']),
	);

	const introRootPosition = $derived.by(() =>
		isPortraitLike
			? { x: MOBILE_ROOT.x, y: MOBILE_ROOT.y }
			: { x: mainLayout.width * 0.5, y: mainLayout.height * 0.5 },
	);
	const introRootScale = $derived.by(() =>
		isPortraitLike ? { x: MOBILE_ROOT.scale, y: MOBILE_ROOT.scale } : { x: 1, y: 1 },
	);

	const introReelPosition = $derived.by(() =>
		isPortraitLike
			? { x: MOBILE_INTRO_REEL.x, y: MOBILE_INTRO_REEL.y }
			: { x: 25, y: 140 + INTRO_CONTENT_Y_OFFSET },
	);
	const introReelScale = $derived.by(() => (isPortraitLike ? MOBILE_INTRO_REEL.scale : { x: 0.35, y: 0.35 }));

	const introTextPosition = $derived.by(() =>
		isPortraitLike
			? { x: MOBILE_INTRO_TEXT.x, y: MOBILE_INTRO_TEXT.y }
			: {
					x: -context.stateGameDerived.boardLayout().x / 3.5,
					y: context.stateGameDerived.boardLayout().y / 1.1 + INTRO_CONTENT_Y_OFFSET,
				},
	);
	const introTextScale = $derived.by(() => (isPortraitLike ? MOBILE_INTRO_TEXT.scale : 0.3));

	const logoPosition = $derived.by(() =>
		isPortraitLike
			? { x: MOBILE_LOGO.x, y: MOBILE_LOGO.y }
			: {
					x: context.stateGameDerived.boardLayout().x / 1.52,
					y: -context.stateGameDerived.boardLayout().y / 1.8,
				},
	);
	const logoScale = $derived.by(() => (isPortraitLike ? MOBILE_LOGO.scale : { x: 0.065, y: 0.07 }));

	const volatilityPosition = $derived.by(() =>
		isPortraitLike ? { x: MOBILE_VOLATILITY.x, y: MOBILE_VOLATILITY.y } : { x: 475, y: 190 },
	);

	const introSelectionY = $derived.by(() =>
		isPortraitLike
			? MOBILE_DOTS.y
			: context.stateGameDerived.boardLayout().y / 1.25 + INTRO_SELECTION_Y_OFFSET,
	);
	const introSelectionX = $derived.by(() =>
		isPortraitLike
			? MOBILE_DOTS.x
			: {
					left: -context.stateGameDerived.boardLayout().x / 3,
					middle: -context.stateGameDerived.boardLayout().x / 3.5,
					right: -context.stateGameDerived.boardLayout().x / 4.18,
				},
	);

	const spinRootPosition = $derived.by(() =>
		isPortraitLike
			? { x: MOBILE_SPIN_ROOT.x, y: MOBILE_SPIN_ROOT.y }
			: { x: mainLayout.width / 1.2, y: mainLayout.height / 2 },
	);
	const spinRootScale = $derived.by(() =>
		isPortraitLike
			? { x: MOBILE_SPIN_ROOT.scale, y: MOBILE_SPIN_ROOT.scale }
			: { x: 1.5, y: 1.5 },
	);
	const spinSpritePosition = $derived.by(() =>
		isPortraitLike ? { x: MOBILE_SPIN_BUTTON.x, y: MOBILE_SPIN_BUTTON.y } : { x: 0, y: 0 },
	);

	const getNextIntro = (current: IntroSelection): IntroSelection =>
		current === 'left' ? 'middle' : current === 'middle' ? 'right' : 'left';

	const waitForIntroFade = () =>
		waitForResolve((resolve) => {
			resolveIntroFade = () => resolve();
		});

	const setIntroShow = async (nextShow: boolean) => {
		if (introShow === nextShow) return;
		const promise = waitForIntroFade();
		introShow = nextShow;
		await promise;
	};

	const switchIntro = async (next: IntroSelection) => {
		if (next === selectedIntro) return;

		selectedIntro = next;
		if (introSwitching) {
			pendingIntro = next;
			return;
		}

		introSwitching = true;
		await setIntroShow(false);
		visibleIntro = next;
		await setIntroShow(true);
		introSwitching = false;

		if (pendingIntro && pendingIntro !== visibleIntro) {
			const queued = pendingIntro;
			pendingIntro = null;
			await switchIntro(queued);
		} else {
			pendingIntro = null;
		}
	};

	const restartAutoIntro = () => {
		if (autoIntroTimer) clearInterval(autoIntroTimer);
		autoIntroTimer = setInterval(() => {
			void switchIntro(getNextIntro(selectedIntro));
		}, INTRO_AUTO_MS);
	};
	const fstyle2 = {
		fontFamily: 'sans-serif',
		fontSize: 84,
		letterSpacing:3,
	
		align: 'center',
	};
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
		const shouldPulse = loadingType === 'start' && phase === 'intro' && spinButtonLoaded;
		if (!shouldPulse) return stopPulse();
		startPulse();
	});

	$effect(() => {
		if (phase !== 'preload') return;
		if (!allAssetsLoaded) return;
		context.stateLayout.showGameLoaderBg = false;
		phase = 'intro';
	});

	$effect(() => {
		if (typeof window === 'undefined') return;
		const fn = (window as any).__setStartupLoaderProgress;
		if (typeof fn !== 'function') return;
		fn(loadingPercent);
	});

	onDestroy(() => {
		stopPulse();
		if (autoIntroTimer) clearInterval(autoIntroTimer);
	});

	onMount(() => {
		context.stateLayout.showGameLoaderBg = true;
	});

	let startupLoaderRemoved = $state(false);
	const removeStartupLoader = () => {
		if (startupLoaderRemoved) return;
		startupLoaderRemoved = true;
		const loader = document.getElementById('startup-loader');
		if (!loader) return;
		loader.style.transition = 'opacity 0.4s ease';
		loader.style.opacity = '0';
		setTimeout(() => {
			loader.remove();
		}, 400);
	};

	$effect(() => {
		if (typeof window === 'undefined') return;
		if (startupLoaderRemoved) return;
		const bgReady = isPortraitLike ? bgLoadingMobileLoaded : gameloaderBgLoaded;
		if (!bgReady) return;
		if (!allAssetsLoaded) return;
		removeStartupLoader();
	});

	$effect(() => {
		if (phase !== 'intro') return;
		restartAutoIntro();
	});
</script>

<FadeContainer show={loadingType === 'start' && phase === 'preload'} duration={0} persistent zIndex={999999}>
	<MainContainer>
		<Text
			label="LoadingProgressText"
			x={progressBar.x}
			y={progressTextY}
			anchor={{ x: 0.5, y: 0.5 }}
			text={`Loading ${loadingPercent}%`}
			style={{
				fontFamily: 'Cinzel, serif',
				fontSize: isPortraitLike ? 28 : 24,
				fontWeight: '700',
				letterSpacing: 4,
				fill: 0xffffff,
				dropShadow: true,
				dropShadowAlpha: 0.65,
				dropShadowBlur: 8,
				dropShadowDistance: 2,
			}}
		/>
		<Rectangle
			label="LoadingProgressTrack"
			x={progressBar.x}
			y={progressBar.y}
			anchor={{ x: 0.5, y: 0.5 }}
			width={progressBar.width}
			height={progressBar.height}
			borderRadius={999}
			backgroundColor={0x000000}
			backgroundAlpha={0.35}
			borderColor={0xffffff}
			borderAlpha={0.25}
			borderWidth={2}
		/>
		{#if progressFillWidth > 0}
			<Rectangle
				label="LoadingProgressFill"
				x={progressFillX}
				y={progressBar.y}
				anchor={{ x: 0.5, y: 0.5 }}
				width={progressFillWidth}
				height={progressBar.height}
				borderRadius={999}
				backgroundColor={0xffd666}
				backgroundAlpha={0.95}
			/>
		{/if}
	</MainContainer>
</FadeContainer>

<FadeContainer show={loadingType === 'start' && phase === 'intro'}>
	<MainContainer>
		<Container
			label="IntroRoot"
			x={introRootPosition.x}
			y={introRootPosition.y}
			scale={introRootScale}
		>
			<FadeContainer
				persistent
				show={introShow}
				duration={250}
				oncomplete={() => {
					resolveIntroFade?.();
					resolveIntroFade = null;
				}}
			>
				{#if introReelLoaded}
					<SpineProvider
						label="IntroReel"
						key={introReelKey}
						anchor={0.5}
						x={introReelPosition.x}
						y={introReelPosition.y}
						scale={introReelScale}
					>
						<SpineTrack trackIndex={0} animationName={'animation'} loop />
					</SpineProvider>
				{/if}

				{#if introTextLoaded}
					<Sprite
						label="IntroText"
						key={introTextKey}
						x={introTextPosition.x}
						y={introTextPosition.y}
						anchor={0.5}
						scale={introTextScale}
					/>
				{/if}
			</FadeContainer>
		
			{#if logoLoaded}
				<SpineProvider
					label="IntroLogo"
					key="logo"
					x={logoPosition.x}
					y={logoPosition.y}
					scale={logoScale}
				>
					<SpineTrack trackIndex={0} animationName={'animation'} loop timeScale={3} />
				</SpineProvider>
			{/if}
			{#if volatilityLoaded}
				<Sprite
					label="IntroVolatility"
					key="volatility"
					x={volatilityPosition.x}
					y={volatilityPosition.y}
					anchor={0.5}
					scale={0.2}
				/>
			{/if}
			<!-- <Sprite
				key="checkbox"
				x={475}
				y={context.stateGameDerived.boardLayout().y/1.2}
				anchor={0.5}
				scale={0.75}
			/> -->
			<!-- LEFT BUTTON -->
			{#if introStateActiveLoaded && introStateDisabledLoaded}
				<Sprite
					label="IntroDotLeft"
					key={selectedIntro === 'left' ? 'introStateActive' : 'introStateDisabled'}
					x={introSelectionX.left}
					y={introSelectionY}
					anchor={0.5}
					scale={0.75}
					eventMode="static"
					cursor="pointer"
					onpointertap={() => {
						restartAutoIntro();
						void switchIntro('left');
					}}
				/>
			{/if}

<!-- MIDDLE BUTTON -->
			{#if introStateActiveLoaded && introStateDisabledLoaded}
				<Sprite
					label="IntroDotMiddle"
					key={selectedIntro === 'middle' ? 'introStateActive' : 'introStateDisabled'}
					x={introSelectionX.middle}
					y={introSelectionY}
					anchor={0.5}
					scale={0.75}
					eventMode="static"
					cursor="pointer"
					onpointertap={() => {
						restartAutoIntro();
						void switchIntro('middle');
					}}
				/>
			{/if}

<!-- RIGHT BUTTON -->
			{#if introStateActiveLoaded && introStateDisabledLoaded}
				<Sprite
					label="IntroDotRight"
					key={selectedIntro === 'right' ? 'introStateActive' : 'introStateDisabled'}
					x={introSelectionX.right}
					y={introSelectionY}
					anchor={0.5}
					scale={0.75}
					eventMode="static"
					cursor="pointer"
					onpointertap={() => {
						restartAutoIntro();
						void switchIntro('right');
					}}
				/>
			{/if}
		</Container>
	</MainContainer>
</FadeContainer>

<FadeContainer show={loadingType === 'start' && phase === 'intro' && spinButtonLoaded}>
	<MainContainer>
		<Container
			label="SpinButtonRoot"
			x={spinRootPosition.x}
			y={spinRootPosition.y}
			scale={spinRootScale}
		>
			<Sprite
				label="SpinButton"
				key="spinButton"
				anchor={0.5}
				x={spinSpritePosition.x}
				y={spinSpritePosition.y}
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
