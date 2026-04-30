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

const showLoadingBackground = $derived(isLoading);
	const showBaseBackground = $derived(context.stateGame.gameType === 'basegame' && !isLoading	);
	const showFeatureBackground = $derived(context.stateGame.gameType === 'freegame'||context.stateGame.gameType === 'freeSpins');

</script>

<Rectangle {...context.stateLayoutDerived.canvasSizes()} backgroundColor={0x000000} zIndex={-3} />

<FadeContainer show={showLoadingBackground} duration={SECOND} zIndex={-2}>
	<Sprite key="loadingBg" anchor={0.5} {...loadingBgProps} scale={{x:1.22,y:0.75}}/>
</FadeContainer>


<FadeContainer show={showBaseBackground} duration={SECOND} zIndex={-2}>
	 <SpineProvider key="loader" {...backgroundProps}>
		<SpineTrack trackIndex={0} animationName={'bg'} loop />
	</SpineProvider>

	
</FadeContainer>

<FadeContainer show={showFeatureBackground} duration={SECOND} zIndex={-2}>
	<!-- <SpineProvider key="foregroundFeatureAnimation" {...backgroundProps}>
		<SpineTrack trackIndex={0} animationName={'idle'} loop />
	</SpineProvider>
	<SpineProvider key="foregroundFeatureAnimation" {...backgroundProps}>
		<SpineTrack trackIndex={0} animationName={'dust'} loop />
	</SpineProvider> -->
	<Sprite
	key="freeSpinBg"
	anchor={0.5}
	{...freeSpinBgProps}
/>
</FadeContainer>
