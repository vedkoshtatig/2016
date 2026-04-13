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
	pressToContinueText: {
		type: 'sprites',
		src: new URL('../../assets/sprites/pressToContinueText/MM_pressanywhere.json', import.meta.url)
			.href,
		preload: true,
	},
	///Added
	spinButton: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/spin buttons_normal.png', import.meta.url).href,
		preload: true,
	},
	betPanelbg: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/ui_bg.png', import.meta.url).href,
		preload: true,
	},
	spinButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/spin buttons_hover.png', import.meta.url).href,
		preload: true,
	},
	spinButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/spin buttons_down.png', import.meta.url).href,
		preload: true,
	},
	spinButton_disabled: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/spin buttons_disabled.png', import.meta.url).href,
		preload: true,
	},
	autoSpinButton: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/auto.png', import.meta.url).href,
		preload: true,
	},
	autoSpinButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/auto_over.png', import.meta.url).href,
		preload: true,
	},
	autoSpinButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/auto_down.png', import.meta.url).href,
		preload: true,
	},
	autoSpinButton_disabled: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/auto_disable.png', import.meta.url).href,
		preload: true,
	},
	// autoSpinButton :{
	// 	type: 'sprite',
	// 	src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/autospin_active.png', import.meta.url).href,
	// 	preload: true,
	// },
	// autoSpinButton_hover :{
	// 	type: 'sprite',
	// 	src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/autospin_active_hover.png', import.meta.url).href,
	// 	preload: true,
	// },
	// autoSpinButton_down :{
	// 	type: 'sprite',
	// 	src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/autospin_active_hover.png', import.meta.url).href,
	// 	preload: true,
	// },
	// autoSpinButton_disabled :{
	// 	type: 'sprite',
	// 	src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/autospin_active_hover.png', import.meta.url).href,
	// 	preload: true,
	// },
	// menuButton :{
	// 	type: 'sprite',
	// 	src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/menuIcon_normal.png', import.meta.url).href,
	// 	preload: true,
	// },
	// menuButton_down :{
	// 	type: 'sprite',
	// 	src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/menuIcon_down.png', import.meta.url).href,
	// 	preload: true,
	// },
	// menuButton_hover :{
	// 	type: 'sprite',
	// 	src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/menuIcon_hover.png', import.meta.url).href,
	// 	preload: true,
	// },
	// menuButton_disabled :{
	// 	type: 'sprite',
	// 	src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/menuIcon_disabled.png', import.meta.url).href,
	// 	preload: true,
	// },
	menuButton :{
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/menu_button_normal.png', import.meta.url).href,
		preload: true,
	},
	menuButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/menu_button_down.png', import.meta.url).href,
		preload: true,
	},
	menuButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/menu_button_normal.png', import.meta.url).href,
		preload: true,
	},
	menuButton_disabled: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/menu_button_disable.png', import.meta.url).href,
		preload: true,
	},
	menuExitButton: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/closeBtn_menu_normal.png',
			import.meta.url,
		).href,
		preload: true,
	},
	menuExitButton_down: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/closeBtn_menu_down.png',
			import.meta.url,
		).href,
		preload: true,
	},
	menuExitButton_hover: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/closeBtn_menu_hover.png',
			import.meta.url,
		).href,
		preload: true,
	},
	menuExitButton_disabled: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/closeBtn_menu_disabled.png',
			import.meta.url,
		).href,
		preload: true,
	},
	infoButton: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/rulesIcon.png', import.meta.url).href,
		preload: true,
	},
	settingsButton: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/menuIcon_normal.png', import.meta.url)
			.href,
		preload: true,
	},
	settingsButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/menuIcon_down.png', import.meta.url)
			.href,
		preload: true,
	},
	settingsButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/menuIcon_hover.png', import.meta.url)
			.href,
		preload: true,
	},
	settingsButton_disabled: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/menuIcon_disabled.png', import.meta.url)
			.href,
		preload: true,
	},
	payTableButton: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/paytableIcon.png', import.meta.url)
			.href,
		preload: true,
	},
	payTableButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/paytableIcon.png', import.meta.url)
			.href,
		preload: true,
	},
	decreaseButton: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/down_button.png', import.meta.url).href,
		preload: true,
	},
	decreaseButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/down_button_down.png', import.meta.url).href,
		preload: true,
	},
	decreaseButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/down_button_Over.png', import.meta.url).href,
		preload: true,
	},
	decreaseButton_disabled: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/down_button.png', import.meta.url).href,
		preload: true,
	},
	increaseButton: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/up_button.png', import.meta.url).href,
		preload: true,
	},
	increaseButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/up_button_over.png', import.meta.url).href,
		preload: true,
	},
	increaseButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/up_button_down.png', import.meta.url).href,
		preload: true,
	},
	increaseButton_disabled: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/up_button.png', import.meta.url).href,
		preload: true,
	},
	// increaseButton :{
	// 	type: 'sprite',
	// 	src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/plusIcon_normal.png', import.meta.url).href,
	// 	preload: true,
	// },
	// increaseButton_hover :{
	// 	type: 'sprite',
	// 	src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/plusIcon_hover.png', import.meta.url).href,
	// 	preload: true,
	// },
	// increaseButton_down :{
	// 	type: 'sprite',
	// 	src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/plusIcon_down.png', import.meta.url).href,
	// 	preload: true,
	// },
	// increaseButton_disabled :{
	// 	type: 'sprite',
	// 	src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/plusIcon_disabled.png', import.meta.url).href,
	// 	preload: true,
	// },
	soundOnButton :{
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/soundOnIcon_normal.png',
			import.meta.url,
		).href,
		preload: true,
	},
	soundOnButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/soundOnIcon_down.png', import.meta.url)
			.href,
		preload: true,
	},
	soundOnButton_disabled: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/soundOnIcon_disabled.png',
			import.meta.url,
		).href,
		preload: true,
	},
	soundOnButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/soundOnIcon_hover.png', import.meta.url)
			.href,
		preload: true,
	},
	soundOffButton: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/soundOffIcon_normal.png',
			import.meta.url,
		).href,
		preload: true,
	},
	soundOffButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/soundOffIcon_down.png', import.meta.url)
			.href,
		preload: true,
	},
	soundOffButton_disabled: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/soundOffIcon_disabled.png',
			import.meta.url,
		).href,
		preload: true,
	},
	soundOffButton_hover: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/soundOffIcon_hover.png',
			import.meta.url,
		).href,
		preload: true,
	},
	buyBonusButton: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/buyBonusBtn_normal.png',
			import.meta.url,
		).href,
		preload: true,
	},
	buyBonusButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/buyBonusBtn_down.png', import.meta.url)
			.href,
		preload: true,
	},
	buyBonusButton_disabled: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/uiSlotsAssetsBespoke/buyBonusBtn_disabled.png',
			import.meta.url,
		).href,
		preload: true,
	},
	buyBonusButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/buyBonusBtn_hover.png', import.meta.url)
			.href,
		preload: true,
	},
	turboButton: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/turbo.png', import.meta.url).href,
		preload: true,
	},
	turboButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/turbo_over.png', import.meta.url).href,
		preload: true,
	},
	turboButton_down :{
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/turbo_down.png', import.meta.url).href,
		preload: true,
	},
	turboButton_disabled :{
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/turbo_disable.png', import.meta.url).href,
		preload: true,
	},
	
	stopButton: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/stop-buttons_normal.png', import.meta.url).href,
		preload: true,
	},
	stopButton_down: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/stop-buttons_down.png', import.meta.url).href,
		preload: true,
	},
	stopButton_hover: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/stop-buttons_hover.png', import.meta.url).href,
		preload: true,
	},
	stopButton_disabled: {
		type: 'sprite',
		src: new URL('../../assets/sprites/uiSlotsAssetsBespoke/stop_disabled.png', import.meta.url).href,
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
			scale: 2,
		},
	},
	H4: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols/hsymbols.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols/h4.json', import.meta.url).href,
			scale: 2,
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
			scale: 2,
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
			scale: 0.5,
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
			atlas: new URL('../../assets/spines/bigwin/big_wins.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/bigwin/mm_bigwin.json', import.meta.url).href,
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
	fsIntro: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/fsIntro/fs_screen.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/fsIntro/fs_screen.json', import.meta.url).href,
			scale: 2,
		},
	},
	fsIntroNumber: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/fsIntro/fs_screen.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/fsIntro/fs_screen_number.json', import.meta.url).href,
			scale: 2,
		},
	},
	fsOutroNumber: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/fsIntro/fs_screen.atlas', import.meta.url).href,
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
			scale: 2,
		},
	},
	symbolsStatic: {
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
