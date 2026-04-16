<script lang="ts">
    import { Container, Sprite, SpineProvider, SpineTrack, Text } from 'pixi-svelte';
    import { getContext } from '../game/context';
    import ButtonBuy from './ButtonBuy.svelte';
    import BuyDoubleBet from './BuyDoubleBet.svelte';
    import ButtonBuyBonus from './ButtonBuyBonus.svelte';
    import { stateBet } from 'state-shared';
    const context = getContext();
    const layout = context.stateGameDerived.boardLayout();

    // Custom offsets for Buy Board
    const offsetX = 0;
    const offsetY = 0;

    const scaleFactor = 1.2;
</script>

<!-- BUY BOARD MAIN CONTAINER -->
<Container
    x={layout.x / 1.4}
    y={layout.y * 1.05}
    height={layout.height}
    scale={scaleFactor}
    pivot={layout.pivot}
	>
    <Container>
        <Sprite
            key="buyFreeSpinBg"
            anchor={0.5}
            x={0}
            y={0}
            width={layout.width * 1.1}
            height={layout.height * 1.1}
            scale={{ x: 0.7, y: 0.7 }}
            zIndex={-10}
        />
        <Container x={0} y={-40}
        interactive={true}
         onclick={()=>{stateBet.activeBetModeKey='BONUS'}}>
            <!-- <ButtonBuy  /> -->
            <ButtonBuyBonus x={0} y={0} scale={{ x: 0.83, y: 0.52 }} anchor={0.5}/>

            <Text
                text={"BUY"}
                anchor={0.5}
                x={0}
                y={-15}
                style={{
                    fill: '#7F5112',
                    fontSize: 10,
                    fontWeight: 'bold',
                    align: 'center'
                }}
            />
            <Text
                text={"FREE SPIN"}
                anchor={0.5}
                x={0}
                y={-2}
                style={{
                    fill: '#7F5112',
                    fontSize: 10,
                    fontWeight: 'bold',
                    align: 'center'
                }}
            />
            <Text
                text={"$200.00"}
                anchor={0.5}
                x={0}
                y={15}
                style={{
                    fill: '#7F5112',
                    fontSize: 18,
                    fontWeight: 'bolder',
                    align: 'center'
                }}
            />
        </Container>
        <Container x={0} y={40}
        interactive={true}
         onclick={()=>{stateBet.activeBetModeKey='superBonus'}}>
            <ButtonBuyBonus x={0} y={0} scale={{ x: 0.83, y: 0.52 }} anchor={0.5} />

            <Text
                text={"BUY"}
                anchor={0.5}
                x={0}
                y={-17}
                style={{
                    fill: '#7F5112',
                    fontSize: 10,
                    
                    align: 'center'
                }}
            />
            <Text
                text={"SUPER \n "}
                anchor={0.5}
                x={0}
                y={2}
                style={{
                    fill: '#7F5112',
                    fontSize: 15,
                    fontWeight: 'bolder',
                    align: 'center'
                }}
            />
            <Text
                text={"FREE SPIN"}
                anchor={0.5}
                x={0}
                y={6}
                style={{
                    fill: '#7F5112',
                    fontSize: 11,
                    
                    align: 'center'
                }}
            />
            <Text
                text={"$1,000.00"}
                anchor={0.5}
                x={0}
                y={18}
                style={{
                    fill: '#7F5112',
                    fontSize: 15,
                    fontWeight: '900',
                    align: 'center'
                }}
            />
        </Container>
    </Container>
    <Container>
        <Sprite
            key="doubleBetbg"
            anchor={0.5}
            x={0}
            y={layout.y / 2.7}
            width={layout.width * 1.1}
            height={layout.height * 1.1}
            scale={{ x: 0.7, y: 0.7 }}
            zIndex={-10}
        />
        <Container x={0} y={148}>
            <ButtonBuyBonus x={0} y={0} scale={{ x: 0.83, y: 0.73 }} anchor={0.5} />

            <Text
                text="Double"
                anchor={0.5}
                x={0}
                y={0}
                style={{
                    fill: '#7F5112',
                    fontSize: 25,
                    fontWeight: 'bold',
                }}
            />
        </Container>
    </Container>
    <Container
    x={layout.x /1.98}
    y={layout.y*1.63}
    height={layout.height}
    scale={scaleFactor}
    pivot={layout.pivot}>
            <Sprite
            key="Leaderboard"
            anchor={0.5}
            x={0}
            y={0}
            width={layout.width * 1.2}
            height={layout.height * 1.1}
            scale={{ x: 0.22, y: 0.21 }}
            zIndex={-10}
        />
    </Container>
</Container>