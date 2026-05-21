
import root from '../root.js';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env, set_safe_public_env } from '../../../../../node_modules/.pnpm/@sveltejs+kit@2.17.3_@sveltejs+vite-plugin-svelte@5.1.0_svelte@5.20.5_vite@6.2.0_@types_9a51812b53a704ff5507adafec02c9aa/node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hash_routing: false,
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t\n\n\t\t<!-- Neuton font -->\n\t\t<link\n\t\t\thref=\"https://fonts.googleapis.com/css2?family=Neuton:wght@400;700;800&display=swap\"\n\t\t\trel=\"stylesheet\"\n\t\t/>\n\t\t<link\n\t\t\thref=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap\"\n\t\t\trel=\"stylesheet\"\n\t\t/>\n\n\t\t<style>\n\t\t\thtml,\n\t\t\tbody {\n\t\t\t\tmargin: 0;\n\t\t\t\tpadding: 0;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\toverflow: hidden;\n\t\t\t\tbackground-color: #14001f;\n\t\t\t\tfont-family: 'Neuton', serif;\n\t\t\t}\n\n\t\t\t#startup-loader {\n\t\t\t\tposition: fixed;\n\t\t\t\tinset: 0;\n\t\t\t\tbackground-color: #14001f;\n\t\t\t\tz-index: 9999999;\n\t\t\t\tdisplay: grid;\n\t\t\t\tplace-items: center;\n\t\t\t\tisolation: isolate;\n\t\t\t}\n\n\t\t\t.startup-bg {\n\t\t\t\tposition: absolute;\n\t\t\t\tinset: 0;\n\t\t\t\tbackground-image: url('" + assets + "/assets/sprites/symbolsStatic/gameloaderBg.png');\n\t\t\t\tbackground-size: cover;\n\t\t\t\tbackground-position: center;\n\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t\tfilter: saturate(1.05) contrast(1.05);\n\t\t\t}\n\n\t\t\t.startup-ui {\n\t\t\t\tposition: relative;\n\t\t\t\tz-index: 1;\n\t\t\t\twidth: min(560px, 84vw);\n\t\t\t\tdisplay: grid;\n\t\t\t\tgap: 10px;\n\t\t\t\tjustify-items: center;\n\t\t\t\talign-self: end;\n\t\t\t\tmargin-bottom: 9vh;\n\t\t\t\tpointer-events: none;\n\t\t\t\t--startup-progress: 0%;\n\t\t\t}\n\n\t\t\t.startup-progress-text {\n\t\t\t\tcolor: rgba(255, 255, 255, 0.95);\n\t\t\t\tfont-family: 'Cinzel', serif;\n\t\t\t\tfont-weight: 700;\n\t\t\t\tletter-spacing: 0.12em;\n\t\t\t\tfont-size: clamp(12px, 2.5vw, 16px);\n\t\t\t\ttext-transform: uppercase;\n\t\t\t\ttext-shadow: 0 2px 14px rgba(0, 0, 0, 0.65);\n\t\t\t}\n\n\t\t\t.startup-progress-track {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 14px;\n\t\t\t\tborder-radius: 999px;\n\t\t\t\tbackground: rgba(0, 0, 0, 0.35);\n\t\t\t\tbox-shadow:\n\t\t\t\t\t0 0 0 1px rgba(255, 255, 255, 0.22) inset,\n\t\t\t\t\t0 10px 22px rgba(0, 0, 0, 0.35);\n\t\t\t\toverflow: hidden;\n\t\t\t\tbackdrop-filter: blur(2px);\n\t\t\t}\n\n\t\t\t.startup-progress-fill {\n\t\t\t\theight: 100%;\n\t\t\t\twidth: var(--startup-progress);\n\t\t\t\tborder-radius: 999px;\n\t\t\t\tbackground: linear-gradient(90deg, rgba(255, 214, 102, 0.95), rgba(244, 155, 3, 0.95));\n\t\t\t\tbox-shadow: 0 0 18px rgba(255, 214, 102, 0.25);\n\t\t\t\ttransition: width 120ms linear;\n\t\t\t}\n\n\t\t\t@media (orientation: portrait) {\n\t\t\t\t.startup-bg {\n\t\t\t\t\tbackground-image: url('" + assets + "/assets/sprites/symbolsStatic/bgLoadingMobile.png');\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\n\t\t<meta name=\"viewport\" content=\"width=device-width\" />\n\t\t" + head + "\n\t</head>\n\n\t<body>\n\t\t<div id=\"startup-loader\">\n\t\t\t<div class=\"startup-bg\" aria-hidden=\"true\"></div>\n\t\t\t<div class=\"startup-ui\" aria-label=\"Loading\">\n\t\t\t\t<div class=\"startup-progress-text\" data-startup-progress-text>Loading 0%</div>\n\t\t\t\t<div class=\"startup-progress-track\" aria-hidden=\"true\">\n\t\t\t\t\t<div class=\"startup-progress-fill\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<script>\n\t\t\t(() => {\n\t\t\t\tconst loader = document.getElementById('startup-loader');\n\t\t\t\tif (!loader) return;\n\t\t\t\tconst ui = loader.querySelector('.startup-ui');\n\t\t\t\tconst fill = loader.querySelector('.startup-progress-fill');\n\t\t\t\tconst text = loader.querySelector('[data-startup-progress-text]');\n\n\t\t\t\tconst clamp = (value, min, max) => Math.max(min, Math.min(max, value));\n\t\t\t\tconst setProgress = (value) => {\n\t\t\t\t\tconst percent = clamp(Math.round(Number(value) || 0), 0, 100);\n\t\t\t\t\tif (ui) ui.style.setProperty('--startup-progress', `${percent}%`);\n\t\t\t\t\tif (fill) fill.style.width = `${percent}%`;\n\t\t\t\t\tif (text) text.textContent = `Loading ${percent}%`;\n\t\t\t\t};\n\n\t\t\t\twindow.__setStartupLoaderProgress = setProgress;\n\t\t\t\tsetProgress(0);\n\t\t\t})();\n\t\t</script>\n\t\t<div>" + body + "</div>\n\t</body>\n</html>\n",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "es83v7"
};

export async function get_hooks() {
	let handle;
	let handleFetch;
	let handleError;
	let init;
	({ handle, handleFetch, handleError, init } = await import("../../../src/hooks.server.ts"));

	let reroute;
	let transport;
	

	return {
		handle,
		handleFetch,
		handleError,
		init,
		reroute,
		transport
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation, set_safe_public_env };
