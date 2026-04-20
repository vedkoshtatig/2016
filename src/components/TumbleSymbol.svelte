<script lang="ts">
	import Symbol from './Symbol.svelte';
	import SymbolWrap from './SymbolWrap.svelte';
	import { BOARD_DIMENSIONS, SYMBOL_SIZE } from '../game/constants';
	import { getSymbolX, getSymbolInfo } from '../game/utils';
	import type { TumbleSymbol } from '../game/stateGame.svelte';

	type Props = {
		reelIndex: number;
		tumbleSymbol: TumbleSymbol;
	};

	const props: Props = $props();
	const symbolInfo = $derived(
		getSymbolInfo({
			rawSymbol: props.tumbleSymbol.rawSymbol,
			state: props.tumbleSymbol.symbolState,
		}),
	);
	const lastVisibleRowY = $derived((BOARD_DIMENSIONS.y - 0.5) * SYMBOL_SIZE);
	const isLastVisibleRow = $derived(
		Math.abs(props.tumbleSymbol.symbolY.current - lastVisibleRowY) < 1,
	);
	const h1YOffset = $derived(props.tumbleSymbol.rawSymbol.name === 'H1' ? 6 : 0);
	const yOffset = $derived((isLastVisibleRow ? 8 : 0) + h1YOffset);
</script>

<SymbolWrap
	x={getSymbolX(props.reelIndex)}
	y={props.tumbleSymbol.symbolY.current + yOffset}
	animating={symbolInfo.type === 'spine'}
>
	<Symbol
		state={props.tumbleSymbol.symbolState}
		rawSymbol={props.tumbleSymbol.rawSymbol}
		oncomplete={props.tumbleSymbol.oncomplete}
	/>
</SymbolWrap>
