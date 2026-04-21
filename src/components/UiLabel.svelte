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
		borderRadius?: number;
		labelColor?: string;
		textColor?: string;
		align?: 'left' | 'center';
	};

	const props: Props = $props();

	const isCenter = props.align === 'center';

	const labelStyle = {
		fontFamily: 'proxima-nova',
		fontSize: UI_BASE_FONT_SIZE / 1.6,
		letterSpacing: 0.02,
		fontWeight: '510',
		fill: props.labelColor ?? '#5F5F68'
	} as const;

	const valueStyle = {
		fontFamily: 'proxima-nova',
		fontSize: UI_BASE_FONT_SIZE,
		fill: props.textColor ?? '#FFFFFF',
		fontWeight: 600
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
		x={isCenter ? 0 : -220}
		anchor={{ x: isCenter ? 0.5 : 0, y: 0 }}
		text={props.label}
		style={labelStyle}
	/>

	<Text
		x={isCenter ? 0 : -220}
		y={UI_BASE_FONT_SIZE * 0.75}
		anchor={{ x: isCenter ? 0.5 : 0, y: 0 }}
		text={props.value}
		style={valueStyle}
	/>
{:else}
	{#if props.tiled}
		<UiSprite
			x={isCenter ? -((UI_BASE_FONT_SIZE * 3 * (326 / 73)) / 2) : -90}
			anchor={{ x: 0, y: 0.5 }}
			key="base_ticker"
			width={UI_BASE_FONT_SIZE * 3 * (326 / 73)}
			height={UI_BASE_FONT_SIZE * 3}
			borderRadius={props.borderRadius ?? 35}
		/>
	{/if}

	<Text
		x={isCenter ? -10 : 0}
		anchor={{ x: isCenter ? 1 : 0, y: 0.5 }}
		text={props.label}
		style={labelStyle}
	/>

	<Text
		x={isCenter ? 10 : UI_BASE_FONT_SIZE * 5}
		anchor={{ x: 0, y: 0.5 }}
		text={props.value}
		style={valueStyle}
	/>
{/if}