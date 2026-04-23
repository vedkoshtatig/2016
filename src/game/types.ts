import { type CascadingReelSymbolState } from 'utils-slots';
import type config from './config';
import type { Snippet } from 'svelte';
import type { ButtonProps } from 'components-pixi';
export type SymbolName = keyof typeof config.symbols;
export type RawSymbol = { name: SymbolName; multiplier?: number; scatter?: boolean };
export type BetMode = keyof typeof config.betModes;
export type GameType = keyof typeof config.paddingReels;

export const SYMBOL_STATES = [
	'static',
	'spin',
	'land',
	'win',
	'postWinStatic',
	'explosion',
] as const;

export type SymbolState = CascadingReelSymbolState | (typeof SYMBOL_STATES)[number];

export type Position = {
	reel: number;
	row: number;
};
export type EmitterEventModal =
	| { type: 'soundPressGeneral' }
	| { type: 'buyBonusConfirm' }
	| { type: 'bet' }
	| { type: 'autoBet' };
export type EmitterEventHotKey = { type: 'hotKey'; key: string; action: 'keyUp' | 'keyDown' };
export type ButtonIcon =
	| 'decrease'
	| 'increase'
	| 'menu'
	| 'turbo'
	| 'autoSpin'
	| 'autoSpinPortrait'
	| 'payTable'
	| 'info'
	| 'infoPortrait'
	| 'settings'
	| 'soundOn'
	| 'soundOff'
	| 'menuExit';
export type LayoutUiProps = {
	gameName: Snippet;
	logo: Snippet;
	amountBalance: Snippet<[{ stacked?: boolean; center?: boolean }]>;
	amountWin: Snippet<[{ stacked?: boolean; center?: boolean }]>;
	amountBet: Snippet<[{ stacked?: boolean; center?: boolean }]>;
	buttonBuyBonus: Snippet<[Partial<ButtonProps>]>;
	buttonBet: Snippet<[Partial<ButtonProps>]>;
	buttonTurbo: Snippet<[Partial<ButtonProps>]>;
	buttonAutoSpin: Snippet<
		[
			Partial<ButtonProps> & {
				iconName?: ButtonProps['icon'];
			},
		]
	>;
	buttonIncrease: Snippet<[Partial<ButtonProps>]>;
	buttonDecrease: Snippet<[Partial<ButtonProps>]>;
	buttonMenu: Snippet<[Partial<ButtonProps>]>;
	buttonMenuClose: Snippet<[Partial<ButtonProps>]>;
	buttonPayTable: Snippet<[Partial<ButtonProps>]>;
	buttonGameRules: Snippet<[Partial<ButtonProps>]>;
	buttonSettings: Snippet<[Partial<ButtonProps>]>;
	buttonSoundSwitch: Snippet<[Partial<ButtonProps>]>;
};
