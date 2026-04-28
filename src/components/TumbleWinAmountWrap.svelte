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
		x: context.stateGameDerived.boardLayout().width *2.1,
		y: -SYMBOL_SIZE * 0.8 * -2.0,
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

	const scale = $derived(context.stateLayoutDerived.isStacked() ? 1.28 : 1);
</script>

<FadeContainer show={props.show}>
	
		<Container {...position} {scale}>
			{@render props.children()}
		</Container>

</FadeContainer>
