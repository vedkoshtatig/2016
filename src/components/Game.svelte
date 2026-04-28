<script lang="ts">
	import { onMount } from 'svelte';

	import { EnablePixiExtension } from 'components-pixi';
	import { EnableHotkey } from 'components-shared';
	import { MainContainer } from 'components-layout';
	import { App, Text, REM } from 'pixi-svelte';
	import { stateModal } from 'state-shared';
	import { Container, Sprite, SpineProvider, SpineTrack } from 'pixi-svelte';
	import { UI, UiGameName } from 'components-ui-pixi';
	import { GameVersion, Modals } from 'components-ui-html';
	import MyModals from './Modals/MyModals.svelte';

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

	stateMeta.betModeMeta = {
		...stateMeta.betModeMeta,
		...EXTENDED_BET_MODE_META,
	};

	const context = getContext();
	const showBuyBoards = $derived(context.stateGame.gameType === 'basegame');
	onMount(() => (context.stateLayout.showLoadingScreen = true));

	context.eventEmitter.subscribeOnMount({
		buyBonusConfirm: () => {
			stateModal.modal = { name: 'buyBonusConfirm' };
		},
	});
</script>

<App>
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
			<BoardFrame />
			{#if showBuyBoards}
				<BuyBoards />
			{/if}
		</MainContainer>
		<TumbleWinAmount />

		<MainContainer>
			<Board />
			<Anticipations />

			<GlobalMultiplier />
			
		</MainContainer>

		<MainContainer>
			<TumbleBoard />
			<!-- <TumbleAnticipations /> -->
			<ClusterWinAmounts />
			<BonusPopup />
		</MainContainer>

		<MainContainer>
			<MultiplierBoard />
			<MultiplierTotal />
			<SpineProvider
				key="trumpLogo"
				x={context.stateGameDerived.boardLayout().x * 1.75}
				y={context.stateGameDerived.boardLayout().y * 1.3}
				scale={{ x: 0.3, y: 0.3 }}
				zIndex={20}
			>
				<SpineTrack trackIndex={0} animationName={'animation'} loop timeScale={1} />
			</SpineProvider>
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
		{#if ['desktop', 'landscape','portrait','tablet'].includes(context.stateLayoutDerived.layoutType())}
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
