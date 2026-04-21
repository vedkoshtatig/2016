<script lang="ts" module>
	import type { RawSymbol, Position } from '../game/types';

	export type EmitterEventBoard =
		| { type: 'boardSettle'; board: RawSymbol[][] }
		| { type: 'boardShow' }
		| { type: 'boardHide' }
		| {
				type: 'boardWithAnimateSymbols';
				symbolPositions: Position[];
		  }
		| { type: 'boardWithMovingMultiplierTexts' }
		| {
				type: 'boardShowWinInfo';
				wins: {
					symbol: string;
					totalWin: number;
					count: number;
				}[];
		  }
		| {
				type: 'symbolExplode';
				data: {
					symbol: string;
					value: number;
					reel: number;
					row: number;
				};
		  };
</script>

<script lang="ts">
	import { waitForResolve } from 'utils-shared/wait';
	import { BoardContext } from 'components-shared';

	import { getContext } from '../game/context';
	import BoardContainer from './BoardContainer.svelte';
	import BoardMask from './BoardMask.svelte';
	import BoardBase from './BoardBase.svelte';

	const context = getContext();

	let show = $state(true);

	context.eventEmitter.subscribeOnMount({
		stopButtonClick: () => context.stateGameDerived.enhancedBoard.stop(),
		boardSettle: ({ board }) => context.stateGameDerived.enhancedBoard.settle(board),
		boardShow: () => (show = true),
		boardHide: () => (show = false),
		boardWithAnimateSymbols: async ({ symbolPositions }) => {
			const grouped: Record<string, { total: number; count: number }> = {};

			const getPromises = () =>
				symbolPositions.map(async (position) => {
					const reelSymbol = context.stateGame.board[position.reel].reelState.symbols[position.row];

					if (!reelSymbol.winValue || !reelSymbol.winSymbol) return;

					// ✅ GROUP by symbol
					if (!grouped[reelSymbol.winSymbol]) {
						grouped[reelSymbol.winSymbol] = { total: 0, count: 0 };
					}

					grouped[reelSymbol.winSymbol].total += reelSymbol.winValue;
					grouped[reelSymbol.winSymbol].count += 1;

					reelSymbol.symbolState = 'win';

					await waitForResolve((resolve) => (reelSymbol.oncomplete = resolve));

					reelSymbol.symbolState = 'postWinStatic';

					reelSymbol.winValue = null;
					reelSymbol.winSymbol = null;
				});

			await Promise.all(getPromises());

			// ✅ EMIT ONLY ONCE PER SYMBOL
			Object.entries(grouped).forEach(([symbol, data]) => {
				context.eventEmitter.broadcast({
					type: 'symbolExplode',
					data: {
						symbol,
						value: data.total, // 🔥 total win
						reel: -1, // not needed anymore
						row: -1,
					},
				});
			});
		},
		boardWithMovingMultiplierTexts: () => {
			context.stateGame.board.forEach((reel) => {
				reel.reelState.symbols.forEach((reelSymbol) => {
					if (reelSymbol.rawSymbol.name === 'M') {
						reelSymbol.rawSymbol = {
							...reelSymbol.rawSymbol,
							name: 'M_TAKEN', // TODO fix type error
						};
					}
				});
			});
		},
		boardShowWinInfo: ({ wins }) => {
			wins.forEach((win) => {
				//console.log(`💣 EXPLOSION → Symbol: ${win.symbol}, Total Win: ${win.totalWin}`);

				// optional: store global display (not per symbol)
				context.stateGame.lastExplodedSymbol = win.symbol;
				context.stateGame.lastExplodedValue = win.totalWin;
			});
		},
	});

	context.stateGameDerived.enhancedBoard.readyToSpinEffect();
</script>

{#if show}
	<BoardContext animate={false}>
		<BoardContainer>
			<BoardMask />
			<BoardBase />
		</BoardContainer>
	</BoardContext>

	<BoardContext animate={true}>
		<BoardContainer>
			<BoardBase />
		</BoardContainer>
	</BoardContext>
{/if}
