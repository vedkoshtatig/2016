// extendedMeta.ts
import { DEFAULT_BET_MODE_META } from 'state-shared/src/constants';

export const EXTENDED_BET_MODE_META = {
	...DEFAULT_BET_MODE_META,

	SUPERBONUS: {
		mode: 'SUPERBONUS',
		costMultiplier: 200,
		type: 'buy',
		parent: '',
		children: '',
		assets: {
			icon: '',
			volatility: '',
			button: '',
			dialogImage: '',
			dialogVolatility: '',
		},
		text: {
			title: 'SUPER BONUS',
			dialog: 'Special feature',
			button: 'BUY',
			tickerIdle: '',
			tickerSpin: '',
			description: '',
			betAmountLabel: '',
		},
		maxWin: 5000,
	},
};