<script lang="ts">
	import type { Snippet } from 'svelte';

	import Popup from './Popup.svelte';
	import { zIndex } from 'constants-shared/zIndex';
	import { stateModal } from 'state-shared';
	import { getContextLayout } from 'utils-layout';

	type Props = {
		children: Snippet;
	};

	const props: Props = $props();

	const { stateLayoutDerived } = getContextLayout();
	const isMobileMenu = $derived(['portrait', 'tablet'].includes(stateLayoutDerived.layoutType()));

	const close = () => (stateModal.modal = null);
</script>

{#if stateModal.modal?.name === 'gameRules'}
	<Popup zIndex={zIndex.modal} onclose={close}>
		<div class="popup-bg" class:mobile-menu={isMobileMenu}>
			<!-- HEADER -->
			<div class="header">
				<h2>GAME INFO</h2>
				<button class="close-btn" onclick={close}>×</button>
			</div>

			<!-- CONTENT -->
			<div class="content">
				<div class="section">
					<h3>ABOUT THE GAME</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, iusto dolorum
						pariatur earum reprehenderit odio accusamus.
					</p>
				</div>

				<div class="section">
					<h3>FEATURES</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat expedita obcaecati exercitationem quod illo saepe molestias sunt, ipsam natus iure tempora at itaque repudiandae odio suscipit repellendus pariatur. Similique, natus?
						Quis quas voluptate neque distinctio, natus repellendus itaque ducimus vel illum labore deleniti et quos iusto, quidem sunt sed cupiditate nisi eius quibusdam possimus harum praesentium aliquam molestias. Magnam, dicta.
						Laborum dicta tempore at saepe, incidunt fuga vitae repellendus optio corporis unde modi, soluta qui. Dignissimos illo molestias eaque sequi, maiores rerum ex provident assumenda, neque nostrum reiciendis dolores vitae?
						Asperiores qui officia neque cum vero! Similique vel fuga est? Necessitatibus corrupti dignissimos nesciunt facilis, delectus sed nisi veritatis, esse nam cum sapiente reiciendis vel aspernatur quae nobis amet reprehenderit?
						Consectetur cupiditate sit aperiam. Obcaecati sapiente, perferendis fugit quam cum nisi porro magnam. Fugit consequatur quis, perspiciatis cupiditate quas illum quod. Necessitatibus modi libero, delectus eligendi quas accusamus facere quibusdam!
						Quis molestiae odit porro magnam optio veritatis. Mollitia veritatis quod numquam atque quaerat, ea nihil autem commodi. Cupiditate perspiciatis, quia aperiam quos temporibus ducimus, reprehenderit praesentium qui ullam deleniti ipsum!
						Libero distinctio quam voluptas, ea omnis esse alias aliquid assumenda illo. Error est molestias ad exercitationem quo aliquid. Ipsam officiis deserunt cupiditate error a blanditiis ducimus atque, harum rem quia.
						Provident non aut eaque amet! Libero saepe accusantium quis consequatur repellendus quae fuga incidunt iusto, quia, doloribus harum officia! Eius itaque veniam minima reiciendis, earum totam quaerat hic quo blanditiis?
						Atque aut corporis iure dolore! Nam iure quos totam est, voluptatem aspernatur ab rerum recusandae necessitatibus culpa quod distinctio! Officia est perspiciatis ipsam deserunt ab autem error alias molestias distinctio?
						Voluptatibus, tenetur sed velit cum quis mollitia architecto excepturi cupiditate officiis perferendis at quae obcaecati possimus nisi blanditiis minima nam nihil odit nemo veritatis dolor ipsam. Molestias quisquam maiores sit?
						Et, quidem recusandae explicabo sint iure magnam, ipsam ea facere corrupti sequi repellat fugit assumenda cum, numquam voluptate quam at excepturi voluptatibus est praesentium delectus vel doloremque. Natus, porro commodi!
						Unde, quo. Harum, odio? Veniam ipsam illo magnam asperiores, ex suscipit aliquid sed necessitatibus laudantium tempora officiis obcaecati beatae reiciendis quas natus optio quae adipisci, modi consequuntur. Quisquam, impedit accusamus?
						Earum rem dolor saepe quidem quis, nisi ratione odit ipsa. Facere sed quo rem consequatur ea esse, mollitia saepe voluptatum minus. Temporibus harum a cumque nostrum, cupiditate excepturi tenetur explicabo?
						Repudiandae aliquam reiciendis perspiciatis minima, saepe, sit repellendus necessitatibus at nostrum quidem sapiente ullam a ipsa. Provident, hic, facilis sequi asperiores voluptate eius blanditiis corrupti impedit similique placeat voluptas amet?
						Deleniti cupiditate saepe ex amet mollitia nihil provident facere ducimus aspernatur voluptates illo, incidunt, dolor nesciunt sed? Aut quasi, doloribus a illum distinctio corrupti vitae et aperiam optio error magnam?
						Magni laudantium amet porro. Hic possimus nihil soluta expedita optio cum aliquid rerum sed molestias laudantium! Molestiae quia, reiciendis incidunt expedita magnam eligendi assumenda facilis exercitationem repudiandae iure cupiditate illo.
						Deleniti quibusdam laboriosam tempora molestiae, iusto nulla, dolorum consequatur dolores totam qui reprehenderit provident sed excepturi. Doloremque est labore ut ab reiciendis assumenda impedit et? Consectetur ad illum nesciunt laboriosam.
						Dicta accusamus doloremque animi ipsam neque sint nobis accusantium, fugiat est placeat optio modi illum facere omnis consequatur eos aspernatur? Provident maxime ducimus voluptatibus nisi temporibus dicta neque qui inventore!
						Temporibus obcaecati numquam necessitatibus quae nostrum, ex nulla labore quisquam vitae deleniti omnis! Quidem soluta id, nisi ullam mollitia et porro consequatur debitis totam commodi itaque corporis sint perspiciatis ducimus?
						At adipisci nemo tempore dolor aut. Voluptatem ipsam architecto sed aliquid fugit totam corrupti eligendi tenetur exercitationem reiciendis. Dignissimos, accusamus est. Aliquam cum iure quam praesentium, perferendis unde. Soluta, ducimus!
					</p>

					{@render props.children()}
				</div>
			</div>
		</div>
	</Popup>
{/if}

<style>
	/* POPUP BOX */
	.popup-bg {
		background: rgba(15, 15, 20, 0.95);
		border-radius: 12px;
		padding: 1.5rem;

		width: min(600px, 92vw);
		

		height: 60%; /* 🔥 FIXED HEIGHT */
		display: flex;
		flex-direction: column;

		box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.popup-bg.mobile-menu {
		transform: translateY(clamp(40px, 8vh, 140px));
	}

	.header {
		position: relative;
		text-align: center;
		margin-bottom: 1rem;
		flex-shrink: 0; 
	}

	.header h2 {
		color: white;
		font-size: 1.8rem;
		font-weight: 700;
		margin: 0;
	}

	.close-btn {
		position: absolute;
		right: 0;
		top: 0;

		width: 35px;
		height: 35px;

		border-radius: 50%;
		border: none;

		background: rgba(255, 255, 255, 0.1);
		color: white;
		font-size: 1.5rem;
		cursor: pointer;
	}

	.close-btn:hover {
		background: rgba(255, 255, 255, 0.2);
	}

	
	.content {
		flex: 1; 
		overflow-y: auto; 
		min-height: 0; 
		height: 0;
		padding-right: 10px;
	}

	/* SCROLLBAR */
	.content::-webkit-scrollbar {
		width: 6px;
	}

	.content::-webkit-scrollbar-thumb {
		background: #ffd54a;
		border-radius: 10px;
	}

	/* SECTIONS */
	.section {
		margin-bottom: 1.5rem;
	}

	.section h3 {
		color: #ffd54a;
		font-size: 0.9rem;
		letter-spacing: 1px;
		margin-bottom: 0.5rem;
	}

	.section p {
		color: #ffffff;
		font-size: 0.9rem;
		line-height: 1.4;
		font-weight: 600;
	}
</style>
