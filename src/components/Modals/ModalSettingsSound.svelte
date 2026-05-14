<script lang="ts">

	import type { Snippet } from 'svelte';
	import BaseIcon from './BaseIcon.svelte';



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



	const toggle = () => {

		value = value === 0 ? 100 : 0;

	};

</script>



<div class="col">

	<div

		class="icon-wrap"

	>

		<BaseIcon
			width="100%"
			height="100%"
			normal={value === 0 ? iconSet.off : iconSet.on}
			hover={value === 0 ? undefined : iconSet.hover}
			className="icon"
			borderRadius="0"
			fit="contain"
			onclick={toggle}
		/>

	</div>

</div>



<style lang="scss">

.col {

	display: flex;

	flex-direction: column;

	align-items: center;

}

/* Desktop mode specific styling */
:global(.wrap:not(.mobile-menu)) .col {
	align-items: flex-end;
}

.icon-wrap {

	display: flex;

	justify-content: center;

	cursor: pointer;

	transition: transform 0.2s ease;

	transform-origin: center;
	width: var(--settings-menu-item-width, clamp(220px, 42vw, 320px));
	height: var(--settings-menu-item-height, clamp(76px, 12vw, 96px));

}

/* Desktop mode specific styling */
:global(.wrap:not(.mobile-menu)) .icon-wrap {
	width: 120px;
	height: auto;
	justify-content: flex-start;
}



.icon-wrap:hover {

	transform: scale(1.03);

}



.icon {

	display: block;

}

/* Desktop mode specific styling */
:global(.wrap:not(.mobile-menu)) .icon {
	width: clamp(80px, 30vw, 160px);
}

/* Mobile mode - keep original icon size */
:global(.wrap.mobile-menu) .icon {
	width: 100%;
	height: 100%;
}





</style>
