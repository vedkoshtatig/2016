<script lang="ts" module>
	export type RawWin = {
		win: number;
		mult: number;
		result: number;
		reel: number; // 0 | 1 | 2 | 3 | 4 | 5;
		row: number; // 1 | 2 | 3 | 4 | 5; // excluding the off top row and the off bottom row
	};
	export type Win = RawWin & { oncomplete: () => void };
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { Tween } from 'svelte/motion';

	import { BitmapText } from 'pixi-svelte';
	import { stateBet } from 'state-shared';
	import { SECOND } from 'constants-shared/time';
	import { FadeContainer } from 'components-pixi';
	import { waitForTimeout } from 'utils-shared/wait';
	import { bookEventAmountToCurrencyString } from 'utils-shared/amount';

	import { SYMBOL_SIZE } from '../game/constants';
	import { getContext } from '../game/context';

	type Props = { win: Win };

	const props: Props = $props();
	const context = getContext();
	const y = new Tween(0);
	const scale = new Tween(1);
	const alpha = new Tween(4);
	let show = $state(true);
	const animationTimeScale = () => (stateBet.isTurbo ? 2.5 : 1.5);
	const fstyle = {
		fontFamily: 'sans-serif',
		fontSize: 72,
		align: 'center',
	};
	let showMultiplier = $state(props.win.mult > 1);

	// update showMultiplier
	onMount(async () => {
		await waitForTimeout(SECOND / animationTimeScale());
		showMultiplier = false;
	});

	// update scale
	onMount(async () => {
		if (showMultiplier) {
			await waitForTimeout(SECOND);
			context.eventEmitter.broadcast({ type: 'soundOnce', name: 'sfx_multiplier_combine_a' });
			await scale.set(0.1, { duration: 200 / animationTimeScale() });
			await scale.set(1, { duration: 200 / animationTimeScale() });
		}
	});

	// update y
	// update y
	onMount(async () => {
		await Promise.all([
	
			alpha.set(0, {
				duration: (SECOND*2.5) / animationTimeScale(),
			}),
		]);

		show = false;
	});
</script>

<FadeContainer
	{show}
	oncomplete={() => {
		if (!show) props.win.oncomplete();
	}}
	zIndex={1000}
>
	<BitmapText
		x={context.stateGameDerived.boardLayout().x/2}
		y={context.stateGameDerived.boardLayout().y/2 }
		alpha={alpha.current}
		scale={scale.current}
		text={showMultiplier
			? `${bookEventAmountToCurrencyString(props.win.win)} X ${props.win.mult}`
			: bookEventAmountToCurrencyString(props.win.result)}
		anchor={0.5}
		style={fstyle}
	/>
</FadeContainer>
