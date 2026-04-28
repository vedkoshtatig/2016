<script lang="ts">
	import { zIndex } from 'constants-shared/zIndex';
	import Popup from './Popup.svelte';
	import { stateBet, stateBetDerived, stateConfig, stateModal, stateSound } from 'state-shared';
	import { getContextLayout } from 'utils-layout';
	import ModalSettingsSound from './ModalSettingsSound.svelte';
	import { i18nDerived } from '../../i18n/i18nDerived';

	import { stateGame } from '../../game/stateGame.svelte';
	import { DESKTOP_BACKGROUND_WIDTH_LIST, DESKTOP_BASE_SIZE, UI_BASE_SIZE } from '../../game/constants';

	const { stateLayoutDerived } = getContextLayout();

	const isMobileMenu = $derived(['portrait', 'tablet'].includes(stateLayoutDerived.layoutType()));
	const isDesktopMenu = $derived(stateLayoutDerived.layoutType() === 'desktop');

	const menuAnchor = $derived.by(() => {
		if (!isDesktopMenu) return null;

		const main = stateLayoutDerived.mainLayoutStandard();
		const canvas = stateLayoutDerived.canvasSizes();

		const baseWidth = DESKTOP_BACKGROUND_WIDTH_LIST.reduce((sum, width) => sum + width, 0);
		const pivotX = baseWidth * 0.5;

		const menuLocalX = -10 + DESKTOP_BASE_SIZE * 2.3;
		const menuLocalY = -20 + DESKTOP_BASE_SIZE * 0.25;

		const menuMainX = main.width * 0.5 - pivotX + menuLocalX;
		const menuMainY = main.height - DESKTOP_BASE_SIZE + menuLocalY;

		const menuButtonHalfHeight = UI_BASE_SIZE * 0.4 * 0.5;

		const anchorMainX = menuMainX;
		const anchorMainY = menuMainY - menuButtonHalfHeight;

		const anchorX = canvas.width * 0.5 + (anchorMainX - main.width * 0.5) * main.scale;
		const anchorY = canvas.height * 0.5 + (anchorMainY - main.height * 0.5) * main.scale;

		return { x: anchorX, y: anchorY };
	});

	const quickEnabled = $derived.by(() => {
		const firstReel = stateGame.board[0];
		return firstReel?.reelState?.spinType === 'fast';
	});

	const toggleQuick = () => {
		const next = quickEnabled ? 'default' : 'fast';
		for (const reel of stateGame.board) {
			reel.reelState.spinType = next;
		}
	};

	const toggleTurbo = () => {
		if (stateConfig.jurisdiction.disabledTurbo) return;
		stateBetDerived.updateIsTurbo(!stateBet.isTurbo, { persistent: true });
	};

	const toggleSounds = () => {
		stateSound.volumeValueSoundEffect = stateSound.volumeValueSoundEffect === 0 ? 100 : 0;
	};

	const toggleMusic = () => {
		stateSound.volumeValueMusic = stateSound.volumeValueMusic === 0 ? 100 : 0;
	};
</script>

{#if stateModal.modal?.name === 'settings'}
	<Popup zIndex={zIndex.modal} onclose={() => (stateModal.modal = null)}>
		<div
			class="wrap"
			class:mobile-menu={isMobileMenu}
			class:desktop-anchor={isDesktopMenu}
			style={menuAnchor ? `--menu-anchor-x: ${menuAnchor.x}px; --menu-anchor-y: ${menuAnchor.y}px;` : undefined}
		>
			
			{#if isMobileMenu}
				<div class="menu-grid">
					<button
						class="tile"
						onclick={() => (stateModal.modal = { name: 'gameRules' })}
					>
						<span class="tile-icon" aria-hidden="true">i</span>
						<span class="tile-label">INFO</span>
					</button>

					<button
						type="button"
						class="tile"
						class:disabled={stateConfig.jurisdiction.disabledAutoplay}
						disabled={stateConfig.jurisdiction.disabledAutoplay}
						onclick={() => (stateModal.modal = { name: 'autoSpin' })}
					>
						<span class="tile-icon" aria-hidden="true">↻</span>
						<span class="tile-label">AUTOPLAY</span>
					</button>

					<button type="button" class="tile" class:active={quickEnabled} onclick={toggleQuick}>
						<span class="tile-icon" aria-hidden="true">⚡</span>
						<span class="tile-label">QUICK</span>
					</button>

					<button
						type="button"
						class="tile"
						class:active={stateBet.isTurbo}
						class:disabled={stateConfig.jurisdiction.disabledTurbo}
						disabled={stateConfig.jurisdiction.disabledTurbo}
						onclick={toggleTurbo}
					>
						<span class="tile-icon" aria-hidden="true">⚡⚡</span>
						<span class="tile-label">TURBO</span>
					</button>

					<button
						type="button"
						class="tile"
						class:active={stateSound.volumeValueSoundEffect !== 0}
						onclick={toggleSounds}
					>
						<span class="tile-icon" aria-hidden="true">🔇</span>
						<span class="tile-label">SOUNDS</span>
					</button>

					<button
						type="button"
						class="tile"
						class:active={stateSound.volumeValueMusic !== 0}
						onclick={toggleMusic}
					>
						<span class="tile-icon" aria-hidden="true">♪</span>
						<span class="tile-label">MUSIC</span>
					</button>
				</div>
			{:else}
				<ModalSettingsSound
					bind:value={stateSound.volumeValueSoundEffect}
					iconSet={{
						on: 'assets/sprites/uiSlotsAssetsBespoke/soundnormal.png',
						off: 'assets/sprites/uiSlotsAssetsBespoke/sounddisable.png',
						hover: 'assets/sprites/uiSlotsAssetsBespoke/soundhover.png',
						active: 'assets/sprites/uiSlotsAssetsBespoke/soundnormal.png',
					}}
				>
					{i18nDerived.soundEffectVolume()}
				</ModalSettingsSound>
				<ModalSettingsSound
					bind:value={stateSound.volumeValueMusic}
					iconSet={{
						on: 'assets/sprites/uiSlotsAssetsBespoke/musicnormal.png',
						off: 'assets/sprites/uiSlotsAssetsBespoke/sounddisable.png',
						hover: 'assets/sprites/uiSlotsAssetsBespoke/musichover.png',
						active: 'assets/sprites/uiSlotsAssetsBespoke/musicnormal.png',
					}}
				>
					{i18nDerived.musicVolume()}
				</ModalSettingsSound>
			{/if}
	</Popup>
{/if}

<style lang="scss">
	.wrap {
		position: relative;
		z-index: 200;
		box-sizing: border-box;

		background-color: rgba(0, 0, 0, 0.8);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);

		display: flex;
		flex-direction: column;
		align-items: center;
		gap: clamp(0.3rem, 1vw, 0.5rem);

		width: fit-content;
		padding: clamp(0.5rem, 1.5vw, 1rem) clamp(1rem, 3vw, 2rem);
		border-radius: clamp(0.5rem, 1.5vw, 0.9rem);

		max-height: min(70vh, 560px);
		overflow: auto;
	}

	.wrap.desktop-anchor {
		position: fixed;
		left: var(--menu-anchor-x);
		top: var(--menu-anchor-y);
		transform: translate(-50%, calc(-100% - 10px));
	}

	.wrap.mobile-menu {
		background-color: transparent;
		backdrop-filter: none;
		-webkit-backdrop-filter: none;
		padding: 0;
		border-radius: 0;
		max-height: none;
		overflow: visible;
	}

	.menu-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: clamp(0.55rem, 2.2vw, 0.95rem);
		width: clamp(280px, 84vw, 600px);
	}

	.wrap.mobile-menu .menu-grid {
		transform: translateY(clamp(40px, 8vh, 140px)) scale(clamp(0.72, 0.82, 0.9));
		transform-origin: center;
	}

	.tile {
		appearance: none;
		border: 0;
		padding: 0;
		background: rgba(255, 255, 255, 0.06);
		border-radius: clamp(0.85rem, 4vw, 1.25rem);
		min-height: clamp(78px, 16vw, 116px);
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		color: rgba(255, 255, 255, 0.95);
		font-family: 'Inter', sans-serif;
		font-weight: 700;
		letter-spacing: 0.08em;
		cursor: pointer;
		transition: transform 0.15s ease, background 0.15s ease, box-shadow 0.15s ease;
	}

	.wrap.mobile-menu .tile {
		background-color: transparent;
		background-image: url('/assets/sprites/uiSlotsAssetsBespoke/MenuBg.png');
		background-repeat: no-repeat;
		background-position: center;
		background-size: 100% 100%;
		border-radius: 0;
		color: rgba(255, 255, 255, 0.98);
		text-shadow: 0 2px 8px rgba(0, 0, 0, 0.75);
	}

	.tile:hover {
		transform: translateY(-1px);
		background: rgba(255, 255, 255, 0.09);
	}

	.wrap.mobile-menu .tile:hover {
		background-color: transparent;
	}

	.tile:active {
		transform: translateY(0);
	}

	.tile.active {
		background: rgba(255, 255, 255, 0.11);
		box-shadow: 0 0 0 1px rgba(255, 213, 74, 0.55) inset;
	}

	.wrap.mobile-menu .tile.active {
		box-shadow: none;
	}

	.tile.disabled,
	.tile:disabled {
		opacity: 0.45;
		cursor: not-allowed;
		transform: none;
		box-shadow: none;
	}

	.tile-icon {
		width: 2.1rem;
		height: 2.1rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-size: 1.45rem;
		line-height: 1;
	}

	.tile-label {
		font-size: clamp(0.9rem, 3.3vw, 1.05rem);
	}
</style>
