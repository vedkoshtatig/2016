<script lang="ts">
   import { assets } from '$app/paths';
   import { zIndex } from 'constants-shared/zIndex';
   import Popup from './Popup.svelte';
   import { stateBet, stateBetDerived, stateConfig, stateModal, stateSound } from 'state-shared';
  
   import { getContextLayout } from 'utils-layout';
   import ModalSettingsSound from './ModalSettingsSound.svelte';
   import ModalSettingsAutosPlay from './ModalSettingsAutosPlay.svelte';
   import ModalSettingsGameRules from './ModalSettingsGameRules.svelte';
   import ModalSettingsTurbo from './ModalSettingsTurbo.svelte';
   import { i18nDerived } from '../../i18n/i18nDerived';


   import { stateGame } from '../../game/stateGame.svelte';
   import {
       DESKTOP_BACKGROUND_WIDTH_LIST,
       DESKTOP_BASE_SIZE,
       UI_BASE_SIZE,
   } from '../../game/constants';


   const { stateLayoutDerived } = getContextLayout();
   const menuBgUrl =
       'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';


   const isMobileMenu = $derived(['portrait', 'tablet'].includes(stateLayoutDerived.layoutType()));
   const isDesktopMenu = $derived(stateLayoutDerived.layoutType() === 'desktop');


   const menuAnchor = $derived.by(() => {
       if (!isDesktopMenu) return null;


       const main = stateLayoutDerived.mainLayoutStandard();
       const canvas = stateLayoutDerived.canvasSizes();


       const baseWidth = DESKTOP_BACKGROUND_WIDTH_LIST.reduce((sum, width) => sum + width, 0);
       const pivotX = baseWidth * 0.5;


       const menuLocalX = -10 + DESKTOP_BASE_SIZE * 2.3;
       const menuLocalY = -20 + DESKTOP_BASE_SIZE * 0.25;


       const menuMainX = main.width * 0.5 - pivotX + menuLocalX;
       const menuMainY = main.height - DESKTOP_BASE_SIZE + menuLocalY;


       const menuButtonHalfHeight = UI_BASE_SIZE * 0.4 * 0.5;


       const anchorMainX = menuMainX;
       const anchorMainY = menuMainY - menuButtonHalfHeight;


       const anchorX = canvas.width * 0.5 + (anchorMainX - main.width * 0.5) * main.scale;
       const anchorY = canvas.height * 0.5 + (anchorMainY - main.height * 0.5) * main.scale;


       return { x: anchorX, y: anchorY };
   });


   const quickEnabled = $derived.by(() => {
       const firstReel = stateGame.board[0];
       return firstReel?.reelState?.spinType === 'fast';
   });


   const toggleQuick = () => {
       const next = quickEnabled ? 'default' : 'fast';
       for (const reel of stateGame.board) {
           reel.reelState.spinType = next;
       }
   };


   const toggleTurbo = () => {
       if (stateConfig.jurisdiction.disabledTurbo) return;
       stateBetDerived.updateIsTurbo(!stateBet.isTurbo, { persistent: true });
   };


   const toggleSounds = () => {
       stateSound.volumeValueSoundEffect = stateSound.volumeValueSoundEffect === 0 ? 100 : 0;
   };


   const toggleMusic = () => {
       stateSound.volumeValueMusic = stateSound.volumeValueMusic === 0 ? 100 : 0;
   };
</script>


{#if stateModal.modal?.name === 'settings'}
  <Popup zIndex={zIndex.modal} onclose={() => (stateModal.modal = null)}>


       <div


           class="wrap"


           class:mobile-menu={isMobileMenu}


           class:desktop-anchor={isDesktopMenu}


           style={`--settings-menu-bg-url: url('${menuBgUrl}');${menuAnchor ? ` --menu-anchor-x: ${menuAnchor.x}px; --menu-anchor-y: ${menuAnchor.y}px;` : ''}`}


       >


          


           {#if isMobileMenu}


               <div class="menu-grid">


   <ModalSettingsGameRules


   iconSet={{


       normal: 'infoNormal.png',


       hover: 'infoHover.png',


       down: 'infoNormal.png',


       disabled: 'infoNormal.png'


   }}


/>


               <ModalSettingsAutosPlay


   iconSet={{


       normal: 'autoPlayNormal.png',


       hover: 'autoPlayHover.png',


       down: 'autoPlayNormal.png',


       disabled: 'autoPlayNormal.png'


   }}


/>


               <ModalSettingsTurbo


   iconSet={{


       normal: 'turbonormal.png',


       hover: 'turbohover.png',


       down: 'turboDown.png',


       active: 'turboDown.png',


       disabled: 'turboNormal.png',


   }}


/>


                       <ModalSettingsTurbo


   iconSet={{


       normal: 'turbonormal.png',


       hover: 'turbohover.png',


       down: 'turboDown.png',


       active: 'turboDown.png',


       disabled: 'turboNormal.png',


   }}


/>


               <ModalSettingsSound


                   bind:value={stateSound.volumeValueSoundEffect}


                   iconSet={{


                       on: 'soundPortraitOn.png',


                       off: 'soundPortraitOff.png',


                       hover: 'soundPortraitHover.png',


                       active: 'soundPortraitOn.png',


                   }}


               >


                   {i18nDerived.soundEffectVolume()}


               </ModalSettingsSound>


           <ModalSettingsSound


                   bind:value={stateSound.volumeValueMusic}


                   iconSet={{


                   on: 'musicPortraitOn.png',


                       off: 'musicPortraitOff.png',


                       hover: 'musicPortraitHover.png',


                       active: 'musicPortraitOn.png',


                   }}


               >


                   {i18nDerived.musicVolume()}


               </ModalSettingsSound>


  


</div>


           {:else}


               <ModalSettingsSound


                   bind:value={stateSound.volumeValueSoundEffect}


                   iconSet={{


                       on: 'soundOn.png',


                       off: 'soundOff.png',


                       hover: 'soundhover.png',


                       active: 'soundOn.png',


                   }}


               >


                   {i18nDerived.soundEffectVolume()}


               </ModalSettingsSound>


               <ModalSettingsSound


                   bind:value={stateSound.volumeValueMusic}


                   iconSet={{


                       on: 'musicOn.png',


                       off: 'musicOff.png',


                       hover: 'musicHover.png',


                       active: 'musicOn.png',


                   }}


               >


                   {i18nDerived.musicVolume()}


               </ModalSettingsSound>


           {/if}


   </Popup>
{/if}


<style lang="scss">
   .wrap {
       position: relative;
       z-index: 200;
       box-sizing: border-box;


       background-color: rgba(0, 0, 0, 0.8);
       backdrop-filter: blur(8px);
       -webkit-backdrop-filter: blur(8px);


       display: flex;
       flex-direction: column;
       align-items: center;
       gap: clamp(0.3rem, 0.7vw, 1rem);


       max-width: 15vw;


       padding: clamp(0.5rem, 1vw, 1rem) clamp(1rem, 2vw, 1rem); // ↑ increased


       border-radius: clamp(0.5rem, 1.5vw, 0.9rem);


       max-height: min(15vh, 560px);
       overflow: hidden;
   }


.wrap.desktop-anchor {
   position: fixed;
   left:12%;   // distance from right edge
   top: 75%;
   transform: translateY(-50%);
}
   .wrap.mobile-menu {
       background-color: transparent;
       backdrop-filter: none;
       -webkit-backdrop-filter: none;
       padding: 0;
       border-radius: 0;
       max-height: none;
       overflow: visible;
       --settings-menu-item-width: clamp(140px, 40vw, 170px);
       --settings-menu-item-height: clamp(56px, 14vw, 70px);
   }


   .menu-grid {
       display: grid;
       grid-template-columns: repeat(2, 1fr);
       row-gap: clamp(12px, 3vw, 20px);
       column-gap: clamp(12px, 3vw, 20px);
       place-items: center;


       width: min(92vw, 360px);
       padding: clamp(8px, 2.5vw, 14px);


       border: 2px solid #7c3aed; // purple border like your UI
       border-radius: 16px;


       background: rgba(10, 10, 20, 0.85);
       backdrop-filter: blur(12px);
   }


   .wrap.mobile-menu .menu-grid {
       transform: translateY(0) scale(1);
       transform-origin: center;
   }


   .tile {
       background: linear-gradient(145deg, #0f172a, #020617);
       border-radius: 16px;


       min-height: 80px;


       display: flex;
       align-items: center;
       justify-content: center;
       gap: 10px;


       font-weight: 600;
       letter-spacing: 0.08em;


       box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05);
   }


   .wrap.mobile-menu .tile {
       background-color: transparent;
       background-image: var(--settings-menu-bg-url);
       background-repeat: no-repeat;
       background-position: center;
       background-size: 100% 100%;
       border-radius: 0;
       color: rgba(255, 255, 255, 0.98);
       text-shadow: 0 2px 8px rgba(0, 0, 0, 0.75);
   }


   .tile:hover {
       transform: translateY(-1px);
       background: rgba(255, 255, 255, 0.09);
   }


   .wrap.mobile-menu .tile:hover {
       background-color: transparent;
   }


   .tile:active {
       transform: translateY(0);
   }


   .tile.active {
       background: rgba(255, 255, 255, 0.11);
       box-shadow: 0 0 0 1px rgba(255, 213, 74, 0.55) inset;
   }


   .wrap.mobile-menu .tile.active {
       box-shadow: none;
   }


   .tile.disabled,
   .tile:disabled {
       opacity: 0.45;
       cursor: not-allowed;
       transform: none;
       box-shadow: none;
   }


   .tile-icon {
       width: 1rem;
       height: 1rem;
       font-size: 1.25rem;
       display: inline-flex;
       align-items: center;
       justify-content: center;


       line-height: 1;
   }


   .tile-label {
       font-size: clamp(0.9rem, 3.3vw, 1.05rem);
   }
   .wrap.mobile-menu .menu-grid {
       background: transparent;
       backdrop-filter: none;
       -webkit-backdrop-filter: none;
       border: none; // optional if you don’t want the purple border
   }
</style>



