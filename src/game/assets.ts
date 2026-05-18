export default {
	loader: {
		type: 'sprite',
		src: new URL('../../assets/spines/loader/loader.png', import.meta.url).href,
		preload: true,
	},
		slotAssets1: {
		type: 'sprites',
		src: new URL('../../assets/sprites/ui-0.json', import.meta.url).href,
		preload: true,
	},
		slotAssets2: {
		type: 'sprites',
		src: new URL('../../assets/sprites/ui-1.json', import.meta.url).href,
	},
		slotAssets3: {
		type: 'sprites',
		src: new URL('../../assets/sprites/spritesheet.json', import.meta.url).href,
	},

		betPanel: {
		type: 'sprites',
		src: new URL('../../assets/sprites/betPanel.json', import.meta.url).href,
	},

	introReel1: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/reelhouse/Intro-reel_logo.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/reelhouse/Intro-reel_logo.json', import.meta.url).href,
			scale: 2,
		},
		preload: true,
	},
	introReel2: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/reelhouse/Intro-reel_logo2.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/reelhouse/Intro-reel_logo2.json', import.meta.url)
				.href,
			scale: 2,
		},
		preload: true,
	},
	introReel3: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/reelhouse/Intro-reel_logo3.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/reelhouse/Intro-reel_logo3.json', import.meta.url)
				.href,
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
			atlas: new URL('../../assets/spines/logo/IdealPose.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/logo/IdealPose.json', import.meta.url).href,
			scale: 2,
		},
		preload: true,
	},
	trumpAngry: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/Trump/Shocking.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/Trump/Shocking.json', import.meta.url).href,
			scale: 2,
		},
		preload: true,
	},
	trumpCelebrate: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/Trump/Victory.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/Trump/Victory.json', import.meta.url).href,
			scale: 2,
		},
		preload: true,
	},
	trumpPointing: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/Trump/Pointing.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/Trump/Pointing.json', import.meta.url).href,
			scale: 2,
		},
		preload: true,
	},
	trumpIdle: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/Trump/Simple-IdealPose.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/Trump/Simple-IdealPose.json', import.meta.url).href,
			scale: 2,
		},
		preload: true,
	},
	trumpWelcome: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/Trump/Welcome.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/Trump/Welcome.json', import.meta.url).href,
			scale: 2,
		},
		preload: true,
	},
	
	
	pressToContinueText: {
		type: 'sprites',
		src: new URL('../../assets/sprites/pressToContinueText/MM_pressanywhere.json', import.meta.url)
			.href,
		preload: true,
	},
	loaderBgDESKTOP: {
		type: 'sprite',
		src: new URL('../../assets/sprites/symbolsStatic/gameloaderBg.png', import.meta.url).href,
		preload: true,
	},
	loaderBgMOBILE: {
		type: 'sprite',
		src: new URL('../../assets/sprites/symbolsStatic/bgLoadingMobile.png', import.meta.url).href,
		preload: true,
	},

	'Board-Open': {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/boardPopup/Board-open.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/boardPopup/Board-open.json', import.meta.url).href,
			scale: 2,
		},
		preload: true,
	},
	'Bonus-Open': {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/popups/Bonus-Open.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/popups/Bonus-Open.json', import.meta.url).href,
			scale: 2,
		},
		preload: true,
	},

	LoadingScreen: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/loaderBar/LoadingScreen.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/loaderBar/LoadingScreen.json', import.meta.url).href,
			scale: 1,
		},
		preload: true,
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


	sound: {
		type: 'audio',
		src: new URL('../../assets/audio/sounds.json', import.meta.url).href,
		preload: true,
	},
} as const;
