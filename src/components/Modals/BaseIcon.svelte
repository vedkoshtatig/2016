<script lang="ts" module>
	type SpriteFrame = {
		frame: { x: number; y: number; w: number; h: number };
		rotated: boolean;
		trimmed: boolean;
		spriteSourceSize: { x: number; y: number; w: number; h: number };
		sourceSize: { w: number; h: number };
	};

	type SpriteSheet = {
		frames: Record<string, SpriteFrame>;
		meta?: { size?: { w: number; h: number } };
	};

	let ui0: SpriteSheet | null = null;
	let ui1: SpriteSheet | null = null;
	let ui0Img: HTMLImageElement | null = null;
	let ui1Img: HTMLImageElement | null = null;
	let loadPromise: Promise<void> | null = null;

	const loadImage = (src: string) =>
		new Promise<HTMLImageElement>((resolve, reject) => {
			const img = new Image();
			img.onload = () => resolve(img);
			img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
			img.src = src;
		});

	const ensureLoaded = (assetsBase: string) => {
		if (loadPromise) return loadPromise;
		loadPromise = (async () => {
			const [ui0Res, ui1Res] = await Promise.all([
				fetch(`${assetsBase}/assets/sprites/ui-0.json`),
				fetch(`${assetsBase}/assets/sprites/ui-1.json`),
			]);

			if (!ui0Res.ok) throw new Error(`Failed to load ui-0.json (${ui0Res.status})`);
			if (!ui1Res.ok) throw new Error(`Failed to load ui-1.json (${ui1Res.status})`);

			[ui0, ui1] = (await Promise.all([ui0Res.json(), ui1Res.json()])) as [SpriteSheet, SpriteSheet];

			[ui0Img, ui1Img] = await Promise.all([
				loadImage(`${assetsBase}/assets/sprites/ui-0.png`),
				loadImage(`${assetsBase}/assets/sprites/ui-1.png`),
			]);
		})();
		return loadPromise;
	};

	const getBasename = (value: string) => {
		const cleaned = value.split('?')[0] ?? value;
		const parts = cleaned.split('/');
		return parts[parts.length - 1] ?? cleaned;
	};

	const resolveSprite = (value: string) => {
		const basename = getBasename(value);
		const stem = basename.replace(/\.png$/i, '');
		const candidates = [
			stem,
			stem.length ? `${stem[0].toLowerCase()}${stem.slice(1)}` : stem,
			stem.toLowerCase(),
		].filter(Boolean);

		for (const key of candidates) {
			const f0 = ui0?.frames?.[key];
			if (f0 && ui0Img) return { frame: f0, img: ui0Img };
			const f1 = ui1?.frames?.[key];
			if (f1 && ui1Img) return { frame: f1, img: ui1Img };
		}

		return null;
	};
</script>

<script lang="ts">
	import { assets } from '$app/paths';

	type Props = {
		width: string;
		height?: string;
		normal?: string;
		hover?: string;
		pressed?: string;
		border?: string;
		borderRadius?: string;
		disabled?: boolean;
		className?: string;
		fit?: 'cover' | 'contain';
		backgroundColor?: string;
		onclick?: () => void;
	};

	const {
		width,
		height,
		normal = '',
		hover,
		pressed,
		border = 'none',
		borderRadius = '10px',
		disabled = false,
		className = '',
		fit = 'cover',
		backgroundColor = 'transparent',
		onclick,
	}: Props = $props();

	let isHovered = $state(false);
	let isPressed = $state(false);

	let canvasEl = $state<HTMLCanvasElement | null>(null);
	let isSprite = $state(false);
	let aspectRatio = $state<string | null>(null);

	const currentImage = $derived.by(() => {
		if (disabled) return normal;
		if (isPressed && pressed) return pressed;
		if (isHovered && hover) return hover;
		return normal;
	});

	const spriteCandidate = $derived.by(() => currentImage.includes('uiSlotsAssetsBespoke/'));

	let drawToken = 0;
	const drawToCanvas = async () => {
		if (!canvasEl) return;
		const imgKey = currentImage;
		if (!imgKey) {
			isSprite = false;
			aspectRatio = null;
			return;
		}

		const token = ++drawToken;
		try {
			await ensureLoaded(assets);
			if (token !== drawToken) return;

			const resolved = resolveSprite(imgKey);
			if (!resolved) {
				isSprite = false;
				aspectRatio = null;
				return;
			}

			isSprite = true;
			aspectRatio = `${resolved.frame.sourceSize.w} / ${resolved.frame.sourceSize.h}`;

			const dpr = window.devicePixelRatio || 1;
			const targetW = resolved.frame.sourceSize.w;
			const targetH = resolved.frame.sourceSize.h;

			canvasEl.width = Math.max(1, Math.round(targetW * dpr));
			canvasEl.height = Math.max(1, Math.round(targetH * dpr));

			const ctx = canvasEl.getContext('2d');
			if (!ctx) return;

			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			ctx.clearRect(0, 0, targetW, targetH);

			const atlasW = resolved.frame.rotated ? resolved.frame.frame.h : resolved.frame.frame.w;
			const atlasH = resolved.frame.rotated ? resolved.frame.frame.w : resolved.frame.frame.h;

			if (resolved.frame.rotated) {
				ctx.save();
				ctx.translate(
					resolved.frame.spriteSourceSize.x,
					resolved.frame.spriteSourceSize.y + resolved.frame.spriteSourceSize.h,
				);
				ctx.rotate(-Math.PI / 2);
				ctx.drawImage(
					resolved.img,
					resolved.frame.frame.x,
					resolved.frame.frame.y,
					atlasW,
					atlasH,
					0,
					0,
					atlasW,
					atlasH,
				);
				ctx.restore();
			} else {
				ctx.drawImage(
					resolved.img,
					resolved.frame.frame.x,
					resolved.frame.frame.y,
					atlasW,
					atlasH,
					resolved.frame.spriteSourceSize.x,
					resolved.frame.spriteSourceSize.y,
					resolved.frame.spriteSourceSize.w,
					resolved.frame.spriteSourceSize.h,
				);
			}
		} catch {
			isSprite = false;
			aspectRatio = null;
		}
	};

	$effect(() => {
		currentImage;
		canvasEl;
		void drawToCanvas();
	});
</script>

<div
	class={`rectangle ${className}`}
	style={`
		width: ${width};
		${height ? `height: ${height};` : aspectRatio ? `aspect-ratio: ${aspectRatio};` : ''}
		border: ${border};
		border-radius: ${borderRadius};
		background-color: ${backgroundColor};
		${isSprite || spriteCandidate ? 'background-image: none;' : `background-image: url(${currentImage});`}
		background-size: ${fit};
		background-position: center;
		background-repeat: no-repeat;
	`}
	on:mouseenter={() => (isHovered = true)}
	on:mouseleave={() => {
		isHovered = false;
		isPressed = false;
	}}
	on:pointerdown={() => (isPressed = true)}
	on:pointerup={() => (isPressed = false)}
	on:click={() => onclick?.()}
>
	<canvas bind:this={canvasEl} class="canvas" style={`display: ${isSprite ? 'block' : 'none'};`}></canvas>
</div>

<!-- <script lang="ts">
	import { sharedAssetsHtml as assets } from 'constants-shared/assets';

	type Icon = keyof typeof assets;

	type Props = {
		icon: Icon;
		hovered?: Icon;
		pressed?: Icon;
		size?: string;
		disabled?: boolean;
	};

	const { icon, hovered, pressed, size = '1rem', disabled = false }: Props = $props();

	const defaultUrl = $derived(assets[icon] as string);
	const hoveredUrl = $derived((hovered ? assets[hovered] : defaultUrl) as string);
	const pressedUrl = $derived((pressed ? assets[pressed] : defaultUrl) as string);

	let hoveredState = $state(false);
	let pressedState = $state(false);

	const src = $derived.by(() => {
		if (disabled) return defaultUrl;
		if (hoveredState) return hoveredUrl;
		if (pressedState) return pressedUrl;
		return defaultUrl;
	});
</script>

<div
	style="width: {size}; height: {size};"
	on:mouseenter={() => (hoveredState = true)}
	on:mouseleave={() => (hoveredState = false)}
	on:mousedown={() => (pressedState = true)}
	on:mouseup={() => (pressedState = false)}
	on:pointerdown={() => (pressedState = true)}
	on:pointerup={() => (pressedState = false)}
>
	<img {src} style="width: 100%; object-fit: cover;" alt={icon} />
</div> -->

<!-- <style lang="scss">
	.rectangle {
		width: var(--width-value);
		height: var(--height-value);
		background: var(--background-value);
		border: var(--border-value);
		border-radius: 10px;
	}
</style> -->

<style lang="scss">
	.rectangle {
		user-select: none;
		cursor: pointer;
	}

	.canvas {
		width: 100%;
		height: 100%;
		display: block;
		border-radius: inherit;
	}
</style>
