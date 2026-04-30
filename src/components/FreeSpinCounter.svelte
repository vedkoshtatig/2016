<script lang="ts" module>
	export type EmitterEventFreeSpinCounter =
		| { type: 'freeSpinCounterShow' }
		| { type: 'freeSpinCounterHide' }
		| { type: 'freeSpinCounterUpdate'; current?: number; total?: number };
</script>

<script lang="ts">
	import { MainContainer } from 'components-layout';
	import { FadeContainer } from 'components-pixi';

	import { getContext } from '../game/context';
	import { SYMBOL_SIZE } from '../game/constants';
const context = getContext();
	import { anchorToPivot, BitmapText, Container, Sprite, type Sizes } from 'pixi-svelte';
const showBuyBoards = $derived(
	context.stateGame.gameType !== 'basegame'
);

	const PANEL_KEY_DESKTOP = 'Frame_FSCounter.png';
	const PANEL_RATIO_DESKTOP = 824 / 622;
	const panelKey = PANEL_KEY_DESKTOP;
	const panelWidth = $derived(SYMBOL_SIZE * 2);
	const panelSizes = $derived({
		width: panelWidth,
		height: panelWidth / PANEL_RATIO_DESKTOP,
	});
	const scale = 1;
	const position = $derived({
		x:
			context.stateGameDerived.boardLayout().x -
			context.stateGameDerived.boardLayout().width * 0.5 -
			panelSizes.width -
			SYMBOL_SIZE * 1.4,
		y:
			context.stateGameDerived.boardLayout().y -
			context.stateGameDerived.boardLayout().height * 0.5,
	});

	const fontSize = SYMBOL_SIZE * 0.275;

	let show = $state(false);
	let current = $state(0);
	let total = $state(0);
	let titleSizes: Sizes = $state({ width: 0, height: 0 });
	let counterSizes: Sizes = $state({ width: 0, height: 0 });
	const fstyle = {
		fontFamily: 'sans-serif',
		fontSize: 54,
		letterSpacing:3,
		align: 'center',
	};
	const fstyle2 = {
		fontFamily: 'sans-serif',
		fontSize: 84,
		letterSpacing:3,
	
		align: 'center',
	};
	const textContainerSizes = $derived({
		width: titleSizes.width,
		height: titleSizes.height + counterSizes.height,
	});
	const counterPosition = $derived({ x: titleSizes.width / 2, y: titleSizes.height });

	context.eventEmitter.subscribeOnMount({
		freeSpinCounterShow: () => (show = true),
		freeSpinCounterHide: () => (show = false),
		freeSpinCounterUpdate: (emitterEvent) => {
			if (emitterEvent.current !== undefined) current = emitterEvent.current;
			if (emitterEvent.total !== undefined) total = emitterEvent.total;
		},
	});
</script>
	{#if showBuyBoards}
	<MainContainer>
	<Container y={context.stateGameDerived.boardLayout().y/1.3} x={context.stateGameDerived.boardLayout().x*0.02} scale={{x:0.83,y:0.83}} >
		<FadeContainer {show} {...position} {scale}>
		<Sprite key="freeSpinCounter" {...panelSizes}  />
		<Container
			x={panelSizes.width * 0.5}
			y={panelSizes.height * 0.5}
			pivot={anchorToPivot({
				sizes: textContainerSizes,
				anchor: { x: 0.5, y: 0.5 },
			})}
			scale={0.6}
		>
			<BitmapText
				text={'FREE SPIN'}
				style={fstyle}
				onresize={(sizes) => (titleSizes = sizes)}
			/>
			<BitmapText
				text={`${current} OF ${total}`}
			
				{...counterPosition}
				anchor={{ x: 0.5, y: 0 }}
				style={fstyle2}
				
					y={40}
				onresize={(sizes) => (counterSizes = sizes)}
			/>
		</Container>
	</FadeContainer>
	</Container>
</MainContainer>

{/if}
