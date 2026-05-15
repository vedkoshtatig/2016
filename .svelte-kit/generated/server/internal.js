
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
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\r\n<html lang=\"en\">\r\n\t<head>\r\n\t\t<meta charset=\"utf-8\" />\r\n\t\t<link rel=\"icon\" href=\"" + assets + "/favicon.svg\" />\r\n\r\n\t\t<!-- Neuton font -->\r\n\t\t<link\r\n\t\t\thref=\"https://fonts.googleapis.com/css2?family=Neuton:wght@400;700;800&display=swap\"\r\n\t\t\trel=\"stylesheet\"\r\n\t\t/>\r\n\t\t<link\r\n\t\t\thref=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap\"\r\n\t\t\trel=\"stylesheet\"\r\n\t\t/>\r\n\r\n\t\t<style>\r\n\t\t\thtml,\r\n\t\t\tbody {\r\n\t\t\t\tmargin: 0;\r\n\t\t\t\tpadding: 0;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 100%;\r\n\t\t\t\toverflow: hidden;\r\n\t\t\t\tbackground-color: #14001f;\r\n\t\t\t\tfont-family: 'Neuton', serif;\r\n\t\t\t}\r\n\r\n\t\t\t#startup-loader {\r\n\t\t\t\tposition: fixed;\r\n\t\t\t\tinset: 0;\r\n\t\t\t\tbackground-color: #14001f;\r\n\t\t\t\tz-index: 9999999;\r\n\t\t\t}\r\n\r\n\t\t\t.startup-bg {\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\tinset: 0;\r\n\t\t\t\toverflow: hidden;\r\n\t\t\t}\r\n\r\n\t\t\t.startup-bg::before {\r\n\t\t\t\tcontent: '';\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\tleft: 50%;\r\n\t\t\t\ttop: 50%;\r\n\t\t\t\t--cover: calc(100vw / 960);\r\n\t\t\t\twidth: calc(540px * var(--cover));\r\n\t\t\t\theight: calc(960px * var(--cover));\r\n\t\t\t\tbackground-image: url('" + assets + "/assets/sprites/ui-0.png');\r\n\t\t\t\tbackground-repeat: no-repeat;\r\n\t\t\t\tbackground-size: calc(2033px * var(--cover)) calc(2039px * var(--cover));\r\n\t\t\t\tbackground-position: calc(-1186px * var(--cover)) calc(-963px * var(--cover));\r\n\t\t\t\ttransform: translate(-50%, -50%) rotate(-90deg);\r\n\t\t\t\ttransform-origin: center;\r\n\t\t\t}\r\n\r\n\t\t\t@supports (width: max(1px, 2px)) {\r\n\t\t\t\t.startup-bg::before {\r\n\t\t\t\t\t--cover: max(calc(100vw / 960), calc(100vh / 540));\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t.startup-bg::after {\r\n\t\t\t\tcontent: '';\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\tinset: 0;\r\n\t\t\t\tbackground: rgba(0, 0, 0, 0.15);\r\n\t\t\t}\r\n\t\t</style>\r\n\r\n\t\t<meta name=\"viewport\" content=\"width=device-width\" />\r\n\t\t" + head + "\r\n\t</head>\r\n\r\n\t<body>\r\n\t\t<div id=\"startup-loader\">\r\n\t\t\t<div class=\"startup-bg\" aria-hidden=\"true\"></div>\r\n\t\t</div>\r\n\t\t<div>" + body + "</div>\r\n\t</body>\r\n</html>\r\n",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "1p6rd8c"
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
