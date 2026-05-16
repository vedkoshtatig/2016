<script lang="ts" module>
	export type EmitterEventMultiplierBoard =
		| { type: 'multiplierBoardShow' }
		| { type: 'multiplierBoardHide' }
		| { type: 'multiplierBoardInit' }
		| { type: 'multiplierBoardReset' }
		| { type: 'multiplierBoardAnimate' }
		| { type: 'multiplierBoardMove' };
</script>

<script lang="ts">
	import _ from 'lodash';
	import { Tween } from 'svelte/motion';
	import { quartInOut } from 'svelte/easing';

	import { waitForResolve } from 'utils-shared/wait';
	import { Container } from 'pixi-svelte';
	import MultiplierBoardBase from './MultiplierBoardBase.svelte';
	import BoardContainer from './BoardContainer.svelte';
	import { getContext } from '../game/context';
	import type { RawSymbol, SymbolState } from '../game/types';
	import { getSymbolX, getSymbolY } from '../game/utils';

	const context = getContext();
	    	type Props = {
		scale?: number;
        x?: number;
        y?: number;
		isLandscape?: boolean;
	};

	const {
		scale = 1,
        x=0,
        y=0,
		isLandscape = false
	}: Props = $props();

	let show = $state(false);

	const createMultiplierSymbol = ({
		rawSymbol,
		reelIndex,
		symbolIndex,
		reelLength,
	}: {
		rawSymbol: RawSymbol;
		reelIndex: number;
		symbolIndex: number;
		reelLength: number;
	}) => {
		if (rawSymbol.name === 'M' && symbolIndex > 0 && symbolIndex < reelLength - 1) {
			const initX = getSymbolX(reelIndex);
			const initY = getSymbolY(symbolIndex - 1);
			const symbolX = new Tween(initX);
			const symbolY = new Tween(initY);
			const symbolState = 'win' as SymbolState;
			const oncomplete = () => {};

			const multiplierSymbol = $state({
				initX,
				initY,
				symbolX,
				symbolY,
				rawSymbol,
				symbolState,
				oncomplete,
			});

			return multiplierSymbol;
		}

		return undefined;
	};

	const initMultiplierBoard = () => {
		return context.stateGameDerived.boardRaw().map((rawSymbols, reelIndex) => {
			return rawSymbols.map((rawSymbol, symbolIndex) =>
				createMultiplierSymbol({
					rawSymbol,
					reelIndex,
					symbolIndex,
					reelLength: rawSymbols.length,
				}),
			);
		});
	};

	context.eventEmitter.subscribeOnMount({
		multiplierBoardShow: () => (show = true),
		multiplierBoardHide: () => (show = false),
		multiplierBoardInit: () => {
			context.stateGame.multiplierBoard = initMultiplierBoard();
		},
		multiplierBoardReset: () => {
			context.stateGame.multiplierBoard = [];
		},
		multiplierBoardAnimate: async () => {
			const getPromises = () =>
				_.flatten(
					context.stateGame.multiplierBoard.map((multiplierReel) => {
						return multiplierReel.filter(Boolean).map(async (multiplierSymbol) => {
							await waitForResolve((resolve) => (multiplierSymbol!.oncomplete = resolve));
						});
					}),
				);

			await Promise.all(getPromises());
		},
		multiplierBoardMove: async () => {
			const getPromises = () =>
				_.flatten(
					context.stateGame.multiplierBoard.map((multiplierReel) => {
						return multiplierReel.filter(Boolean).map(async (multiplierSymbol) => {
							const target = {
								x: context.stateGameDerived.boardLayout().width * (isLandscape ? -0.3 : 0.75),
								y: context.stateGameDerived.boardLayout().height * (isLandscape ? 0.45 : -0.4),
							};
							const tweenOptions = { duration: 500, easing: quartInOut };
							const moveX = () => multiplierSymbol!.symbolX.set(target.x, tweenOptions);
							const moveY = () => multiplierSymbol!.symbolY.set(target.y, tweenOptions);
							await Promise.all([moveX(), moveY()]);
						});
					}),
				);

			await Promise.all(getPromises());
		},
	});
</script>
<Container scale={scale} x={x} y={y}>
{#if show}
	<BoardContainer>
		<MultiplierBoardBase />
	</BoardContainer>
{/if}
</Container>
