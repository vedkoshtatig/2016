<script lang="ts" module>
	export type ButtonBuyKey =
		| 'buy_default'
		| 'buy_disabled'
		| 'cancel_default'
		| 'cancel_disabled';
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';
	import { stateBet, stateBetDerived } from 'state-shared';
	import { getContext } from '../game/context';

	type Props = {
		children: Snippet<
			[
				{
					key: ButtonBuyKey;
					onpress: () => void;
				},
			]
		>;
	};

	const props: Props = $props();
	const context = getContext();

	let cancelDisabled = $state(false);

	const buy = () => {
		stateBet.activeBetModeKey = 'BUY';
		// context.eventEmitter.broadcast({ type: 'buyFeature' });
	};

	const cancel = () => {
		if (!cancelDisabled) {
			stateBet.activeBetModeKey = 'BASE';
			// context.eventEmitter.broadcast({ type: 'cancelBuy' });
		}
	};

	const onpress = () => {
		// context.eventEmitter.broadcast({ type: 'soundPressBuy' });

		if (stateBetDerived.activeBetMode()?.type !== 'buy') {
			buy();
		} else {
			cancel();
		}
	};

	const getKey = () => {
		const isBuyMode = stateBetDerived.activeBetMode()?.type === 'buy';

		if (!isBuyMode) {
			if (!stateBetDerived.isBetCostAvailable()) return 'buy_disabled';
			return 'buy_default';
		}

		if (isBuyMode) {
			if (cancelDisabled) return 'cancel_disabled';
			return 'cancel_default';
		}

		return 'buy_default';
	};

	const key = $derived.by(getKey);

	context.eventEmitter.subscribeOnMount({
		
		
	});
</script>

{@render props.children({ key, onpress })}