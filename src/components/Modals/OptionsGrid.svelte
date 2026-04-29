<script lang="ts" generics="TValue extends string | number">
	import type { Snippet } from 'svelte';
	import { Button } from 'components-shared';

	type LayoutType = 'grid' | 'row';

	type Props = {
		value: TValue;
		options: Readonly<TValue[]>;
		miniSize?: boolean;
		layout?: LayoutType; // 👈 NEW PROP
		rowGap?: string;
		rowPaddingX?: string;
		onchange: (value: TValue) => void;
		option: Snippet<[{ option: TValue; index: number }]>;
	};

	const props: Props = $props();
</script>

<div class="wrap">
	<div class="content-wrap">
		<div
			class="container"
			class:miniSize={props.miniSize}
			class:gridLayout={props.layout === 'grid'}
			class:rowLayout={props.layout !== 'grid'}
			style={`--rowGap: ${props.rowGap ?? '1.25rem'}; --rowPaddingX: ${props.rowPaddingX ?? '0.5rem'};`}
		>
			{#each props.options as option, index (option)}
				<Button onclick={() => props.onchange(option)}>
					{@render props.option({ option, index })}
				</Button>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.wrap {
		min-width: 20rem;
	}

	@media (orientation: portrait) {
		@media (min-width: 320px) and (max-width: 370px) {
			.wrap {
				min-width: 17rem;
			}
		}
	}

	@media (orientation: landscape) {
		@media (min-height: 255px) and (max-height: 480px) {
			.wrap {
				min-width: 23rem;
			}
		}
	}

	.content-wrap {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.container {
		gap: 0.75rem;
		place-content: center;
	}

	/* ✅ GRID MODE */
	.gridLayout {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
	}

	@media (max-width: 480px) {
		.gridLayout {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	/* ✅ ROW MODE */
	.rowLayout {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		flex-wrap: nowrap;
		gap: var(--rowGap);
		padding-inline: var(--rowPaddingX);
		overflow-x: auto;      // scroll if overflow
		white-space: nowrap;
	}

	/* ✅ MINI SIZE (only meaningful for grid) */
	.miniSize {
		@media (max-width: 500px) {
			grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
		}
		@media (max-height: 500px) {
			grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
		}
	}
</style>
