<script lang="ts" module>
	import type { RectangleProps, SpriteProps } from 'pixi-svelte';

	export type Props = (RectangleProps | SpriteProps) & {
		assetKey?: string;
	};
</script>

<script lang="ts">
	import { Rectangle, Sprite } from 'pixi-svelte';

	const { assetKey, ...rest } = $props<Props>();
</script>

{#if assetKey}
	<!-- Sprite mode (same pattern as SymbolSprite) -->
	<Sprite
		key={assetKey}
		anchor={rest.anchor ?? 0.5}
		{...rest}
	/>
{:else}
	<!-- Default fallback -->
	<!-- <Rectangle borderRadius={50} {...rest} /> -->
	
{/if}


 <!-- <script lang="ts" module>
	import { Rectangle, type RectangleProps } from 'pixi-svelte';

	export type Props = RectangleProps;
</script>

<script lang="ts">
	const props: Props = $props();
</script>

<Rectangle borderRadius={50} {...props} /> -->

<!-- ADD YOUR DESIGN -->

<!-- <script lang="ts" module>
	import { Sprite, type SpriteProps } from 'pixi-svelte';
	import type { sharedAssetsPixi } from 'constants-shared/assets';

	export type Props = SpriteProps & {
		key: keyof typeof sharedAssetsPixi;
	};
</script>

<script lang="ts">
	const props: Props = $props();
</script>

<Sprite {...props} /> --> 
