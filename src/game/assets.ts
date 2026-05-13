export default {
	loader: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/loader/loader.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/loader/loader.json', import.meta.url).href,
			scale: 2,
		},
		preload:true,
		 
	},

	introReel1: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/reelhouse/Intro-reel_logo.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/reelhouse/Intro-reel_logo.json', import.meta.url).href,
			scale: 2,
		},
		preload:true,
	},
	introReel2: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/reelhouse/Intro-reel_logo2.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/reelhouse/Intro-reel_logo2.json', import.meta.url)
				.href,
			scale: 2,
		},
		preload:true,
	},
	introReel3: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/reelhouse/Intro-reel_logo3.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/reelhouse/Intro-reel_logo3.json', import.meta.url)
				.href,
			scale: 2,
		},
		preload:true,
		
	},
	logo: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/logo/logo.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/logo/logo.json', import.meta.url).href,
			scale: 2,
		},
		 preload:true,
	},
	trumpLogo: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/logo/IdealPose.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/logo/IdealPose.json', import.meta.url).href,
			scale: 2,
		},
		 
	},
	trumpAngry: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/Trump/Angry&Shouting.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/Trump/Angry&Shouting.json', import.meta.url).href,
			scale: 2,
		},
		 
	},
	trumpCelebrate: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/Trump/Celebrate.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/Trump/Celebrate.json', import.meta.url).href,
			scale: 2,
		},
		 
	},
	trumpPointing: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/Trump/Pointing.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/Trump/Pointing.json', import.meta.url).href,
			scale: 2,
		},
		 
	},
	trumpIdle: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/Trump/Simple-IdealPose.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/Trump/Simple-IdealPose.json', import.meta.url).href,
			scale: 2,
		},
		 
	},
	trumpWelcome: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/Trump/Welcome.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/Trump/Welcome.json', import.meta.url).href,
			scale: 2,
		},
		 
	},
	
	reel_top: {
		type: 'sprite',
		src: new URL('../../assets/sprites/reelsFrame/reel_top.png', import.meta.url).href,
		 
	},
	reel_base: {
		type: 'sprite',
		src: new URL('../../assets/sprites/reelsFrame/reel_base.png', import.meta.url).href,
		 
	},
	reel_base_bonus: {
		type: 'sprite',
		src: new URL('../../assets/sprites/reelsFrame/reel_base_feature.png', import.meta.url).href,
		 
	},
	pressToContinueText: {
		type: 'sprites',
		src: new URL('../../assets/sprites/pressToContinueText/MM_pressanywhere.json', import.meta.url)
			.href,
		 
	},
	///Added
	Leaderboard: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/stand_with_board.png', import.meta.url)
			.href,
		 
	},
	yesText: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/yes_button.png', import.meta.url).href,
		 
	},
	noText: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/no_button.png', import.meta.url).href,
		 
	},

	board_popup: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/board_popup.png', import.meta.url).href,
		 
	},
	bonus_popup: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/bonus_popup.png', import.meta.url).href,
		 
	},
	'Board-Open': {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/boardPopup/Board-open.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/boardPopup/Board-open.json', import.meta.url).href,
			scale: 2,
		},
		 
	},
	'Bonus-Open': {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/popups/Bonus-Open.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/popups/Bonus-Open.json', import.meta.url).href,
			scale: 2,
		},
		 
	},
	freeSpinCounter: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/freespin_meter.png', import.meta.url)
			.href,
		 
	},
	betPanelbg: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/ui_bg.png', import.meta.url).href,
		 
	},
	spinButton: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/spin.png', import.meta.url)
			.href,
		 
	},
	volatility: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/volatility.png', import.meta.url).href,
		 preload:true,
	},
	checkbox: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/checkbox.png', import.meta.url).href,
		 
	},
	introtext: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/introtext.png', import.meta.url).href,
		 
	},
	introtext2: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/introtext2.png', import.meta.url).href,
		 
	},
	introtext3: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/introtext3.png', import.meta.url).href,
		 
	},
	introStateDisabled: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/intro_disable.png', import.meta.url)
			.href,
		 
	},
	introStateActive: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/intro_enable.png', import.meta.url)
			.href,
		 
	},
	spinButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/spinHover.png', import.meta.url)
			.href,
		 
	},
	spinButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/spinDown.png', import.meta.url)
			.href,
		 
	},
	spinButton_disabled: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/spinDisabled.png', import.meta.url)
			.href,
		 
	},
	yesButton: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/yes_button_normal.png', import.meta.url)
			.href,
		 
	},

	yesButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/yes_button_over.png', import.meta.url)
			.href,
		 
	},
	yesButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/yes_button_press.png', import.meta.url)
			.href,
		 
	},
	noButton: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/no_button_normal.png', import.meta.url)
			.href,
		 
	},

	noButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/no_button_over.png', import.meta.url)
			.href,
		 
	},
	noButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/no_button_press.png', import.meta.url)
			.href,
		 
	},

	freeSpinBg: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/feature_bg.png', import.meta.url).href,
		 
	},
	loadingBg: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/loading_bg.png', import.meta.url).href,
		 
	},
	gameloaderBg: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/gameloaderBg.png', import.meta.url).href,
		preload:true,
		 
	},
	bgLoadingMobile: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/bgLoadingMobile.png', import.meta.url).href,
		preload:true,
		 
	},
	LoadingScreen: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/loaderBar/LoadingScreen.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/loaderBar/LoadingScreen.json', import.meta.url).href,
			scale: 1,
		},
		preload:true,
		 
	},
	autoSpinButton: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Autoplay.png', import.meta.url)
			.href,
		 
	},
	autoSpinButton_normal: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Autoplay.png', import.meta.url)
			.href,
		 
	},
	autoSpinButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/AutoplayHover.png', import.meta.url)
			.href,
		 
	},
	autoSpinButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/AutoplayDown.png', import.meta.url)
			.href,
		 
	},
	autoSpinButton_disabled: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/AutoplayDisable.png', import.meta.url)
			.href,
		 
	},
	autoSpinActiveButton: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/AutoplayHover.png', import.meta.url)
			.href,
		 
	},
	autoSpinActiveButton_normal: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/AutoplayDown.png', import.meta.url)
			.href,
		 
	},
	autoSpinActiveButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/AutoplayHover.png', import.meta.url)
			.href,
		 
	},
	autoSpinActiveButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/AutoplayDown.png', import.meta.url)
			.href,
		 
	},
	autoSpinActiveButton_disabled: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/AutoplayDisable.png', import.meta.url)
			.href,
		 
	},
	/////
	autoSpinPortraitButton: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/autoPlayPortrait.png', import.meta.url)
			.href,
		 
	},
	autoSpinPortraitButton_normal: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/autoPlayPortrait.png', import.meta.url)
			.href,
		 
	},
	autoSpinPortraitButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/autoPlayPortrait.png', import.meta.url)
			.href,
		 
	},
	autoSpinPortraitButton_down: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/autoPlayPortrait_down.png',
			import.meta.url,
		).href,
		 
	},
	autoSpinPortraitButton_disabled: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/autoPlayPortrait.png', import.meta.url)
			.href,
		 
	},
	autoSpinPortraitActiveButton: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/autoPlayPortrait_down.png',
			import.meta.url,
		).href,
		 
	},
	autoSpinPortraitActiveButton_normal: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/autoPlayPortrait_down.png',
			import.meta.url,
		).href,
		 
	},
	autoSpinPortraitActiveButton_hover: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/autoPlayPortrait_down.png',
			import.meta.url,
		).href,
		 
	},
	autoSpinPortraitActiveButton_down: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/autoPlayPortrait_down.png',
			import.meta.url,
		).href,
		 
	},
	autoSpinPortraitActiveButton_disabled: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/autoPlayPortrait_down.png',
			import.meta.url,
		).href,
		 
	},

	menuButton: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/menu.png', import.meta.url).href,
		 
	},
	menuButton_normal: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/menu.png', import.meta.url).href,
		 
	},
	menuButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/menu.png', import.meta.url)
			.href,
		 
	},
	menuButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/menu.png', import.meta.url)
			.href,
		 
	},
	menuButton_disabled: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/menu.png', import.meta.url).href,
		 
	},
	menuExitButton_normal: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/menu.png', import.meta.url).href,
		 
	},
	menuExitButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/menu.png', import.meta.url).href,
		 
	},
	menuExitButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/menu.png', import.meta.url).href,
		 
	},
	menuExitButton_disabled: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/menu.png', import.meta.url).href,
		 
	},
	infoButton: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/info.png', import.meta.url).href,
		 
	},
	infoButton_normal: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/info.png', import.meta.url).href,
		 
	},
	infoButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/info.png', import.meta.url).href,
		 
	},
	infoButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/info.png', import.meta.url)
			.href,
		 
	},
	infoButton_disabled: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/info.png', import.meta.url).href,
		 
	},
	info_activeButton: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/info.png', import.meta.url).href,
		 
	},
	info_activeButton_normal: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/info.png', import.meta.url).href,
		 
	},
	info_activeButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/info.png', import.meta.url).href,
		 
	},
	info_activeButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/info.png', import.meta.url).href,
		 
	},
	info_activeButton_disabled: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/info.png', import.meta.url).href,
		 
	},
	infoPortraitButton: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/infoButton.png', import.meta.url).href,
		 
	},
	infoPortraitButton_normal: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/infoButton.png', import.meta.url).href,
		 
	},
	infoPortraitButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/infoButton.png', import.meta.url).href,
		 
	},
	infoPortraitButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/infoButton.png', import.meta.url).href,
		 
	},
	infoPortraitButton_disabled: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/infoButton.png', import.meta.url).href,
		 
	},

	decreaseButton: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/minus.png', import.meta.url).href,
		 
	},
	decreaseButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/minus.png', import.meta.url).href,
		 
	},
	decreaseButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/minusHover.png', import.meta.url).href,
		 
	},
	decreaseButton_disabled: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/minusDisabled.png', import.meta.url).href,
		 
	},
	increaseButton: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/plus.png', import.meta.url).href,
		 
	},
	increaseButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/plusHover.png', import.meta.url).href,
		 
	},
	increaseButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/plus.png', import.meta.url).href,
		 
	},
	increaseButton_disabled: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/plusDisabled.png', import.meta.url).href,
		 
	},

	turboButton_normal: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/turbo.png', import.meta.url)
			.href,
		 
	},
	turboButton: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/turbo.png', import.meta.url)
			.href,
		 
	},
	turboButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/turboHover.png', import.meta.url)
			.href,
		 
	},
	turboButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/turbodown.png', import.meta.url).href,
		 
	},
	turboButton_active: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/turbodown.png', import.meta.url).href,
		 
	},
	turboButton_active_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/turbodown.png', import.meta.url).href,
		 
	},
	turboButton_active_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/turbodown.png', import.meta.url).href,
		 
	},
	turboButton_disabled: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/turboDisable.png', import.meta.url)
			.href,
		 
	},
	///////
	turboButtonPortrait_normal: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/turboPortrait.png', import.meta.url)
			.href,
		 
	},
	turboButtonPortrait: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/turboPortrait.png', import.meta.url)
			.href,
		 
	},
	turboButtonPortrait_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/turboPortrait.png', import.meta.url)
			.href,
		 
	},
	turboButtonPortrait_down: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/turboPortrait_down.png',
			import.meta.url,
		).href,
		 
	},
	turboButtonPortrait_active: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/turboPortrait_down.png',
			import.meta.url,
		).href,
		 
	},
	turboButtonPortrait_active_down: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/turboPortrait_down.png',
			import.meta.url,
		).href,
		 
	},
	turboButtonPortrait_active_hover: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/turboPortrait_down.png',
			import.meta.url,
		).href,
		 
	},
	turboButtonPortrait_disabled: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/turboPortrait.png', import.meta.url)
			.href,
		 
	},

	stopButton: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/spin.png', import.meta.url)
			.href,
		 
	},
	stopButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/spinDown.png', import.meta.url)
			.href,
		 
	},
	stopButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/spinHover.png', import.meta.url)
			.href,
		 
	},
	stopButton_disabled: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/spinDisabled.png', import.meta.url)
			.href,
		 
	},
	doubleBetbg: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/bet_button_back.png', import.meta.url)
			.href,
		 
	},

	buyFreeSpinBg: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/buy_button_back.png', import.meta.url)
			.href,
		 
	},
	onBar: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/On_Bar.png', import.meta.url).href,
		 
	},
	onBarYes: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/On_Button.png', import.meta.url).href,
		 
	},
	onBarNo: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Off_Button.png', import.meta.url).href,
		 
	},
	buyFreeSpinButton_normal: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/buy_free_spin_normal_button.png',
			import.meta.url,
		).href,
		 
	},
	buyFreeSpinButton: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/buy_free_spin_normal_button.png',
			import.meta.url,
		).href,
		 
	},
	buyFreeSpinButton_hover: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/buy_free_spin_hover_button.png',
			import.meta.url,
		).href,
		 
	},
	buyFreeSpinButton_disabled: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/buy_super_free_spin_disable_button.png',
			import.meta.url,
		).href,
		 
	},
	buyFreeSpinButton_down: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/buy_free_spin_down_button.png',
			import.meta.url,
		).href,
		 
	},
	buySuperFreeSpinButton_normal: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/buy_super_free_spin_normal_button.png',
			import.meta.url,
		).href,
		 
	},
	buySuperFreeSpinButton_hover: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/buy_super_free_spin_hover_button.png',
			import.meta.url,
		).href,
		 
	},
	buySuperFreeSpinButton_disabled: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/buy_super_free_spin_disable_button.png',
			import.meta.url,
		).href,
		 
	},
	buySuperFreeSpinButton_down: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/buy_super_free_spin_down_button.png',
			import.meta.url,
		).href,
		 
	},

	betBg: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/betBg.png', import.meta.url).href,
		 
	},
	balanceBg: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/balanceBg.png', import.meta.url).href,
		 
	},
	winBg: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/WinBg.png', import.meta.url).href,
		 
	},
	betMultiplier: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/BetMultiplier.png', import.meta.url).href,
		 
	},
	spinBg: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/spinBg.png', import.meta.url).href,
		 
	},
	betControl2: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Bet.png', import.meta.url).href,
		 
	},
	portraitBg: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/pannel.png', import.meta.url).href,
		 
	},
	desktopBg: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/desktopBg.png', import.meta.url).href,
		 
	},
	menuBackground: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/MenuBg.png', import.meta.url).href,
		 
	},
	intro_reel: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/intro_reel.png', import.meta.url).href,
		 
	},
	vantaLogo: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Circle.png', import.meta.url).href,
		 
	},

	// HIGH SYMBOLS (use hsymbols.atlas)
	H1: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols/hsymbols.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols/h1.json', import.meta.url).href,
			scale: 2.2,
		},
	},
	H2: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols/hsymbols.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols/h2.json', import.meta.url).href,
			scale: 2,
		},
	},
	H3: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols/hsymbols.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols/h3.json', import.meta.url).href,
			scale: 2.5,
		},
	},
	H4: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols/hsymbols.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols/h4.json', import.meta.url).href,
			scale: 2.5,
		},
	},
	L1: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols/lsymbols.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols/l1.json', import.meta.url).href,
			scale: 1.5,
		},
	},
	L2: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols/lsymbols.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols/l2.json', import.meta.url).href,
			scale: 0.5,
		},
	},
	L3: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols/lsymbols.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols/l3.json', import.meta.url).href,
			scale: 1.5,
		},
	},
	L4: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols/lsymbols.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols/l4.json', import.meta.url).href,
			scale: 2,
		},
	},
	L5: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols/lsymbols.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols/l5.json', import.meta.url).href,
			scale: 4.5,
		},
	},
	L6: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols/lsymbols.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols/l6.json', import.meta.url).href,
			scale: 2,
		},
	},
	M: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols2/poke ball.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols2/poke ball.json', import.meta.url).href,
			scale: 2.5,
		},
	},
	S: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols2/scatter.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols2/scatter.json', import.meta.url).href,
			scale: 0.45,
		},
	},
	explosion: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols3/symbols3.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols3/explosion.json', import.meta.url).href,
			scale: 2,
		},
	},
	W: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols3/symbols3.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols3/W.json', import.meta.url).href,
			scale: 2,
		},
	},

	font2016: {
		type: 'font',
		src: new URL('../../assets/fonts/font2016/Font1.xml', import.meta.url).href,
	},
	font2: {
		type: 'font',
		src: new URL('../../assets/fonts/font2/Font2.xml', import.meta.url).href,
	},

	bigwin: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/bigwin/win_banners.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/bigwin/win_banners.json', import.meta.url).href,
			scale: 2,
		},
	},

	fsOutroNumber: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/fsIntro/board_popup.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/fsIntro/fs_total_number.json', import.meta.url).href,
			scale: 2,
		},
	},

	tumble_multiplier: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/tumbleWin/tumble_win.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/tumbleWin/tumble_multiplier.json', import.meta.url)
				.href,
			scale: 2,
		},
	},
	tumble_win: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/tumbleWin/tumble_win.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/tumbleWin/tumble_win.json', import.meta.url).href,
			scale: 2,
		},
	},

	clusterWin: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/clusterWin/clusterpay.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/clusterWin/clusterpay.json', import.meta.url).href,
			scale: 2,
		},
	},
	transition: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/transition/transition.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/transition/transition.json', import.meta.url).href,
			scale: 0.4,
		},
	},
	buyBoardPlaceHolder: {
		type: 'sprite',
		src: new URL('../../assets/sprites/reelsFrame/buy_board_place_holder.png', import.meta.url)
			.href,
		 
	},
	symbolsStatic: {
		type: 'sprites',
		src: new URL('../../assets/sprites/symbolsStatic/symbolsStatic.json', import.meta.url).href,
		 
	},
	spritesheet: {
		type: 'sprites',
		src: new URL('../../assets/sprites/symbolsStatic/spritesheet.json', import.meta.url).href,
		 
	},
	globalMultiplier1: {
		type: 'sprite',
		src: new URL('../../assets/spines/globalMultiplier/TumbleWin_Meter.png', import.meta.url).href,
		 
	},

	sound: {
		type: 'audio',
		src: new URL('../../assets/audio/sounds.json', import.meta.url).href,
		 preload:true,
	},
} as const;
