<template>
	<a class="button" @mouseenter="buttonEnter" @mouseleave="buttonLeave">
		<svg viewBox="0 0 180 60">
			<path ref="btnPath" d="M10,10 C10,10 50,9.98999977 90,9.98999977 C130,9.98999977 170,10 170,10 C170,10 170.009995,20 170.009995,30 C170.009995,40 170,50 170,50 C170,50 130,50.0099983 90,50.0099983 C50,50.0099983 10,50 10,50 C10,50 9.98999977,40 9.98999977,30 C9.98999977,20 10,10 10,10 Z" />
		</svg>
		<span ref="btnSpan">
			<slot>Button slot</slot>
		</span>
	</a>
</template>

<script>
import { buttonEnter, buttonleave } from '../assets/animate'

export default {
	name: 'AnimButton',
	methods: {
		buttonEnter() {
			buttonEnter(this.$refs.btnPath, this.$refs.btnSpan)
		},
		buttonLeave() {
			buttonleave(this.$refs.btnPath, this.$refs.btnSpan)
		},
	},
}
</script>

<style lang="scss" scoped>
.button {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;

	width: 180px;
	height: 60px;
	text-decoration: none;
	cursor: default;
	margin: 0 auto;
	border: none;

	svg {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;

		stroke-width: 1.5;
		fill: none;
		stroke: currentColor;
	}
}

.blue {
	color: #3399ff;
}

.green {
	color: #3eb373;
}

.red {
	color: #ff1461;
}

.yellow {
	color: #fff000;
}
</style>
