<script lang="ts">
	import { stateModal } from 'state-shared';
	import BaseIcon from './BaseIcon.svelte';

	type IconSet = {
		normal: string;
		hover: string;
		down: string;
		disabled: string;
	};

	type Props = {
		iconSet: IconSet;
		disabled?: boolean;
	};

	let { iconSet, disabled = false }: Props = $props();

	const openAutoSpin = () => {
		if (disabled) return;
		stateModal.modal = { name: 'autoSpin' };
	};
</script>

<div class="col">
	<div
		class="icon-wrap"
		class:disabled={disabled}
		on:click={openAutoSpin}
	>
		<BaseIcon
			width="100%"
			height="100%"
			normal={disabled ? iconSet.disabled : iconSet.normal}
			hover={iconSet.hover}
			pressed={iconSet.down}
			disabled={disabled}
			className="icon"
			borderRadius="0"
			fit="contain"
		/>
	</div>
</div>

<style lang="scss">
.col {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.icon-wrap {
	display: flex;
	justify-content: center;
	cursor: pointer;
	transition: transform 0.15s ease, opacity 0.2s ease;
	width: var(--settings-menu-item-width, clamp(220px, 42vw, 320px));
	height: var(--settings-menu-item-height, clamp(76px, 12vw, 96px));
}

.icon-wrap:hover {
	transform: scale(1.05);
}

.icon-wrap:active {
	transform: scale(0.97);
}

.icon-wrap.disabled {
	cursor: not-allowed;
	opacity: 0.5;
	transform: none;
}

.icon {
	pointer-events: none;
}
</style>
