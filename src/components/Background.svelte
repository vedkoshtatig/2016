<script lang="ts">
	import { Rectangle, SpineProvider, SpineTrack ,Sprite} from 'pixi-svelte';
	import { FadeContainer } from 'components-pixi';
	import { SECOND } from 'constants-shared/time';

	import { getContext } from '../game/context';

	const context = getContext();
	const backgroundProps = $derived(
		context.stateLayoutDerived.normalBackgroundLayout({ scale: 0.5 }),
	);
	const loadingBgProps = $derived(
	context.stateLayoutDerived.normalBackgroundLayout({ scale: 1 })
);

	const FREE_SPIN_BG_BASE_SIZE = { width: 2000, height: 2000 };
	const freeSpinBgProps = $derived.by(() => {
		const canvas = context.stateLayoutDerived.canvasSizes();
		const scale = Math.max(
			canvas.width / FREE_SPIN_BG_BASE_SIZE.width,
			canvas.height / FREE_SPIN_BG_BASE_SIZE.height,
		);

		return {
			x: canvas.width * 0.5,
			y: canvas.height * 0.5,
			scale: { x: scale, y: scale },
		};
	});
	const isLoading = $derived(context.stateLayout.showLoadingScreen);
	const isPortraitLike = $derived.by(() =>
		['portrait', 'tablet'].includes(context.stateLayoutDerived.layoutType()),
	);
	const showGameLoaderBg = $derived((context.stateLayout.showGameLoaderBg ?? true) && isLoading);

	const showLoadingBackground = $derived(showGameLoaderBg);
	const showBaseBackground = $derived(context.stateGame.gameType === 'basegame' && (!isLoading || !showGameLoaderBg));
	const showFeatureBackground = $derived(context.stateGame.gameType === 'freegame'||context.stateGame.gameType === 'freeSpins');

	const gameloaderBgLoaded = $derived.by(() => !!$state.snapshot(context.stateApp.loadedAssets['gameloaderBg']));
	const bgLoadingMobileLoaded = $derived.by(() => !!$state.snapshot(context.stateApp.loadedAssets['bgLoadingMobile']));
	const baseBgLoaded = $derived.by(() => !!$state.snapshot(context.stateApp.loadedAssets['loader']));
	const freeSpinBgLoaded = $derived.by(() => !!$state.snapshot(context.stateApp.loadedAssets['freeSpinBg']));
</script>

<Rectangle {...context.stateLayoutDerived.canvasSizes()} backgroundColor={0xc8b08a} zIndex={-3} />

<FadeContainer show={showLoadingBackground} duration={0} zIndex={-2}>
	{#if isPortraitLike ? bgLoadingMobileLoaded : gameloaderBgLoaded}
		<Sprite
			key={isPortraitLike ? 'bgLoadingMobile' : 'gameloaderBg'}
			anchor={0.5}
			x={context.stateLayoutDerived.canvasSizes().width * 0.5}
			y={context.stateLayoutDerived.canvasSizes().height * 0.5}
			width={context.stateLayoutDerived.canvasSizes().width}
			height={context.stateLayoutDerived.canvasSizes().height}
		/>
	{/if}
</FadeContainer>


<FadeContainer show={showBaseBackground} duration={isLoading ? 0 : SECOND} zIndex={-2}>
	{#if baseBgLoaded}
		<SpineProvider key="loader" {...backgroundProps}>
			<SpineTrack trackIndex={0} animationName={'bg'} loop />
		</SpineProvider>
	{/if}

	
</FadeContainer>

<FadeContainer show={showFeatureBackground} duration={SECOND} zIndex={-2}>
	<!-- <SpineProvider key="foregroundFeatureAnimation" {...backgroundProps}>
		<SpineTrack trackIndex={0} animationName={'idle'} loop />
	</SpineProvider>
	<SpineProvider key="foregroundFeatureAnimation" {...backgroundProps}>
		<SpineTrack trackIndex={0} animationName={'dust'} loop />
	</SpineProvider> -->
	{#if freeSpinBgLoaded}
		<Sprite key="freeSpinBg" anchor={0.5} {...freeSpinBgProps} />
	{/if}
</FadeContainer>
