<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	const props: Props = $props();
</script>

<div class="ui-modal-title-wrap">
	{@render props.children()}
</div>

<style lang="scss">
	.ui-modal-title-wrap {
		text-align: center;
		font-family: 'Inter', sans-serif;
		font-weight: 700;          // Bold
		font-size: 25px;
		line-height: 16px;
		letter-spacing: 0px;

		text-transform: uppercase;

		margin-bottom: 15px;                 // remove default h2 spacing
	}
</style>
