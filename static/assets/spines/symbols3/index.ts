import { createAsset } from 'pixi-svelte';

import img from './2016_explosion.png';
import rawAtlas from './2016_explosion.atlas?raw';
import explosion from './2016_explosion.json';
import W from './W.json';

export default createAsset({
	img,
	rawAtlas,
	spines: {
		explosion,
		W,
	},
});
