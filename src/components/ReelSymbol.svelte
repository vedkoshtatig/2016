<script lang="ts">
	import Symbol from './Symbol.svelte';
	import SymbolWrap from './SymbolWrap.svelte';
	import { BOARD_DIMENSIONS } from '../game/constants';
	import { getSymbolInfo, getSymbolX } from '../game/utils';
	import type { ReelSymbol } from '../game/stateGame.svelte';

	type Props = {
		reelIndex: number;
		reelSymbol: ReelSymbol;
	};

	const props: Props = $props();
	const symbolInfo = $derived(
		getSymbolInfo({ rawSymbol: props.reelSymbol.rawSymbol, state: props.reelSymbol.symbolState }),
	);
	const isLastVisibleRow = $derived(props.reelSymbol.symbolIndexOfBoard === BOARD_DIMENSIONS.y - 1);
	const h1YOffset = $derived(props.reelSymbol.rawSymbol.name === 'H1' ? 6 : 0);
	const sYOffset = $derived(props.reelSymbol.rawSymbol.name === 'S' ? -10 : 0);
	const l2SymbolYOffset = $derived(props.reelSymbol.rawSymbol.name === 'L2' ? -8 : 0);
	const isL4 = $derived(props.reelSymbol.rawSymbol.name === 'L4');
	const l4SymbolYOffset = $derived(isL4 ? -10 : 0);
	const yOffset = $derived((isLastVisibleRow ? 8 : 0) + h1YOffset + sYOffset);
	const animating = $derived(
		symbolInfo.type === 'spine' &&
			(isL4 || props.reelSymbol.symbolState === 'land' || props.reelSymbol.symbolState === 'win'),
	);
</script>

<SymbolWrap
	x={getSymbolX(props.reelIndex)}
	y={props.reelSymbol.symbolY.current + yOffset}
	{animating}
>
	<Symbol
		y={l4SymbolYOffset + l2SymbolYOffset}
		state={props.reelSymbol.symbolState}
		rawSymbol={props.reelSymbol.rawSymbol}
		oncomplete={() => {
			if (props.reelSymbol.symbolState === 'win') props.reelSymbol.oncomplete();
			if (props.reelSymbol.symbolState === 'land') props.reelSymbol.symbolState = 'static';
		}}
	/>
</SymbolWrap>
