<template>
	<div>
		<div class="logo">
			<svg width="300" height="150" viewBox="0 0 435 150">
				<path id="Letter_M" d="M0.7,140.2l0.1-138L47,68.4L93.3,2.2V140h-8L10.9,34.3v40.1" />
				<path id="Letter_A" d="M118.6,141.2l55.2-139L224,140h-12l-18.4-51.5h-43.9l16.1-42.2" />
				<path id="Letter_R" d="M249.3,141.2V2.2h23.1c0,0,35-1.8,45,35.1c1,3.6,1.3,7.4,0.9,11.2c-1.4,16.4-11.2,30.8-25.9,38.1l30.1,53.4h-8l-34.1-57.4c0,0,18.1-2,28.1-24.1h-50.2V44.4" />
				<path id="Letter_T" d="M435.6,2.2h-87.8v10H392v128.2h8V47.3" />
			</svg>
		</div>

		<div class="links">
			<anim-button class="green" href="https://github.com/MartCube" target="_blank">
				GitHub
			</anim-button>
			<anim-button class="red" href="https://codepen.io/martcube/" target="_blank">
				CodePen
			</anim-button>
			<anim-button class="blue" href="https://drive.google.com/open?id=1jFwYQ9yb-ViLXJ_gZXAzcvGO580F-P3L" target="_blank">
				About me
			</anim-button>
			<anim-button class="yellow" href="/contact">
				Contact
			</anim-button>
		</div>

		<div class="footer">
			<span>&copy; 2020 Mart Cube</span>
		</div>
	</div>
</template>

<script>
import { indexAnimation } from '~/assets/animate'
import AnimButton from '~/components/AnimButton.vue'

export default {
	components: {
		AnimButton,
	},
	mounted() {
		const logo = document.querySelectorAll('.logo path')
		const buttons = document.querySelectorAll('.links .button')
		const footer = document.querySelector('.footer span')
		indexAnimation(logo, buttons, footer)
	},
}
</script>

<style scoped>
.logo path,
.links .button,
.footer span {
	opacity: 0;
}

/******   Logo styles   ******/
#Letter_M {
	stroke: #3eb373;
}
#Letter_A {
	stroke: #ff1461;
}
#Letter_R {
	stroke: #3399ff;
}
#Letter_T {
	stroke: #fff000;
}

.logo path {
	fill: none;
	stroke-width: 1.5;
}

/******   Links styles   ******/
.links {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}

/******   Footer styles   ******/
.footer {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.footer span {
	color: #5f5f5f;
	font-size: 0.8em;
	margin-top: 10px;
}
</style>
