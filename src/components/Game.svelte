<script lang="ts">
	import { stateBet } from 'state-shared';
	import { EnablePixiExtension } from 'components-pixi';
	import { EnableHotkey } from 'components-shared';
	import { MainContainer } from 'components-layout';
	import { App, Text, REM } from 'pixi-svelte';
	import { stateModal } from 'state-shared';
	import { Container, Sprite, SpineProvider, SpineTrack } from 'pixi-svelte';
	import { UI, UiGameName } from 'components-ui-pixi';
	import { GameVersion, Modals } from 'components-ui-html';
	import MyModals from './Modals/MyModals.svelte';
	import { bookEventAmountToNormalisedAmount } from 'utils-shared/amount';
	import { getContext } from '../game/context';
	import EnableSound from './EnableSound.svelte';
	import EnableGameActor from './EnableGameActor.svelte';
	import ResumeBet from './ResumeBet.svelte';
	import Sound from './Sound.svelte';
	import Background from './Background.svelte';
	import LoadingScreen from './LoadingScreen.svelte';
	import BoardFrame from './BoardFrame.svelte';
	import Board from './Board.svelte';
	import Anticipations from './Anticipations.svelte';
	import ClusterWinAmounts from './ClusterWinAmounts.svelte';
	import TumbleBoard from './TumbleBoard.svelte';
	import TumbleWinAmount from './TumbleWinAmount.svelte';
	import GlobalMultiplier from './GlobalMultiplier.svelte';
	import MultiplierBoard from './MultiplierBoard.svelte';
	import MultiplierTotal from './MultiplierTotal.svelte';
	import Win from './Win.svelte';
	import FreeSpinIntro from './FreeSpinIntro.svelte';
	import FreeSpinCounter from './FreeSpinCounter.svelte';
	import FreeSpinOutro from './FreeSpinOutro.svelte';
	import BuyBoards from './BuyBoards.svelte';
	import Transition from './Transition.svelte';
	import I18nTest from './I18nTest.svelte';
	import LayoutDesktop from './LayoutDesktop.svelte';
	import UIDefault from './UIDefault.svelte';
	import BonusPopup from './BonusPopup.svelte';
	import { stateMeta } from 'state-shared';
	import { EXTENDED_BET_MODE_META } from '../game/betMode';
	import ModalAutoSpin from './ModalAutoSpin.svelte';
	import BuyBoardsPotrait from './BuyBoardsPotrait.svelte';

	stateMeta.betModeMeta = {
		...stateMeta.betModeMeta,
		...EXTENDED_BET_MODE_META,
	};

	const context = getContext();
	const showBuyBoards = $derived(context.stateGame.gameType === 'basegame');
	context.stateLayout.showLoadingScreen = true;

	type TrumpState = 'welcome' | 'idle' | 'angry' | 'celebrate' | 'pointing';

	let trumpState: TrumpState = $state('welcome');
	const spineMap = {
		welcome: 'trumpWelcome',
		idle: 'trumpIdle',
		angry: 'trumpAngry',
		celebrate: 'trumpCelebrate',
		pointing: 'trumpPointing',
	};

	const animationMap = {
		welcome: 'animation',
		idle: 'Simple-Ideal-Pose',
		angry: 'Shocking',
		celebrate: 'animation',
		pointing: 'animation',
	};
	const isLandscape = $derived(() => {
		const { width, height } = context.stateLayoutDerived.canvasSizes();
		return width > height;
	});
	const reelRootScale = $derived(() => (isLandscape() ? 1 : {x:1.6, y:2}));
	const reelRootX = $derived(() => (isLandscape() ? 0 : -440));
	const reelRootY = $derived(() => (isLandscape() ? 0 : -145));
	let spin = false;
	context.eventEmitter.subscribeOnMount({
		buyBonusConfirm: () => {
			stateModal.modal = { name: 'buyBonusConfirm' };
		},
		openPopUp: () => {
			trumpState = 'pointing';
			console.log(trumpState);
		},
		closePopUp: () => {
			trumpState = 'idle';
			console.log(trumpState);
		},
		bet: () => {
			trumpState = 'idle';
			spin = true;
		},
		playAnim: () => {
			console.log(bookEventAmountToNormalisedAmount(stateBet.winBookEventAmount),stateBet.betAmount)
			if ((bookEventAmountToNormalisedAmount(stateBet.winBookEventAmount))>= stateBet.betAmount) {
				console.log(stateBet.winBookEventAmount, stateBet.betAmount);
				trumpState = 'celebrate';
			} 
			else if ((bookEventAmountToNormalisedAmount(stateBet.winBookEventAmount)) < stateBet.betAmount ) {
				console.log(stateBet.winBookEventAmount, stateBet.betAmount);
				trumpState = 'angry';
			}
		},
	});
</script>

<App >
	<EnableSound />
	<EnableHotkey />
	<EnableGameActor />
	<EnablePixiExtension />

	<Background />

	{#if context.stateLayout.showLoadingScreen}
		<LoadingScreen onloaded={() => (context.stateLayout.showLoadingScreen = false)} />
	{:else}
		<ResumeBet />
		<!--
			The reason why <Sound /> is rendered after clicking the loading screen:
			"Autoplay with sound is allowed if: The user has interacted with the domain (click, tap, etc.)."
			Ref: https://developer.chrome.com/blog/autoplay
		-->
		<Sound />

		<MainContainer>
			{#if showBuyBoards}
				{#if isLandscape()}
					<BuyBoards />
				{:else}
					<BuyBoardsPotrait />
				{/if}
			{/if}
		</MainContainer>

		<MainContainer>
			<Board scale={reelRootScale()} x={reelRootX()} y={reelRootY()} />
			<Anticipations />
			<TumbleWinAmount />
			<GlobalMultiplier />
		</MainContainer>

		<MainContainer>
			<TumbleBoard scale={reelRootScale()} x={reelRootX()} y={reelRootY()} />
			<!-- <TumbleAnticipations /> -->
			<ClusterWinAmounts scale={reelRootScale()} x={reelRootX()} y={reelRootY()} />

			<BonusPopup />
		</MainContainer>

		<MainContainer>
			<MultiplierBoard
				scale={reelRootScale()}
				x={reelRootX()}
				y={reelRootY()}
				isLandscape={isLandscape()}
			/>
			<MultiplierTotal />
			{#if isLandscape()}
				<SpineProvider
					key={spineMap[trumpState]}
					x={context.stateGameDerived.boardLayout().x * 1.8}
					y={context.stateGameDerived.boardLayout().y * 1.25}
					scale={{ x: 0.17, y: 0.17 }}
					zIndex={20}
				>
					<SpineTrack
						trackIndex={0}
						animationName={animationMap[trumpState]}
						loop
						listener={{
							complete: () => {
								if (trumpState != 'idle') {
									trumpState = 'idle';
								}
							},
						}}
						timeScale={1}
					/>
				</SpineProvider>
			{/if}
		</MainContainer>

		<UIDefault>
			{#snippet gameName()}
				<UiGameName name="SCATTER GAME" />
			{/snippet}
			{#snippet logo()}
				<!-- <Text
					anchor={{ x: 1, y: 0 }}
					text="ADD YOUR LOGO"
					style={{
						fontFamily: 'Neuton',
						fontSize: REM * 1.5,
						fontWeight: '600',
						lineHeight: REM * 2,
						fill: 0xffffff,
					}}
				/> -->
			{/snippet}
		</UIDefault>

		<Win />
		<FreeSpinIntro />
		{#if ['desktop', 'landscape', 'portrait', 'tablet'].includes(context.stateLayoutDerived.layoutType())}
			<FreeSpinCounter />
		{/if}
		<FreeSpinOutro />
		<Transition />

		<I18nTest />
	{/if}
</App>

<MyModals>
	{#snippet version()}
		<GameVersion version="0.0.0" />
	{/snippet}
</MyModals>
