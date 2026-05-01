import { createAsset } from 'pixi-svelte';

import img from './Bonus-Open.webp';
import rawAtlas from './Bonus-Open.atlas?raw';
import spine from './Bonus-Open.json';

export default createAsset({ img, rawAtlas, spine });