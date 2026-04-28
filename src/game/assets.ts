export default {
	loader: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/loader/loader.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/loader/loader.json', import.meta.url).href,
			scale: 2,
		},
		preload: true,
	},
	intro: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/loader/intro_page.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/loader/intro_page.json', import.meta.url).href,
			scale: 2,
		},
		preload: true,
	},
	logo: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/logo/logo.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/logo/logo.json', import.meta.url).href,
			scale: 2,
		},
		preload: true,
	},
	trumpLogo: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/logo/TestFile.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/logo/TestFile.json', import.meta.url).href,
			scale: 2,
		},
		preload: true,
	},
	reel_top: {
		type: 'sprite',
		src: new URL('../../assets/sprites/reelsFrame/reel_top.png', import.meta.url).href,
		preload: true,
	},
	reel_base: {
		type: 'sprite',
		src: new URL('../../assets/sprites/reelsFrame/reel_base.png', import.meta.url).href,
		preload: true,
	},
	reel_base_bonus: {
		type: 'sprite',
		src: new URL('../../assets/sprites/reelsFrame/reel_base_feature.png', import.meta.url).href,
		preload: true,
	},
	pressToContinueText: {
		type: 'sprites',
		src: new URL('../../assets/sprites/pressToContinueText/MM_pressanywhere.json', import.meta.url)
			.href,
		preload: true,
	},
	///Added
	Leaderboard: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/stand_with_board.png', import.meta.url)
			.href,
		preload: true,
	},
	yesText: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/yes_button.png', import.meta.url).href,
		preload: true,
	},
	noText: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/no_button.png', import.meta.url).href,
		preload: true,
	},
	popupText: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/free_spins.png', import.meta.url).href,
		preload: true,
	},
	board_popup: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/board_popup.png', import.meta.url).href,
		preload: true,
	},
	freeSpinCounter: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/freespin_meter.png', import.meta.url)
			.href,
		preload: true,
	},
	betPanelbg: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/ui_bg.png', import.meta.url).href,
		preload: true,
	},
	spinButton: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Button - Spin.png', import.meta.url)
			.href,
		preload: true,
	},
	volatility: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/volatility.png', import.meta.url).href,
		preload: true,
	},
	spinButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Button - Spin.png', import.meta.url)
			.href,
		preload: true,
	},
	spinButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Button - Spin.png', import.meta.url)
			.href,
		preload: true,
	},
	spinButton_disabled: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Button - Spin.png', import.meta.url)
			.href,
		preload: true,
	},
	yesButton: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/yes_button_normal.png', import.meta.url)
			.href,
		preload: true,
	},

	yesButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/yes_button_over.png', import.meta.url)
			.href,
		preload: true,
	},
	yesButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/yes_button_press.png', import.meta.url)
			.href,
		preload: true,
	},
	noButton: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/no_button_normal.png', import.meta.url)
			.href,
		preload: true,
	},

	noButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/no_button_over.png', import.meta.url)
			.href,
		preload: true,
	},
	noButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/no_button_press.png', import.meta.url)
			.href,
		preload: true,
	},

	freeSpinBg: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/feature_bg.jpg', import.meta.url).href,
		preload: true,
	},
	autoSpinButton: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Button AUTOPLAY.png', import.meta.url)
			.href,
		preload: true,
	},
	autoSpinButton_normal: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Button AUTOPLAY.png', import.meta.url)
			.href,
		preload: true,
	},
	autoSpinButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/autoPlay_hover.png', import.meta.url)
			.href,
		preload: true,
	},
	autoSpinButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/autoPlay_down.png', import.meta.url)
			.href,
		preload: true,
	},
	autoSpinButton_disabled: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Button AUTOPLAY.png', import.meta.url)
			.href,
		preload: true,
	},
	autoSpinActiveButton: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/autoPlay_down.png', import.meta.url)
			.href,
		preload: true,
	},
	autoSpinActiveButton_normal: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/autoPlay_down.png', import.meta.url)
			.href,
		preload: true,
	},
	autoSpinActiveButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/autoPlay_hover.png', import.meta.url)
			.href,
		preload: true,
	},
	autoSpinActiveButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/autoPlay_down.png', import.meta.url)
			.href,
		preload: true,
	},
	autoSpinActiveButton_disabled: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/autoPlay_down.png', import.meta.url)
			.href,
		preload: true,
	},
	/////
	autoSpinPortraitButton: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/autoPlayPortrait.png', import.meta.url).href,
		preload: true,
	},
	autoSpinPortraitButton_normal: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/autoPlayPortrait.png', import.meta.url).href,
		preload: true,
	},
	autoSpinPortraitButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/autoPlayPortrait.png', import.meta.url).href,
		preload: true,
	},
	autoSpinPortraitButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/autoPlayPortrait_down.png', import.meta.url).href,
		preload: true,
	},
	autoSpinPortraitButton_disabled: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/autoPlayPortrait.png', import.meta.url).href,
		preload: true,
	},
	autoSpinPortraitActiveButton: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/autoPlayPortrait_down.png', import.meta.url).href,
		preload: true,
	},
	autoSpinPortraitActiveButton_normal: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/autoPlayPortrait_down.png', import.meta.url).href,
		preload: true,
	},
	autoSpinPortraitActiveButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/autoPlayPortrait_down.png', import.meta.url).href,
		preload: true,
	},
	autoSpinPortraitActiveButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/autoPlayPortrait_down.png', import.meta.url).href,
		preload: true,
	},
	autoSpinPortraitActiveButton_disabled: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/autoPlayPortrait_down.png', import.meta.url).href,
		preload: true,
	},

	menuButton: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Menu button.png', import.meta.url).href,
		preload: true,
	},
	menuButton_normal: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Menu button.png', import.meta.url).href,
		preload: true,
	},
	menuButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Menu button_down.png', import.meta.url).href,
		preload: true,
	},
	menuButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Menu button_hover.png', import.meta.url).href,
		preload: true,
	},
	menuButton_disabled: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Menu button.png', import.meta.url).href,
		preload: true,
	},
	menuExitButton_normal: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/down.png', import.meta.url).href,
		preload: true,
	},
	menuExitButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/down.png', import.meta.url).href,
		preload: true,
	},
	menuExitButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/down.png', import.meta.url).href,
		preload: true,
	},
	menuExitButton_disabled: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/down.png', import.meta.url).href,
		preload: true,
	},
	infoButton: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Info button.png', import.meta.url).href,
		preload: true,
	},
	infoButton_normal: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Info button.png', import.meta.url).href,
		preload: true,
	},
	infoButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/down.png', import.meta.url).href,
		preload: true,
	},
	infoButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Info button_hover.png', import.meta.url).href,
		preload: true,
	},
	infoButton_disabled: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Info button.png', import.meta.url).href,
		preload: true,
	},
	info_activeButton: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/down.png', import.meta.url).href,
		preload: true,
	},
	info_activeButton_normal: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/down.png', import.meta.url).href,
		preload: true,
	},
	info_activeButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/down.png', import.meta.url).href,
		preload: true,
	},
	info_activeButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/down.png', import.meta.url).href,
		preload: true,
	},
	info_activeButton_disabled: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/down.png', import.meta.url).href,
		preload: true,
	},
	infoPortraitButton :{
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/infoButton.png', import.meta.url).href,
		preload: true,
	},
	infoPortraitButton_normal :{
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/infoButton.png', import.meta.url).href,
		preload: true,
	},
	infoPortraitButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/infoButton.png', import.meta.url).href,
		preload: true,
	},
	infoPortraitButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/infoButton.png', import.meta.url).href,
		preload: true,
	},
	infoPortraitButton_disabled: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/infoButton.png', import.meta.url).href,
		preload: true,
	},

	decreaseButton: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Frame 1.png', import.meta.url).href,
		preload: true,
	},
	decreaseButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Frame 1.png', import.meta.url).href,
		preload: true,
	},
	decreaseButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Frame 1.png', import.meta.url).href,
		preload: true,
	},
	decreaseButton_disabled: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Frame 1.png', import.meta.url).href,
		preload: true,
	},
	increaseButton: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Frame 3.png', import.meta.url).href,
		preload: true,
	},
	increaseButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Frame 3.png', import.meta.url).href,
		preload: true,
	},
	increaseButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Frame 3.png', import.meta.url).href,
		preload: true,
	},
	increaseButton_disabled: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Frame 3.png', import.meta.url).href,
		preload: true,
	},

	turboButton_normal: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Button TURBO.png', import.meta.url)
			.href,
		preload: true,
	},
	turboButton: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Button TURBO.png', import.meta.url)
			.href,
		preload: true,
	},
	turboButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Button TURBO.png', import.meta.url)
			.href,
		preload: true,
	},
	turboButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Turbo_down.png', import.meta.url).href,
		preload: true,
	},
	turboButton_active: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Turbo_down.png', import.meta.url).href,
		preload: true,
	},
	turboButton_active_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Turbo_down.png', import.meta.url).href,
		preload: true,
	},
	turboButton_active_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Turbo_down.png', import.meta.url).href,
		preload: true,
	},
	turboButton_disabled: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Button TURBO.png', import.meta.url)
			.href,
		preload: true,
	},
///////
	turboButtonPortrait_normal: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/turboPortrait.png', import.meta.url).href,
		preload: true,
	},
	turboButtonPortrait: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/turboPortrait.png', import.meta.url).href,
		preload: true,
	},
	turboButtonPortrait_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/turboPortrait.png', import.meta.url).href,
		preload: true,
	},
	turboButtonPortrait_down :{
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/turboPortrait_down.png', import.meta.url).href,
		preload: true,
	},
	turboButtonPortrait_active :{
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/turboPortrait_down.png', import.meta.url).href,
		preload: true,
	},
	turboButtonPortrait_active_down :{
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/turboPortrait_down.png', import.meta.url).href,
		preload: true,
	},
	turboButtonPortrait_active_hover :{
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/turboPortrait_down.png', import.meta.url).href,
		preload: true,
	},
	turboButtonPortrait_disabled :{
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/turboPortrait.png', import.meta.url).href,
		preload: true,
	},
	
	stopButton: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Button - Spin.png', import.meta.url)
			.href,
		preload: true,
	},
	stopButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Button - Spin.png', import.meta.url)
			.href,
		preload: true,
	},
	stopButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Button - Spin.png', import.meta.url)
			.href,
		preload: true,
	},
	stopButton_disabled: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Button - Spin.png', import.meta.url)
			.href,
		preload: true,
	},
	doubleBetbg: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/bet_button_back.png', import.meta.url)
			.href,
		preload: true,
	},
	betDoubleButton_normal: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/bet_double_button_normal.png',
			import.meta.url,
		).href,
		preload: true,
	},
	betDoubleButton: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/bet_double_button_normal.png',
			import.meta.url,
		).href,
		preload: true,
	},
	betDoubleButton_hover: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/bet_double_button_hover.png',
			import.meta.url,
		).href,
		preload: true,
	},
	betDoubleButton_down: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/bet_double_button_down.png',
			import.meta.url,
		).href,
		preload: true,
	},
	betDoubleButton_disabled: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/bet_double_button_disable.png',
			import.meta.url,
		).href,
		preload: true,
	},

	buyFreeSpinBg: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/buy_button_back.png', import.meta.url)
			.href,
		preload: true,
	},
	buyFreeSpinButton_normal: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/buy_free_spin_normal_button.png',
			import.meta.url,
		).href,
		preload: true,
	},
	buyFreeSpinButton: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/buy_free_spin_normal_button.png',
			import.meta.url,
		).href,
		preload: true,
	},
	buyFreeSpinButton_hover: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/buy_free_spin_hover_button.png',
			import.meta.url,
		).href,
		preload: true,
	},
	buyFreeSpinButton_disabled: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/buy_super_free_spin_disable_button.png',
			import.meta.url,
		).href,
		preload: true,
	},
	buyFreeSpinButton_down: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/buy_free_spin_down_button.png',
			import.meta.url,
		).href,
		preload: true,
	},
	buySuperFreeSpinButton_normal: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/buy_super_free_spin_normal_button.png',
			import.meta.url,
		).href,
		preload: true,
	},
	buySuperFreeSpinButton_hover: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/buy_super_free_spin_hover_button.png',
			import.meta.url,
		).href,
		preload: true,
	},
	buySuperFreeSpinButton_disabled: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/buy_super_free_spin_disable_button.png',
			import.meta.url,
		).href,
		preload: true,
	},
	buySuperFreeSpinButton_down: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/buy_super_free_spin_down_button.png',
			import.meta.url,
		).href,
		preload: true,
	},
	lane: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/lane_1.png', import.meta.url).href,
		preload: true,
	},
	betControl: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Balance.png', import.meta.url).href,
		preload: true,
	},
	betControl2: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Bet.png', import.meta.url).href,
		preload: true,
	},
	portraitBg: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/pannel.png', import.meta.url).href,
		preload: true,
	},
	desktopBg: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/desktopBg.png', import.meta.url).href,
		preload: true,
	},
	menuBackground: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/MenuBg.png', import.meta.url).href,
		preload: true,
	},
	soundOnButton: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/SoundOn.png', import.meta.url).href,
		preload: true,
	},
	soundOnButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/SoundOn.png', import.meta.url).href,
		preload: true,
	},
	soundOnButton_disabled: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/SoundOn.png', import.meta.url).href,
		preload: true,
	},
	soundOnButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/SoundHover.png', import.meta.url).href,
		preload: true,
	},
	soundOffButton: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/SoundOff.png', import.meta.url).href,
		preload: true,
	},
	soundOffButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/SoundOff.png', import.meta.url).href,
		preload: true,
	},
	soundOffButton_disabled: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/SoundOff.png', import.meta.url).href,
		preload: true,
	},
	soundOffButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/SoundOff.png', import.meta.url).href,
		preload: true,
	},
	vantaLogo: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/Circle.png', import.meta.url).href,
		preload: true,
	},

	// HIGH SYMBOLS (use hsymbols.atlas)
	H1: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols/hsymbols.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols/h1.json', import.meta.url).href,
			scale: 2,
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
			scale: 2,
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
			scale: 2,
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
			atlas: new URL('../../assets/spines/symbols2/symbols2.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols2/M.json', import.meta.url).href,
			scale: 2,
		},
	},
	S: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols2/scatter.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols2/scatter.json', import.meta.url).href,
<<<<<<< Updated upstream
			scale: 0.5,
=======
			scale: 0.45,
>>>>>>> Stashed changes
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
	reelsFrame: {
		type: 'sprites',
		src: new URL('../../assets/sprites/reelsFrame/reels_frame.json', import.meta.url).href,
	},
	payFrame: {
		type: 'sprite',
		src: new URL('../../assets/sprites/payFrame/payFrame.png', import.meta.url).href,
	},
	anticipation: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/anticipation/anticipation.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/anticipation/anticipation.json', import.meta.url).href,
			scale: 2,
		},
	},
	goldFont: {
		type: 'font',
		src: new URL('../../assets/fonts/goldFont/mm_gold.xml', import.meta.url).href,
	},
	goldBlur: {
		type: 'font',
		src: new URL('../../assets/fonts/goldBlur/miningfont_gold_blur.xml', import.meta.url).href,
	},
	silverFont: {
		type: 'font',
		src: new URL('../../assets/fonts/silverFont/mm_silver.xml', import.meta.url).href,
	},
	purpleFont: {
		type: 'font',
		src: new URL('../../assets/fonts/purpleFont/mm_purple.xml', import.meta.url).href,
	},
	bigwin: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/bigwin/win_banners.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/bigwin/win_banners.json', import.meta.url).href,
			scale: 2,
		},
	},
	globalMultiplier: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/globalMultiplier/multiframe.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/globalMultiplier/multiframe.json', import.meta.url)
				.href,
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
	foregroundAnimation: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/foregroundAnimation/mm_bg.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/foregroundAnimation/mm_bg.json', import.meta.url).href,
			scale: 2,
		},
		preload: true,
	},
	foregroundFeatureAnimation: {
		type: 'spine',
		src: {
			atlas: new URL(
				'../../assets/spines/foregroundFeatureAnimation/mm_bg_feature.atlas',
				import.meta.url,
			).href,
			skeleton: new URL(
				'../../assets/spines/foregroundFeatureAnimation/mm_bg_feature.json',
				import.meta.url,
			).href,
			scale: 2,
		},
		preload: true,
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
	reelhouse: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/reelhouse/reelhouse_glow.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/reelhouse/reelhouse_glow.json', import.meta.url).href,
			scale: 2,
		},
	},
	progressBar: {
		type: 'sprites',
		src: new URL('../../assets/sprites/progressBar/progressBar.json', import.meta.url).href,
		preload: true,
	},
	freeSpins: {
		type: 'sprites',
		src: new URL('../../assets/sprites/freeSpins/freeSpins.json', import.meta.url).href,
	},
	winSmall: {
		type: 'sprites',
		src: new URL('../../assets/sprites/winSmall/MM_Localisation_winsmall.json', import.meta.url)
			.href,
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
		preload: true,
	},
	symbolsStatic: {
		type: 'sprites',
		src: new URL('../../assets/sprites/symbolsStatic/symbolsStatic.json', import.meta.url).href,
		preload: true,
	},
	spritesheet: {
		type: 'sprites',
		src: new URL('../../assets/sprites/symbolsStatic/spritesheet.json', import.meta.url).href,
		preload: true,
	},
	
	coins: {
		type: 'spriteSheet',
		src: new URL('../../assets/sprites/coin/SD2_Coin.json', import.meta.url).href,
	},
	sound: {
		type: 'audio',
		src: new URL('../../assets/audio/sounds.json', import.meta.url).href,
		preload: true,
	},
} as const;
