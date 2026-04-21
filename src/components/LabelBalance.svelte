<script lang="ts">
	import { Tween } from 'svelte/motion';

	import { stateBet } from 'state-shared';
	import { numberToCurrencyString } from 'utils-shared/amount';

	import UiLabel from './UiLabel.svelte';
	import { i18nDerived } from '../i18n/i18nDerived';

	type Props = {
		stacked?: boolean;
		center?: boolean;
	};

	const props: Props = $props();

	const balanceTween = new Tween(stateBet.balanceAmount);

	const label = $derived.by(() => i18nDerived.balance());

	const value = $derived.by(() =>
		numberToCurrencyString(balanceTween.current)
	);

	$effect(() => {
		balanceTween.set(stateBet.balanceAmount);
	});
</script>

<UiLabel
	tiled
	{label}
	{value}
	stacked={props.stacked}
	borderRadius={65}
	align={props.center ? 'center' : 'left'}
/>