<script lang="ts">
	import type { Snippet } from 'svelte';

	type IconSet = {
		on: string;
		off: string;
		hover: string;
		active: string;
	};

	type Props = {
		value: number;
		children: Snippet;
		iconSet: IconSet;
	};

	let { value = $bindable(), children, iconSet }: Props = $props();

	let isHovered = $state(false);

	const toggle = () => {
		value = value === 0 ? 100 : 0;
	};
</script>

<div class="col">
	<div
		class="icon-wrap"
		on:mouseenter={() => (isHovered = true)}
		on:mouseleave={() => (isHovered = false)}
		on:click={toggle}
	>
		<img
			src={value === 0 ? iconSet.off : isHovered ? iconSet.hover : iconSet.on}
			alt="sound toggle"
			class="icon"
		/>
	</div>
</div>

<style lang="scss">
.col {
	width: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.icon-wrap {
	width: fit-content;
	display: flex;
	justify-content: center;
	cursor: pointer;
	transition: transform 0.2s ease;
	transform-origin: center;
}

.icon-wrap:hover {
	transform: scale(1.03);
}

.icon {
	display: block;
	width: clamp(120px, 40vw, 220px);
	height: auto;
}


</style>
