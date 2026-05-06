import { createAsset } from 'pixi-svelte';

import img from './Board-open.webp';
import rawAtlas from './Board-open.atlas?raw';
import spine from './Board-open.json';

export default createAsset({ img, rawAtlas, spine });