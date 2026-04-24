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
				src={
					value === 0
						? iconSet.off
						: isHovered
						? iconSet.hover
						: iconSet.on
				}
				alt="sound toggle"
				class="icon"
			/>
		</div>

		
	
</div>

<style lang="scss">
.col {
display: inline-flex;  
	flex-direction: column;
	align-items: center;
}
.icon-wrap {
	cursor: pointer;
	transition: transform 0.2s ease;
}

.icon-wrap:hover {
	transform: scale(1.1);
}

.icon {
	width: 200px;
	//height: 150px;
	
}


</style>