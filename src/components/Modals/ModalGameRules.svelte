<script lang="ts">
	import { assets } from '$app/paths';
	import Popup from './Popup.svelte';
	import { zIndex } from 'constants-shared/zIndex';
	import { stateModal } from 'state-shared';
	import { getContextLayout } from 'utils-layout';
	import config from '../../game/config';

	const { stateLayoutDerived } = getContextLayout();
	const isMobileMenu = $derived(['portrait', 'tablet'].includes(stateLayoutDerived.layoutType()));
	const symbolSpritesheetUrl = `${assets}/assets/sprites/symbolsStatic/spritesheet.png`;

	const close = () => (stateModal.modal = null);

	type SpriteKey = keyof typeof SPRITE_FRAMES;

	const SPRITE_FRAMES = {
		h1: { x: 0, y: 0 },
		h2: { x: 150, y: 0 },
		h3: { x: 300, y: 0 },
		h4: { x: 450, y: 0 },
		l1: { x: 0, y: 150 },
		l2: { x: 150, y: 150 },
		l3: { x: 300, y: 150 },
		l4: { x: 450, y: 150 },
		l5: { x: 0, y: 300 },
		l6: { x: 150, y: 300 },
		w: { x: 300, y: 300 },
		s: { x: 450, y: 300 },
	} as const;

	const formatPay = (value: number) => {
		const str = value.toFixed(2);
		return str.replace(/\.?0+$/, '');
	};

	const getPaytableValue = (symbolName: string, count: number) => {
		const paytable = (config as any).symbols?.[symbolName]?.paytable as
			| Array<Record<string, number>>
			| undefined;
		if (!paytable) return null;
		for (const entry of paytable) {
			const [k, v] = Object.entries(entry)[0] ?? [];
			if (!k) continue;
			if (Number(k) === count) return v;
		}
		return null;
	};

	const getPaytableMaxFrom = (symbolName: string, minCount: number) => {
		const paytable = (config as any).symbols?.[symbolName]?.paytable as
			| Array<Record<string, number>>
			| undefined;
		if (!paytable) return null;
		let max: number | null = null;
		for (const entry of paytable) {
			const [k, v] = Object.entries(entry)[0] ?? [];
			if (!k) continue;
			const count = Number(k);
			if (!Number.isFinite(count)) continue;
			if (count < minCount) continue;
			max = max === null ? v : Math.max(max, v);
		}
		return max;
	};

	const getPayLines = (symbolName: string) => {
		const v8to9 = getPaytableValue(symbolName, 9) ?? getPaytableValue(symbolName, 8);
		const v10to11 = getPaytableValue(symbolName, 11) ?? getPaytableValue(symbolName, 10);
		const v12Plus = getPaytableMaxFrom(symbolName, 12);

		return [
			{ label: '12+', value: v12Plus },
			{ label: '10 - 11', value: v10to11 },
			{ label: '8 - 9', value: v8to9 },
		];
	};

	const paytableSymbols: Array<{ symbolName: string; spriteKey: SpriteKey }> = [
		{ symbolName: 'H4', spriteKey: 'h4' },
		{ symbolName: 'H3', spriteKey: 'h3' },
		{ symbolName: 'H2', spriteKey: 'h2' },
		{ symbolName: 'H1', spriteKey: 'h1' },
		{ symbolName: 'L6', spriteKey: 'l6' },
		{ symbolName: 'L5', spriteKey: 'l5' },
		{ symbolName: 'L4', spriteKey: 'l4' },
		{ symbolName: 'L3', spriteKey: 'l3' },
		{ symbolName: 'L2', spriteKey: 'l2' },
		{ symbolName: 'L1', spriteKey: 'l1' },
		{ symbolName: 'W', spriteKey: 'w' },
	];

	const pages = [
		{ title: 'GAME RULES', key: 'paytable' as const },
		{ title: 'TUMBLE FEATURE', key: 'feature' as const },
		{ title: 'MAX WIN', key: 'bet' as const },
		{ title: 'GAME RULES', key: 'rules' as const },
		{ title: 'HOW TO PLAY', key: 'how' as const },
		{ title: 'SETTINGS MENU', key: 'settings' as const },
		{ title: 'AUTO PLAY', key: 'autoplay' as const },
	];

	type PageKey = (typeof pages)[number]['key'];

	let pageIndex = $state(0);

	const activePage = $derived(pages[pageIndex] as { title: string; key: PageKey });

	const prevPage = () => {
		pageIndex = Math.max(0, pageIndex - 1);
	};

	const nextPage = () => {
		pageIndex = Math.min(pages.length - 1, pageIndex + 1);
	};
</script>

{#if stateModal.modal?.name === 'gameRules'}
	<Popup zIndex={zIndex.modal} onclose={close}>
		<div
			class="popup-bg"
			class:mobile-menu={isMobileMenu}
			style={`--symbol-spritesheet-url: url('${symbolSpritesheetUrl}');`}
		>
			<!-- HEADER -->
			<div class="header">
				<h2>{activePage.title}</h2>
				<button class="close-btn" onclick={close}>×</button>
			</div>

			<!-- CONTENT -->
			<div class="content">
				{#if activePage.key === 'paytable'}
					<div class="lead">
						<span>Symbols pay anywhere on the screen.</span>
						<span
							>The total number of the same symbol on the screen at the end of a spin determines the value of the win.</span
						>
					</div>

					<div class="paytable-grid">
						{#each paytableSymbols as sym (sym.symbolName)}
							<div class="paytable-item">
								<div
									class="symbol-icon"
									style={`--sx:${SPRITE_FRAMES[sym.spriteKey].x}px;--sy:${SPRITE_FRAMES[sym.spriteKey].y}px;`}
									aria-label={sym.symbolName}
								/>
								<div class="pay-lines">
									{#each getPayLines(sym.symbolName) as line (line.label)}
										<div class="pay-line">
											<span class="pay-label">{line.label}</span>
											<span class="pay-value"
												>{line.value === null ? '-' : `${formatPay(line.value)}`}</span
											>
										</div>
									{/each}
								</div>
							</div>
						{/each}
					</div>

					<div class="scatter">
						<div class="scatter-left">
							<div
								class="symbol-icon scatter-icon"
								style={`--sx:${SPRITE_FRAMES.s.x}px;--sy:${SPRITE_FRAMES.s.y}px;`}
								aria-label="Scatter"
							/>
							<div class="scatter-lines">
								<div class="scatter-line"><span class="pay-label">6</span><span class="pay-value">12 FS</span></div>
								<div class="scatter-line"><span class="pay-label">5</span><span class="pay-value">10 FS</span></div>
								<div class="scatter-line"><span class="pay-label">4</span><span class="pay-value">8 FS</span></div>
							</div>
						</div>
						<div class="scatter-right">
							<div class="scatter-title">This is the SCATTER symbol.</div>
							<div class="scatter-text">
								SCATTER symbol is present on all reels. Landing 4 or more SCATTER symbols triggers Free Spins.
							</div>
						</div>
					</div>
				{:else if activePage.key === 'feature'}
					<div class="rules-section">
						<div class="rules-title">The TUMBLE FEATURE means that after every spin, winning combinations are paid and all winning symbols disappear. The remaining symbols fall to the bottom of the screen and the empty positions are replaced with new symbols coming from above.</div>
						<div class="rules-text">
							Tumbling will continue until no more winning combinations appear as a result of a tumble. There's no limit to the number of possible tumbles.
						</div>
						<div class="rules-text">
							All wins are added to the player's balance after all of the tumbles resulted from a base spin have been played.
						</div>
					</div>

					<div class="rules-section">
						<div class="rules-heading">FREE SPINS RULES</div>
						<div class="rules-text">
							Hit 4 or more SCATTER symbols to trigger the FREE SPINS feature and win 10 free spins.
						</div>
						<div class="rules-text">
							Whenever 3 or more SCATTER symbols hit during the FREE SPINS ROUND, 5 additional free spins are awarded.
						</div>
					</div>

					<div class="rules-section rules-mult">
						<div class="mult-wrap">
							<div class="mult-icon" aria-label="Multiplier">1000x</div>
							<div class="mult-text">
								<div class="rules-text">
									This is the MULTIPLIER symbol. It is present on the reels only during the FREE SPINS feature and it stays on the screen until the end of the tumbling sequence.
								</div>
							</div>
						</div>
						<div class="rules-text">
							Whenever a MULTIPLIER symbol hits, it takes a random multiplier value of 2x, 3x, 4x, 5x, 6x, 8x, 10x, 12x, 15x, 20x, 25x, 50x, 100x or 1000x.
						</div>
						<div class="rules-text">
							When the tumbling sequence ends, the values of all MULTIPLIER symbols on the screen are added together and the total win of the sequence is multiplied by the final value.
						</div>
						<div class="rules-text">Special reels are in play during the feature.</div>
					</div>
				{:else if activePage.key === 'bet'}
					<div class="rules-section">
						<div class="rules-text">
							The maximum win amount is limited to 25,000x bet in both base game and free spins. If the total win of a FREE SPINS round reaches 25,000x bet the round immediately ends, win is awarded and all remaining free spins are forfeited.
						</div>
					</div>

					<div class="rules-section">
						<div class="rules-heading">ANTE BET</div>
						<div class="rules-text">
							The player has the option to select the bet multiplier. Depending on the selected bet, the game behaves differently.
						</div>
						<div class="rules-text">The possible values are:</div>
						<div class="rules-text">
							Bet multiplier 25x - the chance to win the free spins feature naturally is double.
						</div>
						<div class="rules-text">The BUY FREE SPINS feature is disabled.</div>
						<div class="rules-text">Bet multiplier 20x - Normal play.</div>
					</div>

					<div class="rules-section rules-mult">
						<div class="rules-heading">BUY FREE SPINS</div>
						<div class="rules-text">
							The FREE SPINS round can be instantly triggered from the base game by buying it.
						</div>
						<div class="rules-text">There are two options to buy the FREE SPINS:</div>
						<div class="rules-text">
							Pay 100x total bet to trigger the FREE SPINS feature with 4 or more SCATTER symbols guaranteed to hit on the triggering spin.
						</div>
						<div class="rules-text">
							Pay 500x total bet to trigger the SUPER FREE SPINS feature with 4 or more SCATTER symbols guaranteed to hit on the triggering spin. In this mode all multiplier symbols carry a multiplier of minimum 20x.
						</div>
					</div>
				{:else if activePage.key === 'rules'}
					<div class="rules-page">
						<div class="volatility">
							<div class="volatility-label">VOLATILITY</div>
							<div class="volatility-bolts">⚡⚡⚡⚡⚡</div>
						</div>

						<div class="rules-text">
							High volatility games pay out less often on average but the chance to hit big wins in a short time span is higher.
						</div>

						<div class="rules-spacer" />

						<div class="rules-text">Symbols pay anywhere.</div>
						<div class="rules-text">All wins are multiplied by base bet.</div>
						<div class="rules-text">All values are expressed as actual wins in coins.</div>
						<div class="rules-text">When winning with multiple symbols, all wins are added to the total win.</div>
						<div class="rules-text">Free spins win is awarded to the player after the round completes.</div>
						<div class="rules-text">Free spins total win in the history contains the whole win of the cycle.</div>

						<div class="rules-spacer" />

						<div class="rules-text">The theoretical RTP of this game is 96.53%</div>
						<div class="rules-text">The RTP of the game when using the "ANTE BET" is 96.50%</div>
						<div class="rules-text">The RTP of the game when using "BUY FREE SPINS" is 96.52%</div>
						<div class="rules-text">The RTP of the game when using "BUY SUPER FREE SPINS" is 96.55%</div>

						<div class="rules-spacer" />

						<div class="rules-text">SPACE and ENTER buttons on the keyboard can be used to start and stop the spin.</div>
						<div class="rules-text">Malfunction voids all pays and plays.</div>

						<div class="rules-spacer" />

						<div class="rules-text rules-bets">MINIMUM BET: $0.20</div>
						<div class="rules-text rules-bets">MAXIMUM BET: $300.00</div>
					</div>
				{:else if activePage.key === 'how'}
					<div class="rules-page">
						<div class="rules-text">
							Click the <span class="ui-pill">+</span> or <span class="ui-pill">−</span> buttons to change the bet value and open the bet menu.
						</div>
						<div class="rules-text">Select the bet you want to use in the game.</div>
						<div class="rules-text">Press the SPIN button to play.</div>

						<div class="rules-spacer" />

						<div class="rules-heading">MAIN GAME INTERFACE</div>

						<div class="ui-row">
							<span class="ui-icon">☰</span>
							<span class="rules-text">opens the SETTINGS menu that contains settings which affect the way the game is being played.</span>
						</div>

						<div class="ui-row">
							<span class="ui-icon">»»</span>
							<span class="rules-text">cycles through spin speed settings, normal speed, quick spin and turbo spin.</span>
						</div>

						<div class="ui-row">
							<span class="ui-icon">🔊</span>
							<span class="rules-text">toggles sound and music on and off</span>
						</div>

						<div class="ui-row">
							<span class="ui-icon">i</span>
							<span class="rules-text">opens the Information page</span>
						</div>

						<div class="rules-text">
							CREDIT and BET labels show the current balance and current total bet. Click on the labels to switch between coins view and cash view.
						</div>

						<div class="rules-text">
							<span class="ui-pill">+</span> and <span class="ui-pill">−</span> change up or down the current bet and open the bet menu, where you can change the bet denominations.
						</div>

						<div class="ui-row">
							<span class="ui-icon">⟳</span>
							<span class="rules-text">starts the game</span>
						</div>

						<div class="ui-row">
							<span class="ui-chip">AUTOPLAY</span>
							<span class="rules-text">opens the automatic play menu.</span>
						</div>

						<div class="rules-text">
							Click the <span class="ui-chip inline">AUTOPLAY</span> button again to stop it.
						</div>
					</div>
				{:else if activePage.key === 'settings'}
					<div class="rules-page">
						<div class="rules-text">
							<span class="rules-strong">INTRO SCREEN</span> – toggles the introductory screen on and off
						</div>
						<div class="rules-text">
							<span class="rules-strong">AMBIENT</span> – toggles the ambient sound and music in the game on and off
						</div>
						<div class="rules-text">
							<span class="rules-strong">SOUND FX</span> – toggles the game's sound effects on and off
						</div>
						<div class="rules-text">
							<span class="rules-strong">GAME HISTORY</span> – opens the game history page
						</div>

						<div class="rules-spacer" />

						<div class="rules-heading">INFORMATION SCREEN</div>
						<div class="ui-row ui-row-center">
							<span class="ui-icon green">◀</span>
							<span class="rules-text">and</span>
							<span class="ui-icon green">▶</span>
							<span class="rules-text">scroll between information pages</span>
						</div>
						<div class="ui-row ui-row-center">
							<span class="ui-icon green">✕</span>
							<span class="rules-text">closes the information screen</span>
						</div>

						<div class="rules-spacer" />

						<div class="rules-heading">BET MENU</div>
						<div class="rules-text">
							The bet menu shows the bet multiplier available in the game, and the current total bet in both coins and cash.
						</div>
						<div class="rules-text">
							Use the <span class="ui-pill">+</span> and <span class="ui-pill">−</span> buttons in the BET and COIN VALUE fields to change the values.
						</div>

						<div class="rules-spacer" />

						<div class="rules-text">
							The maximum win amount is limited to 25000x bet. If the total win of a round reaches 25000x bet the round immediately ends, win is awarded up to the cap and all remaining features are forfeited.
						</div>
					</div>
				{:else}
					<div class="rules-page">
						<div class="rules-text">
							Click on the buttons showing the number of possible auto-spins to start Autoplay
						</div>
						<div class="rules-text">
							<span class="rules-strong">SKIP SCREENS</span> option auto-skips the feature introduction and end screens after a short period of time
						</div>
					</div>
				{/if}
			</div>

			<div class="footer">
				<div class="nav">
					<button class="nav-btn" onclick={prevPage} disabled={pageIndex === 0}>‹</button>
					<button class="nav-btn" onclick={nextPage} disabled={pageIndex === pages.length - 1}>›</button>
				</div>
				<div class="page-indicator">Page {pageIndex + 1}/{pages.length}</div>
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
		height: min(60vh, 760px);

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

	.lead {
		display: flex;
		flex-direction: column;
		gap: 2px;
		color: #ffffff;
		font-size: 0.9rem;
		font-weight: 600;
		margin-bottom: 12px;
		text-align: center;
	}

	.paytable-grid {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 18px 14px;
		align-items: start;
		margin-bottom: 14px;
		max-width: 560px;
		margin-left: auto;
		margin-right: auto;
	}

	.paytable-item {
		display: grid;
		grid-template-rows: auto 1fr;
		justify-items: center;
		gap: 6px;
	}

	.symbol-icon {
		--iconSize: 92px;
		--scale: calc(var(--iconSize) / 150px);
		width: var(--iconSize);
		height: var(--iconSize);
		background-image: var(--symbol-spritesheet-url);
		background-repeat: no-repeat;
		background-size: calc(600px * var(--scale)) calc(450px * var(--scale));
		background-position: calc(var(--sx) * var(--scale) * -1) calc(var(--sy) * var(--scale) * -1);
		filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.6));
	}

	.pay-lines {
		width: 100%;
		max-width: 120px;
		display: grid;
		gap: 2px;
		font-weight: 700;
		margin-left: auto;
		margin-right: auto;
	}

	.pay-line {
		display: grid;
		grid-template-columns: 62px 1fr;
		column-gap: 10px;
		align-items: baseline;
		line-height: 1.1;
	}

	.pay-label {
		color: #ffffff;
		font-size: 0.85rem;
		white-space: nowrap;
		text-align: left;
	}

	.pay-value {
		color: #ffffff;
		font-size: 0.85rem;
		white-space: nowrap;
		text-align: right;
	}

	.scatter {
		display: grid;
		grid-template-columns: 1.2fr 1.8fr;
		gap: 12px;
		align-items: center;
		padding-top: 10px;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
	}

	.scatter-left {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 10px;
		align-items: center;
	}

	.scatter-icon {
		--iconSize: 76px;
	}

	.scatter-lines {
		display: grid;
		gap: 2px;
		width: 100%;
		max-width: 110px;
	}

	.scatter-line {
		display: grid;
		grid-template-columns: 26px 1fr;
		column-gap: 10px;
		align-items: baseline;
		font-weight: 700;
	}

	.scatter-title {
		color: #ffffff;
		font-size: 0.95rem;
		font-weight: 800;
		margin-bottom: 4px;
	}

	.scatter-text {
		color: #ffffff;
		font-size: 0.85rem;
		font-weight: 600;
		line-height: 1.35;
	}

	.footer {
		margin-top: 12px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-shrink: 0;
	}

	.nav {
		display: flex;
		gap: 10px;
	}

	.nav-btn {
		width: 44px;
		height: 34px;
		border-radius: 10px;
		border: 1px solid rgba(255, 255, 255, 0.14);
		background: rgba(255, 255, 255, 0.08);
		color: #b7ff38;
		font-weight: 900;
		font-size: 1.4rem;
		cursor: pointer;
	}

	.nav-btn:disabled {
		opacity: 0.35;
		cursor: not-allowed;
	}

	.page-indicator {
		color: rgba(255, 255, 255, 0.75);
		font-size: 0.85rem;
		font-weight: 700;
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

	.section p {
		color: #ffffff;
		font-size: 0.9rem;
		line-height: 1.5;
		font-weight: 600;
	}

	.rules-section {
		display: grid;
		gap: 8px;
		text-align: center;
		margin-bottom: 14px;
	}

	.rules-heading {
		color: #ffffff;
		font-size: 1.1rem;
		font-weight: 900;
		letter-spacing: 1px;
		margin-top: 6px;
	}

	.rules-title {
		color: #ffffff;
		font-size: 0.95rem;
		font-weight: 800;
		line-height: 1.35;
	}

	.rules-text {
		color: #ffffff;
		font-size: 0.88rem;
		font-weight: 700;
		line-height: 1.35;
	}

	.rules-page {
		display: grid;
		gap: 8px;
		text-align: center;
	}

	.rules-spacer {
		height: 8px;
	}

	.volatility {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		padding: 6px 14px;
		border-radius: 999px;
		border: 1px solid rgba(255, 255, 255, 0.14);
		background: rgba(0, 0, 0, 0.25);
		margin: 0 auto 2px;
	}

	.volatility-label {
		color: #ffffff;
		font-size: 0.85rem;
		font-weight: 900;
		letter-spacing: 1px;
	}

	.volatility-bolts {
		color: #ffd54a;
		font-size: 0.9rem;
		letter-spacing: 2px;
	}

	.rules-bets {
		font-weight: 900;
	}

	.ui-row {
		display: grid;
		grid-template-columns: 40px 1fr;
		gap: 10px;
		align-items: center;
		text-align: left;
	}

	.ui-row-center {
		grid-template-columns: auto auto auto auto 1fr;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.ui-icon {
		width: 34px;
		height: 34px;
		border-radius: 50%;
		border: 1px solid rgba(255, 255, 255, 0.2);
		background: rgba(255, 255, 255, 0.06);
		display: grid;
		place-items: center;
		color: #ffffff;
		font-weight: 900;
	}

	.ui-icon.green {
		color: #b7ff38;
		border-color: rgba(183, 255, 56, 0.35);
		background: rgba(183, 255, 56, 0.08);
	}

	.ui-pill {
		display: inline-grid;
		place-items: center;
		width: 22px;
		height: 22px;
		border-radius: 50%;
		border: 1px solid rgba(255, 255, 255, 0.25);
		background: rgba(255, 255, 255, 0.08);
		font-weight: 900;
	}

	.ui-chip {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 6px 12px;
		border-radius: 999px;
		border: 1px solid rgba(255, 255, 255, 0.2);
		background: rgba(0, 0, 0, 0.25);
		color: #ffffff;
		font-weight: 900;
		font-size: 0.85rem;
		letter-spacing: 0.5px;
	}

	.ui-chip.inline {
		padding: 2px 10px;
		font-size: 0.8rem;
	}

	.rules-strong {
		font-weight: 900;
	}

	.rules-mult {
		margin-bottom: 0;
	}

	.mult-wrap {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 10px;
		align-items: center;
		justify-content: center;
	}

	.mult-icon {
		width: 72px;
		height: 72px;
		border-radius: 50%;
		background: radial-gradient(circle at 30% 30%, #ffef7a 0%, #ff6ad5 40%, #4bf8ff 75%, #0c6cff 100%);
		display: grid;
		place-items: center;
		color: #ffffff;
		font-weight: 900;
		font-size: 1.05rem;
		text-shadow: 0 2px 10px rgba(0, 0, 0, 0.55);
	}

	@media (max-width: 768px) {
		.popup-bg {
			position: absolute;
			top: 10%;
			padding: 1rem;
			height: 68vh;
		}

		.header h2 {
			font-size: 1.4rem;
		}

		.section p {
			font-size: 0.85rem;
		}

		.paytable-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			max-width: 360px;
		}

		.symbol-icon {
			--iconSize: 74px;
		}

		.scatter {
			grid-template-columns: 1fr;
		}

		.mult-wrap {
			grid-template-columns: 1fr;
		}
	}
</style>
