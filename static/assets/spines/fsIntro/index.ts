import { createAsset } from 'pixi-svelte';

import img from './board_popup.webp';
import rawAtlas from './board_popup.atlas?raw';
import fsIntro from './board_popup.json';
import fsIntroNumber from './board_popup_number.json';
import fsOutroNumber from './fs_total_number.json';

export default createAsset({
	img,
	rawAtlas,
	spines: {
		fsIntro,
		fsIntroNumber,
		fsOutroNumber
	},
});
