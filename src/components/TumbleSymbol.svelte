<script lang="ts">
	import Symbol from './Symbol.svelte';
	import SymbolWrap from './SymbolWrap.svelte';
	import { BOARD_DIMENSIONS, SYMBOL_SIZE } from '../game/constants';
	import { getSymbolX, getSymbolInfo } from '../game/utils';
	import type { TumbleSymbol } from '../game/stateGame.svelte';
	import { getContext } from '../game/context';

	const context = getContext();
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
	const l2SymbolYOffset = $derived(props.tumbleSymbol.rawSymbol.name === 'L2' ? -8 : 0);
	const l4SymbolYOffset = $derived(props.tumbleSymbol.rawSymbol.name === 'L4' ? -10 : 0);
	const h1YOffset = $derived(props.tumbleSymbol.rawSymbol.name === 'H1' ? 6 : 0);
	const sYOffset = $derived(props.tumbleSymbol.rawSymbol.name === 'S' ? -8 : 0);
	const yOffset = $derived((isLastVisibleRow ? 8 : 0) + h1YOffset + sYOffset);
		const isLandscape = $derived(() => {
		const { width, height } = context.stateLayoutDerived.canvasSizes();
		return width > height;
	});
</script>

<SymbolWrap
	x={getSymbolX(props.reelIndex)}
	y={props.tumbleSymbol.symbolY.current + yOffset}
	animating={symbolInfo.type === 'spine'}
>
	<Symbol
	y={l4SymbolYOffset + l2SymbolYOffset+(isLandscape()?0:((props.tumbleSymbol.symbolY.current/3.2))-60)}
		state={props.tumbleSymbol.symbolState}
		rawSymbol={props.tumbleSymbol.rawSymbol}
		oncomplete={props.tumbleSymbol.oncomplete}
	/>
</SymbolWrap>
