<script lang="ts">
	import { Rectangle, SpineProvider, SpineTrack ,Sprite} from 'pixi-svelte';
	import { FadeContainer } from 'components-pixi';
	import { SECOND } from 'constants-shared/time';

	import { getContext } from '../game/context';

	const context = getContext();
	const backgroundProps = $derived(
		context.stateLayoutDerived.normalBackgroundLayout({ scale: 0.5 }),
	);
	const showBaseBackground = $derived(context.stateGame.gameType === 'basegame');
	const showFeatureBackground = $derived(context.stateGame.gameType === 'freegame');

</script>

<Rectangle {...context.stateLayoutDerived.canvasSizes()} backgroundColor={0x000000} zIndex={-3} />

<FadeContainer show={showBaseBackground} duration={SECOND} zIndex={-2}>
	<SpineProvider key="loader" {...backgroundProps}>
		<SpineTrack trackIndex={0} animationName={'bg'} loop />
	</SpineProvider>
	<SpineProvider key="loader" {...backgroundProps}>
		<SpineTrack trackIndex={0} animationName={'bg'} loop />
	</SpineProvider>
</FadeContainer>

<FadeContainer show={showFeatureBackground} duration={SECOND} zIndex={-1}>
	<!-- <SpineProvider key="foregroundFeatureAnimation" {...backgroundProps}>
		<SpineTrack trackIndex={0} animationName={'idle'} loop />
	</SpineProvider>
	<SpineProvider key="foregroundFeatureAnimation" {...backgroundProps}>
		<SpineTrack trackIndex={0} animationName={'dust'} loop />
	</SpineProvider> -->
	<Sprite
	key="freeSpinBg"
	anchor={0.5}
	x={context.stateGameDerived.boardLayout().x}
	y={context.stateGameDerived.boardLayout().y - 45}
	width={context.stateGameDerived.boardLayout().width * 1.12}
	height={context.stateGameDerived.boardLayout().height * 1.12}
	scale={{ x: 0.73, y: 0.8 }}
	
/>
</FadeContainer>
