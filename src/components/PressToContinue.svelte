<script lang="ts">
	import { MainContainer, OnPressFullScreen } from 'components-layout';
	import { OnHotkey } from 'components-shared';
	import { stateUrlDerived } from 'state-shared';
	import { BitmapText} from 'pixi-svelte';

	import { getContext } from '../game/context';

	type Props = {
		onpress: () => void;
	};
const fstyle={
		fontFamily: 'sans',
		 fontSize: 72, align: 'center' 
	}
	const props: Props = $props();
	const context = getContext();
</script>

<MainContainer alignVertical="bottom">

	<BitmapText
							anchor={{ x: 0.5, y: 1 }}
		x={context.stateLayoutDerived.mainLayout().width * 0.5}
		y={context.stateLayoutDerived.mainLayout().height/1.05}
		scale={0.3}
							text={`PRESS ANYWHERE TO CONTINUE`}
							style={fstyle}
						/>
</MainContainer>
<OnHotkey hotkey="Space" onpress={() => props.onpress()} />
<OnPressFullScreen onpress={() => props.onpress()} />
