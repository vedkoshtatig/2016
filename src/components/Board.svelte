<script lang="ts" module>
    import type { RawSymbol, Position } from '../game/types';

    export type EmitterEventBoard =
        | { type: 'boardSettle'; board: RawSymbol[][] }
        | { type: 'boardShow' }
        | { type: 'boardHide' }
        | {
                type: 'boardWithAnimateSymbols';
                symbolPositions: Position[];
          };
</script>

<script lang="ts">
    import { waitForResolve } from 'utils-shared/wait';
    import { BoardContext } from 'components-shared';
    import BoardFrame from './BoardFrame.svelte';
    import { getContext } from '../game/context';
    import BoardContainer from './BoardContainer.svelte';
    import BoardMask from './BoardMask.svelte';
    import BoardBase from './BoardBase.svelte';
	import { Container } from 'pixi-svelte';

    const context = getContext();
    	type Props = {
		scale?: number;
        x?: number;
        y?: number;
	};

	const {
		scale = 1,
        x=0,
        y=1
	}: Props = $props();

    let show = $state(true);

    context.eventEmitter.subscribeOnMount({
        stopButtonClick: () => context.stateGameDerived.enhancedBoard.stop(),
        boardSettle: ({ board }) => context.stateGameDerived.enhancedBoard.settle(board),
        boardShow: () => (show = true),
        boardHide: () => (show = false),
        boardWithAnimateSymbols: async ({ symbolPositions }) => {
            const getPromises = () =>
                symbolPositions.map(async (position) => {
                    const reelSymbol = context.stateGame.board[position.reel].reelState.symbols[position.row];
                    reelSymbol.symbolState = 'win';
                    await waitForResolve((resolve) => (reelSymbol.oncomplete = resolve));
                    reelSymbol.symbolState = 'postWinStatic';
                });

            await Promise.all(getPromises());
        },
    });

    context.stateGameDerived.enhancedBoard.readyToSpinEffect();
</script>

<Container scale={scale} x={x} y={y}>

 <BoardFrame />
{#if show}
    <BoardContext animate={false} >
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
</Container>
