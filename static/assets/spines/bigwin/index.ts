import { createAsset } from 'pixi-svelte';

import img from './win_banners.png';
import rawAtlas from './win_banners.atlas?raw';
import spine from './win_banners.json';

export default createAsset({ img, rawAtlas, spine });