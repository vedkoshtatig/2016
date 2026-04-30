<script lang="ts">
	import { stateModal } from 'state-shared';

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

	let isHovered = $state(false);
	let isPressed = $state(false);

	const openAutoSpin = () => {
		if (disabled) return;
		stateModal.modal = { name: 'autoSpin' };
	};

	const getIcon = () => {
		if (disabled) return iconSet.disabled;
		if (isPressed) return iconSet.down;
		if (isHovered) return iconSet.hover;
		return iconSet.normal;
	};
</script>

<div class="col">
	<div
		class="icon-wrap"
		class:disabled={disabled}
		on:mouseenter={() => (isHovered = true)}
		on:mouseleave={() => {
			isHovered = false;
			isPressed = false;
		}}
		on:mousedown={() => (isPressed = true)}
		on:mouseup={() => (isPressed = false)}
		on:click={openAutoSpin}
	>
		<img src={getIcon()} alt="autoplay" class="icon" />
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
	width: clamp(120px, 40vw, 220px);
	height: auto;
	pointer-events: none;
}
</style>