<script lang="ts">
	import { Text } from 'pixi-svelte';
	import { WHITE } from 'constants-shared/colors';

	import UiSprite from './UiSprite.svelte';
	import { UI_BASE_FONT_SIZE } from '../game/constants';
	import { bookEventHandlerMap } from '../game/bookEventHandlerMap';

	type Props = {
		label: string;
		value: string;
		tiled?: boolean;
		stacked?: boolean;
		borderRadius?: number;   // 👈 add this
		labelColor?: string;
		textColor?:string;
	};

	const props: Props = $props();

	const labelStyle = {
		fontFamily: 'proxima-nova',
		fontSize: UI_BASE_FONT_SIZE/1.6,
			letterSpacing: 0.02,
		fontWeight:'510',
		fill: props.labelColor ?? '#5F5F68'
	} as const;

const valueStyle = {
	fontFamily: 'proxima-nova',
	fontSize: UI_BASE_FONT_SIZE,

	// 💰 Bright gold
	fill: props.textColor ?? '#FFFFFF',
	fontWeight:600,

	// 🖤 subtle edge definition (VERY important)
	// stroke: '#B8860B',
	// strokeThickness: 1.5,

	// 🌑 tight shadow (not blurry glow)
	// dropShadow: true,
	// dropShadowColor: '#000000',
	// dropShadowBlur: 4,       // 👈 reduce A LOT
	// dropShadowDistance: 2,   // 👈 gives direction
	// dropShadowAngle: Math.PI / 4, // bottom-right shadow

} as const;
</script>

{#if props.stacked}
	{#if props.tiled}
		<UiSprite
			y={-20}
			anchor={{ x: 0, y: 0 }}
			key="base_ticker"
			width={500}
			height={UI_BASE_FONT_SIZE * 2.9}
			borderRadius={props.borderRadius ?? 35}
		/>
	{/if}

	<Text
		x={-220}
		anchor={{ x: 0, y: 0 }}
		text={props.label}
		style={labelStyle}
	/>

	<Text
		x={-220}
		y={UI_BASE_FONT_SIZE * 0.75}
		anchor={{ x: 0, y: 0 }}
		text={props.value}
		style={valueStyle}
	/>
{:else}
	{#if props.tiled}
		<UiSprite
			x={-90}
			anchor={{ x: 0, y: 0.5 }}
			key="base_ticker"
			width={UI_BASE_FONT_SIZE * 3 * (326 / 73)}
			height={UI_BASE_FONT_SIZE * 3}
			borderRadius={props.borderRadius ?? 35}
		/>
	{/if}

	<Text
		x={0}
		anchor={{ x: 0, y: 0.5 }}
		text={props.label}
		style={labelStyle}
	/>

	<Text
		x={UI_BASE_FONT_SIZE * 5}
		anchor={{ x: 0, y: 0.5 }}
		text={props.value}
		style={valueStyle}
	/>
{/if}