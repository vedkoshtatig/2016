
import root from '../root.js';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env, set_safe_public_env } from '../../../../../node_modules/.pnpm/@sveltejs+kit@2.17.3_@svelt_cea867823881517172a2960bf9594de1/node_modules/@sveltejs/kit/src/runtime/shared-server.js';

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
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\r\n<html lang=\"en\">\r\n\t<head>\r\n\t\t<meta charset=\"utf-8\" />\r\n\t\t<link rel=\"icon\" href=\"" + assets + "/favicon.svg\" />\r\n\r\n\t\t<!-- Neuton font -->\r\n\t\t<link\r\n\t\t\thref=\"https://fonts.googleapis.com/css2?family=Neuton:wght@400;700;800&display=swap\"\r\n\t\t\trel=\"stylesheet\"\r\n\t\t/>\r\n\t\t<link\r\n\t\t\thref=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap\"\r\n\t\t\trel=\"stylesheet\"\r\n\t\t/>\r\n\r\n\t\t<style>\r\n\t\t\thtml,\r\n\t\t\tbody {\r\n\t\t\t\tmargin: 0;\r\n\t\t\t\tpadding: 0;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 100%;\r\n\t\t\t\toverflow: hidden;\r\n\t\t\t\tbackground-color: #14001f;\r\n\t\t\t\tfont-family: 'Neuton', serif;\r\n\t\t\t}\r\n\r\n\t\t\t#startup-loader {\r\n\t\t\t\tposition: fixed;\r\n\t\t\t\tinset: 0;\r\n\t\t\t\tbackground-color: #14001f;\r\n\t\t\t\tz-index: 9999999;\r\n\t\t\t\tdisplay: grid;\r\n\t\t\t\tplace-items: center;\r\n\t\t\t\tisolation: isolate;\r\n\t\t\t}\r\n\r\n\t\t\t.startup-bg {\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\tinset: 0;\r\n\t\t\t\tbackground-image: url('" + assets + "/assets/sprites/symbolsStatic/gameloaderBg.png');\r\n\t\t\t\tbackground-size: cover;\r\n\t\t\t\tbackground-position: center;\r\n\t\t\t\tbackground-repeat: no-repeat;\r\n\t\t\t\tfilter: saturate(1.05) contrast(1.05);\r\n\t\t\t}\r\n\r\n\t\t\t.startup-ui {\r\n\t\t\t\tposition: relative;\r\n\t\t\t\tz-index: 1;\r\n\t\t\t\twidth: min(560px, 84vw);\r\n\t\t\t\tdisplay: grid;\r\n\t\t\t\tgap: 10px;\r\n\t\t\t\tjustify-items: center;\r\n\t\t\t\talign-self: end;\r\n\t\t\t\tmargin-bottom: 9vh;\r\n\t\t\t\tpointer-events: none;\r\n\t\t\t\t--startup-progress: 0%;\r\n\t\t\t}\r\n\r\n\t\t\t.startup-progress-text {\r\n\t\t\t\tcolor: rgba(255, 255, 255, 0.95);\r\n\t\t\t\tfont-family: 'Cinzel', serif;\r\n\t\t\t\tfont-weight: 700;\r\n\t\t\t\tletter-spacing: 0.12em;\r\n\t\t\t\tfont-size: clamp(12px, 2.5vw, 16px);\r\n\t\t\t\ttext-transform: uppercase;\r\n\t\t\t\ttext-shadow: 0 2px 14px rgba(0, 0, 0, 0.65);\r\n\t\t\t}\r\n\r\n\t\t\t.startup-progress-track {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 14px;\r\n\t\t\t\tborder-radius: 999px;\r\n\t\t\t\tbackground: rgba(0, 0, 0, 0.35);\r\n\t\t\t\tbox-shadow:\r\n\t\t\t\t\t0 0 0 1px rgba(255, 255, 255, 0.22) inset,\r\n\t\t\t\t\t0 10px 22px rgba(0, 0, 0, 0.35);\r\n\t\t\t\toverflow: hidden;\r\n\t\t\t\tbackdrop-filter: blur(2px);\r\n\t\t\t}\r\n\r\n\t\t\t.startup-progress-fill {\r\n\t\t\t\theight: 100%;\r\n\t\t\t\twidth: var(--startup-progress);\r\n\t\t\t\tborder-radius: 999px;\r\n\t\t\t\tbackground: linear-gradient(90deg, rgba(255, 214, 102, 0.95), rgba(244, 155, 3, 0.95));\r\n\t\t\t\tbox-shadow: 0 0 18px rgba(255, 214, 102, 0.25);\r\n\t\t\t\ttransition: width 120ms linear;\r\n\t\t\t}\r\n\r\n\t\t\t@media (orientation: portrait) {\r\n\t\t\t\t.startup-bg {\r\n\t\t\t\t\tbackground-image: url('" + assets + "/assets/sprites/symbolsStatic/bgLoadingMobile.png');\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t</style>\r\n\r\n\t\t<meta name=\"viewport\" content=\"width=device-width\" />\r\n\t\t" + head + "\r\n\t</head>\r\n\r\n\t<body>\r\n\t\t<div id=\"startup-loader\">\r\n\t\t\t<div class=\"startup-bg\" aria-hidden=\"true\"></div>\r\n\t\t\t<div class=\"startup-ui\" aria-label=\"Loading\">\r\n\t\t\t\t<div class=\"startup-progress-text\" data-startup-progress-text>Loading 0%</div>\r\n\t\t\t\t<div class=\"startup-progress-track\" aria-hidden=\"true\">\r\n\t\t\t\t\t<div class=\"startup-progress-fill\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<script>\r\n\t\t\t(() => {\r\n\t\t\t\tconst loader = document.getElementById('startup-loader');\r\n\t\t\t\tif (!loader) return;\r\n\t\t\t\tconst ui = loader.querySelector('.startup-ui');\r\n\t\t\t\tconst fill = loader.querySelector('.startup-progress-fill');\r\n\t\t\t\tconst text = loader.querySelector('[data-startup-progress-text]');\r\n\r\n\t\t\t\tconst clamp = (value, min, max) => Math.max(min, Math.min(max, value));\r\n\t\t\t\tconst setProgress = (value) => {\r\n\t\t\t\t\tconst percent = clamp(Math.round(Number(value) || 0), 0, 100);\r\n\t\t\t\t\tif (ui) ui.style.setProperty('--startup-progress', `${percent}%`);\r\n\t\t\t\t\tif (fill) fill.style.width = `${percent}%`;\r\n\t\t\t\t\tif (text) text.textContent = `Loading ${percent}%`;\r\n\t\t\t\t};\r\n\r\n\t\t\t\twindow.__setStartupLoaderProgress = setProgress;\r\n\t\t\t\tsetProgress(0);\r\n\t\t\t})();\r\n\t\t</script>\r\n\t\t<div>" + body + "</div>\r\n\t</body>\r\n</html>\r\n",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "1f8l5as"
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
