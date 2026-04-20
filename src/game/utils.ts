import _ from 'lodash';
import { stateBet } from 'state-shared';
import { createPlayBookUtils } from 'utils-book';
import { createGetEmptyPaddedBoard } from 'utils-slots';

import {
	SYMBOL_SIZE,
	REEL_PADDING,
	SYMBOL_INFO_MAP,
	BOARD_DIMENSIONS,
	MULTIPLIER_BACKGROUND_INFO_MAP,

} from './constants';
import { eventEmitter } from './eventEmitter';
import type { Bet, BookEventOfType } from './typesBookEvent';
import { bookEventHandlerMap } from './bookEventHandlerMap';
import type { RawSymbol, SymbolState } from './types';

// general utils
export const { getEmptyBoard } = createGetEmptyPaddedBoard({ reelsDimensions: BOARD_DIMENSIONS });
export const { playBookEvent, playBookEvents } = createPlayBookUtils({ bookEventHandlerMap });
export const playBet = async (bet: Bet) => {
	stateBet.winBookEventAmount = 0;
	await playBookEvents(bet.state);
	eventEmitter.broadcast({ type: 'stopButtonEnable' });
};

// resume bet
const BOOK_EVENT_TYPES_TO_RESERVE_FOR_SNAPSHOT = [
	'updateGlobalMult',
	'freeSpinTrigger',
	'updateFreeSpin',
	'setTotalWin',
];

export const convertTorResumableBet = (betToResume: Bet) => {
	const resumingIndex = Number(betToResume.event);
	const bookEventsBeforeResume = betToResume.state.filter(
		(_, eventIndex) => eventIndex < resumingIndex,
	);
	const bookEventsAfterResume = betToResume.state.filter(
		(_, eventIndex) => eventIndex >= resumingIndex,
	);

	const bookEventToCreateSnapshot: BookEventOfType<'createBonusSnapshot'> = {
		index: 0,
		type: 'createBonusSnapshot',
		bookEvents: bookEventsBeforeResume.filter((bookEvent) =>
			BOOK_EVENT_TYPES_TO_RESERVE_FOR_SNAPSHOT.includes(bookEvent.type),
		),
	};

	const stateToResume = [bookEventToCreateSnapshot, ...bookEventsAfterResume];

	return { ...betToResume, state: stateToResume };
};

// other utils
export const getSymbolX = (reelIndex: number) => SYMBOL_SIZE * (reelIndex + REEL_PADDING)*1.15	;
export const getSymbolY = (symbolIndexOfBoard: number) => (symbolIndexOfBoard + 0.5) * SYMBOL_SIZE;

export const getSymbolKey = ({ rawSymbol }: { rawSymbol: RawSymbol }) => {
	if (rawSymbol.multiplier !== undefined) {
		return `${rawSymbol.name}_${rawSymbol.multiplier}` as keyof typeof SYMBOL_INFO_MAP;
	}
	return rawSymbol.name as keyof typeof SYMBOL_INFO_MAP;
};

export const getSymbolInfo = ({
	rawSymbol,
	state,
}: {
	rawSymbol: RawSymbol;
	state: SymbolState;
}) => {
	//console.log(rawSymbol, state);

	const symbolKey = getSymbolKey({ rawSymbol });

	const symbolInfo = SYMBOL_INFO_MAP[symbolKey];

	// 1. direct match
	if (symbolInfo?.[state]) {
		return symbolInfo[state];
	}

	// 2. fallback for multiplier symbols (M_25 etc.)
	if (rawSymbol.name === 'M') {
		const fallback = SYMBOL_INFO_MAP.M_10; // default safe fallback

		if (fallback?.[state]) {
			return fallback[state];
		}
	}

	// 3. final safety fallback (avoid crash completely)
	const defaultSymbol =
		SYMBOL_INFO_MAP.L1 ?? Object.values(SYMBOL_INFO_MAP)[0];

	return defaultSymbol?.[state] ?? null;
};
export const getSymbolBackgroundInfo = ({
	rawSymbol,
	state,
}: {
	rawSymbol: RawSymbol;
	state: SymbolState;
}) => {
	if (rawSymbol.name === 'M') {
		const symbolKey = getSymbolKey({ rawSymbol }) as keyof typeof MULTIPLIER_BACKGROUND_INFO_MAP;

		// 1. try direct match
		const direct = MULTIPLIER_BACKGROUND_INFO_MAP[symbolKey];
		if (direct?.[state]) {
			return direct[state];
		}

		// 2. fallback: normalize multiplier buckets
		const multiplier = rawSymbol.multiplier;

		let fallbackKey: keyof typeof MULTIPLIER_BACKGROUND_INFO_MAP = 'M_10';

		if (multiplier <= 2) fallbackKey = 'M_2';
		else if (multiplier <= 4) fallbackKey = 'M_4';
		else if (multiplier <= 7) fallbackKey = 'M_7';
		else fallbackKey = 'M_10';

		const fallback = MULTIPLIER_BACKGROUND_INFO_MAP[fallbackKey];

		return fallback?.[state] ?? null;
	}

	return null;
};


// export const getSymbolInfo = ({
// 	rawSymbol,
// 	state,
// }: {
// 	rawSymbol: RawSymbol;
// 	state: SymbolState;
// }) => {
// 	console.log(rawSymbol,state)
// 	const symbolKey = getSymbolKey({ rawSymbol });
// 	return SYMBOL_INFO_MAP[symbolKey][state];
// };

// export const getSymbolBackgroundInfo = ({
// 	rawSymbol,
// 	state,
// }: {
// 	rawSymbol: RawSymbol;
// 	state: SymbolState;
// }) => {
// 	if (rawSymbol.name === 'M') {
// 		const symbolKey = getSymbolKey({ rawSymbol }) as keyof typeof MULTIPLIER_BACKGROUND_INFO_MAP;
// 		return MULTIPLIER_BACKGROUND_INFO_MAP[symbolKey][state];
// 	}

// 	return null;
// };

