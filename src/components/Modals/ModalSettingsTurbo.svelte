<script lang="ts">
	import { stateBet, stateBetDerived, stateConfig } from 'state-shared';

	type IconSet = {
		normal: string;    // turbo OFF
		hover: string;
		down: string;
		active: string;    // turbo ON
		disabled: string;
	};

	type Props = {
		iconSet: IconSet;
	};

	let { iconSet }: Props = $props();

	let isHovered = $state(false);
	let isPressed = $state(false);

	const isDisabled = $derived(stateConfig.jurisdiction.disabledTurbo);
	const isActive = $derived(stateBet.isTurbo);

	const toggleTurbo = () => {
		if (isDisabled) return;
		stateBetDerived.updateIsTurbo(!stateBet.isTurbo, { persistent: true });
	};

	const getIcon = () => {
		if (isDisabled) return iconSet.disabled;
		if (isPressed) return iconSet.down;
		if (isHovered) return iconSet.hover;
		if (isActive) return iconSet.active;
		return iconSet.normal;
	};
</script>

<div class="col">
	<div
		class="icon-wrap"
		class:disabled={isDisabled}
		on:mouseenter={() => (isHovered = true)}
		on:mouseleave={() => {
			isHovered = false;
			isPressed = false;
		}}
		on:mousedown={() => (isPressed = true)}
		on:mouseup={() => (isPressed = false)}
		on:click={toggleTurbo}
	>
		<img src={getIcon()} alt="turbo mode" class="icon" />
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