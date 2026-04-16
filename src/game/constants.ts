import _ from 'lodash';
import { WHITE } from 'constants-shared/colors';
import type { RawSymbol, SymbolState } from './types';

export const SYMBOL_SIZE = 100;
export const SYMBOL_GAP = 115;
export const UI_BASE_SIZE = 150;

export const UI_BASE_FONT_SIZE = UI_BASE_SIZE * 0.25;

export const UI_TEXT_STYLES = {
	labelStyle: {
		fontSize: UI_BASE_FONT_SIZE,
		fill: WHITE,
	},
	amountStyle: {
		fontSize: UI_BASE_FONT_SIZE,
		fill: WHITE,
	},
};
// portrait
export const PORTRAIT_BASE_SIZE = UI_BASE_SIZE * 1.32;

// landscape
export const LANDSCAPE_BASE_SIZE = UI_BASE_SIZE * 1.1;

export const LANDSCAPE_BACKGROUND_WIDTH_LIST = [
	LANDSCAPE_BASE_SIZE * (188 / 116),
	1000,
	LANDSCAPE_BASE_SIZE * (373 / 116),
];

// desktop
export const TABLET_BASE_SIZE = UI_BASE_SIZE * 1.2;

export const TABLET_BACKGROUND_WIDTH_LIST = [
	TABLET_BASE_SIZE * (188 / 116),
	650,
	350,
	TABLET_BASE_SIZE * (340 / 116),
];
export const REEL_PADDING = 0.53;
export const DESKTOP_BASE_SIZE = UI_BASE_SIZE * 0.9;

export const DESKTOP_BACKGROUND_WIDTH_LIST = [
	DESKTOP_BASE_SIZE * (188 / 116),
	800,
	350,
	DESKTOP_BASE_SIZE * (340 / 116),
];
// initial board (padded top and bottom)
export const INITIAL_BOARD: RawSymbol[][] = [
	[
		{ name: 'M', multiplier: 10 },
		{ name: 'L4' },
		{ name: 'M', multiplier: 2 },
		{ name: 'L1' },
		{ name: 'H1' },
		{ name: 'H4' },
		{ name: 'H1' },
	],
	[
		{ name: 'L3' },
		{ name: 'L4' },
		{ name: 'M', multiplier: 4 },
		{ name: 'L3' },
		{ name: 'L3', scatter: true },
		{ name: 'L3', scatter: true },
		{ name: 'L3' },
	],
	[
		{ name: 'L2' },
		{ name: 'L4' },
		{ name: 'M', multiplier: 5 },
		{ name: 'L3' },
		{ name: 'W' },
		{ name: 'L2' },
		{ name: 'L2' },
	],
	[
		{ name: 'L3' },
		{ name: 'L4' },
		{ name: 'M', multiplier: 7 },
		{ name: 'L4' },
		{ name: 'W' },
		{ name: 'H1' },
		{ name: 'H1' },
	],
	[
		{ name: 'H3' },
		{ name: 'L4' },
		{ name: 'M', multiplier: 10 },
		{ name: 'H2' },
		{ name: 'S', scatter: true },
		{ name: 'L2' },
		{ name: 'M', multiplier: 7 },
	],
	[
		{ name: 'H2' },
		{ name: 'L4' },
		{ name: 'S', scatter: true },
		{ name: 'L3' },
		{ name: 'H1' },
		{ name: 'S', scatter: true },
		{ name: 'L2' },
	],
];

export const BOARD_DIMENSIONS = { x: INITIAL_BOARD.length, y: INITIAL_BOARD[0].length - 2 };

export const BOARD_SIZES = {
	width: SYMBOL_SIZE * BOARD_DIMENSIONS.x,
	height: SYMBOL_SIZE * BOARD_DIMENSIONS.y,
};

export const BACKGROUND_RATIO = 2039 / 1000;
export const PORTRAIT_BACKGROUND_RATIO = 1242 / 2208;
const PORTRAIT_RATIO = 800 / 1422;
const LANDSCAPE_RATIO = 1600 / 900;
const DESKTOP_RATIO = 1422 / 800;

const DESKTOP_HEIGHT = 800;
const LANDSCAPE_HEIGHT = 900;
const PORTRAIT_HEIGHT = 1422;
export const DESKTOP_MAIN_SIZES = { width: DESKTOP_HEIGHT * DESKTOP_RATIO, height: DESKTOP_HEIGHT };
export const LANDSCAPE_MAIN_SIZES = {
	width: LANDSCAPE_HEIGHT * LANDSCAPE_RATIO,
	height: LANDSCAPE_HEIGHT,
};
export const PORTRAIT_MAIN_SIZES = {
	width: PORTRAIT_HEIGHT * PORTRAIT_RATIO,
	height: PORTRAIT_HEIGHT,
};

export const HIGH_SYMBOLS = ['H1', 'H2', 'H3', 'H4'];

export const INITIAL_SYMBOL_STATE: SymbolState = 'static';

const M_SIZE = 0.3;
const HIGH_SYMBOL_SIZE = 0.7;
const LOW_SYMBOL_SIZE = 0.7;
const SPECIAL_SYMBOL_SIZE = 1;

const SPIN_OPTIONS_SHARED = {
	reelFallInDelay: 80,
	reelPaddingMultiplierNormal: 1.25,
	reelPaddingMultiplierAnticipated: 18,
	reelFallOutDelay: 145,
};

export const SPIN_OPTIONS_DEFAULT = {
	...SPIN_OPTIONS_SHARED,
	symbolFallInSpeed: 3.5,
	symbolFallInInterval: 30,
	symbolFallInBounceSpeed: 0.15,
	symbolFallInBounceSizeMulti: 0.5,
	symbolFallOutSpeed: 3.5,
	symbolFallOutInterval: 20,
};

export const SPIN_OPTIONS_FAST = {
	...SPIN_OPTIONS_SHARED,
	symbolFallInSpeed: 7,
	symbolFallInInterval: 0,
	symbolFallInBounceSpeed: 0.3,
	symbolFallInBounceSizeMulti: 0.25,
	symbolFallOutSpeed: 7,
	symbolFallOutInterval: 0,
};

export const MOTION_BLUR_VELOCITY = 31;

export const zIndexes = {
	background: {
		backdrop: -3,
		normal: -2,
		feature: -1,
	},
};

const explosion = {
	type: 'spine',
	assetKey: 'explosion',
	animationName: 'explosion',
	sizeRatios: { width: 1, height: 1 },
};

const createAnimatedSymbol = (
	assetKey: string,
	size: number
) => ({
	explosion,
	postWinStatic: {
		type: 'spine',
		assetKey,
		animationName: 'post_win_static',
		sizeRatios: { width: 0.5, height: size * 0.57 },
	},
	static: {
		type: 'spine',
		assetKey,
		animationName: 'static',
		sizeRatios: { width: 0.5, height: size * 0.57 },
	},
	spin: {
		type: 'spine',
		assetKey,
		animationName: 'spin',
		sizeRatios: { width: 0.5, height: size * 0.57 },
	},
	win: {
		type: 'spine',
		assetKey,
		animationName: 'win',
		sizeRatios: { width: 0.5, height: size * 0.57 },
	},
	land: {
		type: 'spine',
		assetKey,
		animationName: 'landing',
		sizeRatios: { width: 0.5, height: size * 0.57 },
	},
});

const h1Static = { type: 'sprite', assetKey: 'h1', sizeRatios: { width: 1, height: 1 } };
const h2Static = { type: 'sprite', assetKey: 'h2', sizeRatios: { width: 1, height: 1 } };
const h3Static = { type: 'sprite', assetKey: 'h3', sizeRatios: { width: 1, height: 1 } };
const h4Static = { type: 'sprite', assetKey: 'h4', sizeRatios: { width: 1, height: 1 } };

const l1Static = { type: 'sprite', assetKey: 'l1', sizeRatios: { width: 1, height: 1 } };
const l2Static = { type: 'sprite', assetKey: 'l2', sizeRatios: { width: 1, height: 1 } };
const l3Static = { type: 'sprite', assetKey: 'l3', sizeRatios: { width: 1, height: 1 } };
const l4Static = { type: 'sprite', assetKey: 'l4', sizeRatios: { width: 1, height: 1 } };
const l5Static = { type: 'sprite', assetKey: 'l5', sizeRatios: { width: 1, height: 1 } };
const l6Static = { type: 'sprite', assetKey: 'l6', sizeRatios: { width: 1, height: 1 } };

const sStatic = { type: 'sprite', assetKey: 's', sizeRatios: { width: 1, height: 1 } };
const wStatic = { type: 'sprite', assetKey: 'w', sizeRatios: { width: 1.12, height: 1.12 } };

const m2Static = {
	type: 'sprite',
	assetKey: 'w',
	sizeRatios: { width: 0.88, height: 0.88 },
};
const m4Static = {
	type: 'sprite',
	assetKey: 'w',
	sizeRatios: { width: 0.88, height: 0.88 },
};
const m5Static = { type: 'sprite', assetKey: 'w', sizeRatios: { width: 1, height: 1 } };
const m7Static = { type: 'sprite', assetKey: 'w', sizeRatios: { width: 1, height: 1 } };
const m10Static = { type: 'sprite', assetKey: 'w', sizeRatios: { width: 1, height: 1 } };

const wSizeRatios = { width: 1.5 * 0.9, height: SPECIAL_SYMBOL_SIZE * 1.15 };
const sSizeRatios = { width: 2.5, height: SPECIAL_SYMBOL_SIZE * 2.3 };

const backgroundLowStatic = {
	type: 'spine',
	assetKey: 'M',
	animationName: 'low_multiplier_static',
	sizeRatios: { width: M_SIZE, height: M_SIZE },
};
const backgroundMidStatic = {
	type: 'spine',
	assetKey: 'M',
	animationName: 'mid_multiplier_static',
	sizeRatios: { width: M_SIZE, height: M_SIZE },
};
const backgroundHighStatic = {
	type: 'spine',
	assetKey: 'M',
	animationName: 'high_multiplier_static',
	sizeRatios: { width: M_SIZE, height: M_SIZE },
};

const backgroundLow = {
	explosion,
	win: {
		type: 'spine',
		assetKey: 'M',
		animationName: 'low_multiplier_pay',
		sizeRatios: { width: M_SIZE, height: M_SIZE },
	},
	postWinStatic: backgroundLowStatic,
	static: backgroundLowStatic,
	spin: {
		type: 'spine',
		assetKey: 'M',
		animationName: 'low_multiplier_static',
		sizeRatios: { width: M_SIZE, height: M_SIZE },
	},
	land: {
		type: 'spine',
		assetKey: 'M',
		animationName: 'low_multiplier_land',
		sizeRatios: { width: M_SIZE, height: M_SIZE },
	},
};

const backgroundMid = {
	explosion,
	win: {
		type: 'spine',
		assetKey: 'M',
		animationName: 'mid_multiplier_pay',
		sizeRatios: { width: M_SIZE, height: M_SIZE },
	},
	postWinStatic: backgroundMidStatic,
	static: backgroundMidStatic,
	spin: {
		type: 'spine',
		assetKey: 'M',
		animationName: 'mid_multiplier_static',
		sizeRatios: { width: M_SIZE, height: M_SIZE },
	},
	land: {
		type: 'spine',
		assetKey: 'M',
		animationName: 'mid_multiplier_land',
		sizeRatios: { width: M_SIZE, height: M_SIZE },
	},
};

const backgroundHigh = {
	explosion,
	win: {
		type: 'spine',
		assetKey: 'M',
		animationName: 'high_multiplier_pay',
		sizeRatios: { width: M_SIZE, height: M_SIZE },
	},
	postWinStatic: backgroundHighStatic,
	static: backgroundHighStatic,
	spin: {
		type: 'spine',
		assetKey: 'M',
		animationName: 'high_multiplier_static',
		sizeRatios: { width: M_SIZE, height: M_SIZE },
	},
	land: {
		type: 'spine',
		assetKey: 'M',
		animationName: 'high_multiplier_land',
		sizeRatios: { width: M_SIZE, height: M_SIZE },
	},
};

// explosion
// landing
// post_win_static
// spin
// static
// win

export const SYMBOL_INFO_MAP = {
	H1: createAnimatedSymbol('H1', HIGH_SYMBOL_SIZE),
H2: createAnimatedSymbol('H2', HIGH_SYMBOL_SIZE),
H3: createAnimatedSymbol('H3', HIGH_SYMBOL_SIZE),
H4: createAnimatedSymbol('H4', HIGH_SYMBOL_SIZE),
L1: createAnimatedSymbol('L1', LOW_SYMBOL_SIZE),
L2: createAnimatedSymbol('L2', LOW_SYMBOL_SIZE),
L3: createAnimatedSymbol('L3', LOW_SYMBOL_SIZE),
L4: createAnimatedSymbol('L4', LOW_SYMBOL_SIZE),
L5: createAnimatedSymbol('L5', LOW_SYMBOL_SIZE),
L6: createAnimatedSymbol('L6', LOW_SYMBOL_SIZE),
	W: {
		explosion,
		postWinStatic: {
			type: 'sprite',
			assetKey: 'explodedW.png',
			sizeRatios: { width: 0.85, height: 0.85 },
		},
		static: wStatic,
		spin: wStatic,
		win: { type: 'spine', assetKey: 'W', animationName: 'wild_dynamite', sizeRatios: wSizeRatios },
		land: {
			type: 'spine',
			assetKey: 'W',
			animationName: 'wild_dynamite_land',
			sizeRatios: wSizeRatios,
		},
	},
	S: {
		explosion,
		postWinStatic: sStatic,
		static: sStatic,
		spin: {
			type: 'spine',
			assetKey: 'S',
			animationName: 'spin',
			sizeRatios: sSizeRatios,
		},
		win: { type: 'spine', assetKey: 'S', animationName: 'win', sizeRatios: sSizeRatios },
		land: {
			type: 'spine',
			assetKey: 'S',
			animationName: 'landing',
			sizeRatios: sSizeRatios,
		},
	},
	M_2: {
		explosion,
		postWinStatic: m2Static,
		static: m2Static,
		spin: m2Static,
		win: {
			type: 'spine',
			assetKey: 'M',
			animationName: '2x',
			sizeRatios: { width: M_SIZE, height: M_SIZE },
		},
		land: {
			type: 'spine',
			assetKey: 'M',
			animationName: '2x_land',
			sizeRatios: { width: M_SIZE, height: M_SIZE },
		},
	},
	M_4: {
		explosion,
		postWinStatic: m4Static,
		static: m4Static,
		spin: m4Static,
		win: {
			type: 'spine',
			assetKey: 'M',
			animationName: '4x',
			sizeRatios: { width: M_SIZE, height: M_SIZE },
		},
		land: {
			type: 'spine',
			assetKey: 'M',
			animationName: '4x_land',
			sizeRatios: { width: M_SIZE, height: M_SIZE },
		},
	},
	M_5: {
		explosion,
		postWinStatic: m5Static,
		static: m5Static,
		spin: m5Static,
		win: {
			type: 'spine',
			assetKey: 'M',
			animationName: '5x',
			sizeRatios: { width: M_SIZE, height: M_SIZE },
		},
		land: {
			type: 'spine',
			assetKey: 'M',
			animationName: '5x_land',
			sizeRatios: { width: M_SIZE, height: M_SIZE },
		},
	},
	M_7: {
		explosion,
		postWinStatic: m7Static,
		static: m7Static,
		spin: m7Static,
		win: {
			type: 'spine',
			assetKey: 'M',
			animationName: '7x',
			sizeRatios: { width: M_SIZE, height: M_SIZE },
		},
		land: {
			type: 'spine',
			assetKey: 'M',
			animationName: '7x_land',
			sizeRatios: { width: M_SIZE, height: M_SIZE },
		},
	},
	M_10: {
		explosion,
		postWinStatic: m10Static,
		static: m10Static,
		spin: m10Static,
		win: {
			type: 'spine',
			assetKey: 'M',
			animationName: '10x',
			sizeRatios: { width: M_SIZE, height: M_SIZE },
		},
		land: {
			type: 'spine',
			assetKey: 'M',
			animationName: '10x_land',
			sizeRatios: { width: M_SIZE, height: M_SIZE },
		},
	},
	M_25: {
		explosion,
		postWinStatic: m10Static,
		static: m10Static,
		spin: m10Static,
		win: {
			type: 'spine',
			assetKey: 'M',
			animationName: '10x',
			sizeRatios: { width: M_SIZE, height: M_SIZE },
		},
		land: {
			type: 'spine',
			assetKey: 'M',
			animationName: '10x',
			sizeRatios: { width: M_SIZE, height: M_SIZE },
		},
	},
	M_TAKEN_2: backgroundLow,
	M_TAKEN_4: backgroundLow,
	M_TAKEN_5: backgroundMid,
	M_TAKEN_7: backgroundMid,
	M_TAKEN_10: backgroundHigh,
} as const;

export const MULTIPLIER_BACKGROUND_INFO_MAP = {
	M_2: backgroundLow,
	M_4: backgroundLow,
	M_5: backgroundMid,
	M_7: backgroundMid,
	M_10: backgroundHigh,
};

export const SCATTER_LAND_SOUND_MAP = {
	1: 'sfx_scatter_stop_1',
	2: 'sfx_scatter_stop_2',
	3: 'sfx_scatter_stop_3',
	4: 'sfx_scatter_stop_4',
	5: 'sfx_scatter_stop_5',
} as const;
