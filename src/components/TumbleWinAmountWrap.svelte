<script lang="ts">
	import type { Snippet } from 'svelte';

	import { Container } from 'pixi-svelte';
	import { FadeContainer } from 'components-pixi';

	import { getContext } from '../game/context';
	import { SYMBOL_SIZE } from '../game/constants';
	import BoardContainer from './BoardContainer.svelte';

	type Props = {
		show: boolean;
		children: Snippet;
	};

	const props: Props = $props();
	const context = getContext();

	const desktopPosition = $derived({
		x: context.stateGameDerived.boardLayout().width *(context.stateGame.gameType === 'basegame' ? 2.15 : 0.26),
		y: -SYMBOL_SIZE * 0.8 *(context.stateGame.gameType === 'basegame' ? -2.0 : -4.8)
	});

	const portraitPosition = $derived({
		x:
			context.stateGameDerived.boardLayout().width *
			(context.stateGame.gameType === 'basegame' ? 2.1 : 2.1),
		y: -SYMBOL_SIZE * 0.8 * -2.0,
	});

	const position = $derived(
		context.stateLayoutDerived.isStacked() ? portraitPosition : desktopPosition,
	);

	const scale = $derived(context.stateLayoutDerived.isStacked() ? 1.28 : 0.9);
</script>

<FadeContainer show={props.show}>
	
		<Container {...position} {scale}>
			{@render props.children()}
		</Container>

</FadeContainer>
