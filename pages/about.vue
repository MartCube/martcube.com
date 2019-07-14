<template>
	<div class="container">
		<h3>Thank you for reaching me.</h3>

		<anim-button class="green" href="/">
			Go Home
		</anim-button>
	</div>
</template>

<script>
import { easeInCubicAnimation } from '~/assets/animate'
import AnimButton from '~/components/AnimButton.vue'

export default {
	components: {
		AnimButton,
	},
	mounted() {
		const el = document.querySelector('.container')
		easeInCubicAnimation(el)
	},
}
</script>

<style scoped>
.container {
	opacity: 0;
}
</style>
