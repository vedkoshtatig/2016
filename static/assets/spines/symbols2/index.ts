import { createAsset } from 'pixi-svelte';

// ✅ Scatter
import scatterImg from './scatter.png';
import scatterAtlas from './scatter.atlas?raw';
import scatterJson from './scatter.json';

// ✅ Pokeball (⚠️ rename file to remove space!)
import pokeImg from './poke_ball.png';
import pokeAtlas from './poke_ball.atlas?raw';
import pokeJson from './poke_ball.json';

export default createAsset({
	// 🔥 Load textures also
	textures: {
		scatter: scatterImg,
		pokeball: pokeImg,
	},

	// 🔥 Load spine animations
	spines: {
		S: {
			atlas: scatterAtlas,
			skeleton: scatterJson,
			scale: 2,
		},
		M: {
			atlas: pokeAtlas,
			skeleton: pokeJson,
			scale: 2,
		},
	},
});