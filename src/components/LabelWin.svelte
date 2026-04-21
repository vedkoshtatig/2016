<script lang="ts">
	import { Tween } from 'svelte/motion';

	import { stateBet } from 'state-shared';
	import { bookEventAmountToCurrencyString } from 'utils-shared/amount';

	import UiLabel from './UiLabel.svelte';
	import { i18nDerived } from '../i18n/i18nDerived';

	type Props = {
		stacked?: boolean;
		center?: boolean;
	};

	const props: Props = $props();

	const winBookEventAmountTween = new Tween(stateBet.winBookEventAmount);

	const label = $derived.by(() => i18nDerived.win());

	const value = $derived.by(() =>
		bookEventAmountToCurrencyString(winBookEventAmountTween.current)
	);

	$effect(() => {
		winBookEventAmountTween.set(stateBet.winBookEventAmount);
	});
</script>

<UiLabel
	tiled
	{label}
	{value}
	stacked={props.stacked}
	borderRadius={65}
	labelColor="#FFFFFF"
	textColor="#FFD103"
	align={props.center ? 'center' : 'left'}
/>