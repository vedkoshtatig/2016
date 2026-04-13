import { createAsset } from 'pixi-svelte';

// 🔥 HIGH symbols
import hImg from './hsymbols.png';
import hAtlas from './hsymbols.atlas?raw';

// 🔥 LOW symbols
import lImg from './lsymbols.png';
import lAtlas from './lsymbols.atlas?raw';

// 🔥 Spine JSONs
import H1 from './h1.json';
import H2 from './h2.json';
import H3 from './h3.json';
import H4 from './h4.json';

import L1 from './l1.json';
import L2 from './l2.json';
import L3 from './l3.json';
import L4 from './l4.json';
import L5 from './l5.json';
import L6 from './l6.json';

export default createAsset({
	atlases: [
		{
			name: 'highSymbols',
			img: hImg,
			rawAtlas: hAtlas,
		},
		{
			name: 'lowSymbols',
			img: lImg,
			rawAtlas: lAtlas,
		},
	],

	spines: {
		H1,
		H2,
		H3,
		H4,
		L1,
		L2,
		L3,
		L4,
		L5,
		L6,
	},
});