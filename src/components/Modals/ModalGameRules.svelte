<script lang="ts">
	import type { Snippet } from 'svelte';

	import Popup from './Popup.svelte';
	import { zIndex } from 'constants-shared/zIndex';
	import { stateModal } from 'state-shared';
	import { getContextLayout } from 'utils-layout';

	type Props = {
		children: Snippet;
	};

	const props: Props = $props();

	const { stateLayoutDerived } = getContextLayout();
	const isMobileMenu = $derived(['portrait', 'tablet'].includes(stateLayoutDerived.layoutType()));

	const close = () => (stateModal.modal = null);
</script>

{#if stateModal.modal?.name === 'gameRules'}
	<Popup zIndex={zIndex.modal} onclose={close}>
		<div class="popup-bg" class:mobile-menu={isMobileMenu}>
			<!-- HEADER -->
			<div class="header">
				<h2>GAME INFO</h2>
				<button class="close-btn" onclick={close}>×</button>
			</div>

			<!-- CONTENT -->
			<div class="content">
				<div class="section">
					<h3>ABOUT THE GAME</h3>
					<p>
						This is a fast-paced cluster-style slot game inspired by candy-themed arcade
						gameplay. Wins are formed by landing matching symbols anywhere on the reels.
						Matching symbols disappear after every win, allowing new symbols to fall into
						place for additional combo wins within the same round.
					</p>
				</div>

				<div class="section">
					<h3>HOW TO PLAY</h3>
					<p>
						Press the SPIN button to start the game. Winning combinations are created when
						8 or more matching symbols land anywhere on the screen. Larger combinations
						award higher payouts based on the paytable.
					</p>
				</div>

				<div class="section">
					<h3>TUMBLE FEATURE</h3>
					<p>
						After every winning combination, the winning symbols explode and disappear.
						New symbols tumble down from above to fill the empty positions. Consecutive
						wins can continue until no new winning combinations are formed.
					</p>
				</div>

				<div class="section">
					<h3>MULTIPLIERS</h3>
					<p>
						Special multiplier symbols may appear during gameplay. Multipliers can
						increase total winnings by various amounts and are added together before
						being applied to the final tumble win.
					</p>
				</div>

				<div class="section">
					<h3>FREE SPINS</h3>
					<p>
						Landing 4 or more scatter symbols triggers the Free Spins feature. During
						Free Spins, additional multipliers can appear more frequently, giving players
						the chance to achieve bigger combo wins.
					</p>
				</div>

				<div class="section">
					<h3>PAYOUTS</h3>
					<p>
						Payout values depend on the symbol type and the number of matching symbols
						landed. Higher-value symbols award larger prizes. All winnings are multiplied
						by the current bet amount.
					</p>
				</div>

				<div class="section">
					<h3>AUTO PLAY</h3>
					<p>
						The Auto Play feature allows the game to spin automatically for a selected
						number of rounds. Auto Play may stop automatically if a bonus feature is
						triggered or a win exceeds a predefined amount.
					</p>
				</div>

				
			</div>
		</div>
	</Popup>
{/if}

<style>
	/* POPUP BOX */
	.popup-bg {
		background: rgba(15, 15, 20, 0.95);
		border-radius: 12px;
		padding: 1.5rem;

		width: min(600px, 70vw);
		height: min(55vh, 700px);

		display: flex;
		flex-direction: column;

		box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.popup-bg.mobile-menu {
		transform: translateY(clamp(40px, 8vh, 140px));
	}

	.header {
		position: relative;
		text-align: center;
		margin-bottom: 1rem;
		flex-shrink: 0;
	}

	.header h2 {
		color: white;
		font-size: 1.8rem;
		font-weight: 700;
		margin: 0;
	}

	.close-btn {
		position: absolute;
		right: 0;
		top: 0;

		width: 35px;
		height: 35px;

		border-radius: 50%;
		border: none;

		background: rgba(255, 255, 255, 0.1);
		color: white;
		font-size: 1.5rem;
		cursor: pointer;

		transition: background 0.2s ease;
	}

	.close-btn:hover {
		background: rgba(255, 255, 255, 0.2);
	}

	/* CONTENT AREA */
	.content {
		flex: 1;
		overflow-y: auto;
		padding-right: 10px;
	}

	/* SCROLLBAR */
	.content::-webkit-scrollbar {
		width: 6px;
	}

	.content::-webkit-scrollbar-thumb {
		background: #ffd54a;
		border-radius: 10px;
	}

	.content::-webkit-scrollbar-track {
		background: transparent;
	}

	/* SECTIONS */
	.section {
		margin-bottom: 1.5rem;
	}

	.section h3 {
		color: #ffd54a;
		font-size: 0.9rem;
		letter-spacing: 1px;
		margin-bottom: 0.5rem;
		font-weight: 700;
	}

	.section p {
		color: #ffffff;
		font-size: 0.9rem;
		line-height: 1.5;
		font-weight: 600;
	}

	@media (max-width: 768px) {
		.popup-bg {
			position: absolute;
			top:10%;
			padding: 1rem;
			height: 68vh;
		}

		.header h2 {
			font-size: 1.4rem;
		}

		.section p {
			font-size: 0.85rem;
		}
	}
</style>