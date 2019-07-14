<template>
	<form ref="contact" class="contact" name="contact" action="/thank-you" netlify-honeypot="bot-field" method="POST" autocomplete="off" netlify>
		<!-- eslint-disable-next-line -->
		<input type="hidden" name="form-name" value="contact">	<p class="hidden"><label>Don’t fill this out: <input name="bot-field"></label></p>

		<h2 class="title">
			Contact me
		</h2>

		<div class="text_input">
			<input v-validate="'required|email'" name="email" type="email" placeholder="e-mail" class="input_anim" />
			<span :class="{ 'is-danger': errors.has('email') }" class="focus-border" />
			<img v-show="errors.has('email')" class="error-icon" src="~/static/error-icon.png" />
		</div>
		<div class="text_input">
			<input v-validate="'required'" name="subject" type="text" placeholder="subject" class="input_anim" />
			<span :class="{ 'is-danger': errors.has('subject') }" class="focus-border" />
			<img v-show="errors.has('subject')" class="error-icon" src="~/static/error-icon.png" />
		</div>
		<div class="text_input">
			<input v-validate="'required'" name="message" type="text" placeholder="message" class="input_anim" />
			<span :class="{ 'is-danger': errors.has('message') }" class="focus-border" />
			<img v-show="errors.has('message')" class="error-icon" src="~/static/error-icon.png" />
		</div>

		<anim-button class="blue" type="submit" value="Send message" @click.native="submit">
			Submit
		</anim-button>
		<anim-button class="red" href="/">
			Go Back
		</anim-button>
	</form>
</template>

<script>
import { contactAnimation } from '~/assets/animate'
import AnimButton from '~/components/AnimButton.vue'

export default {
	components: {
		AnimButton,
	},
	head() {
		return {
			title: 'Contact',
			meta: [{ hid: 'description', name: 'description', content: 'Contact page' }],
		}
	},
	mounted() {
		const title = document.querySelector('.contact .title')
		const text_inputs = document.querySelectorAll('.contact .text_input')
		const buttons = document.querySelectorAll('.contact .button')
		contactAnimation(title, text_inputs, buttons)
	},
	methods: {
		submit: function() {
			this.$validator.validateAll().then(result => {
				if (result) {
					this.$refs.contact.submit()
				} else {
					return
				}
			})
		},
	},
}
</script>

<style lang="scss" scoped>
.text_input,
.title {
	opacity: 0;
}

.contact {
	width: 500px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
}

.hidden {
	display: none;
}

/*##### input forms #####*/
.text_input {
	width: 100%;
	position: relative;
	z-index: 2;
	margin: 30px;
}

input {
	width: 100%;
	background-color: #111116;

	color: azure;
	letter-spacing: 2px;

	&:focus {
		outline: none;
	}
}

.input_anim {
	border: 0;
	padding: 7px 0;
	border-bottom: 2px solid azure;

	~ .focus-border {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0;
		height: 2px;
		background-color: #3399ff;
		transition: 0.3s;
	}

	&:focus ~ .focus-border {
		width: 100%;
		transition: 0.5s;
	}
}

.is-danger {
	background-color: #ff1461 !important;
}

.error-icon {
	position: absolute;
	bottom: 10px;
	right: 0;
}

/*#####  buttons #####*/

/deep/ .button {
	opacity: 0;

	span {
		color: azure;
	}
}

@media (max-width: 700px) {
	.contact {
		width: 300px;
	}
}
</style>
