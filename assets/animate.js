import anime from 'animejs'

export function indexAnimation(logo, buttons, footer) {
	const StartUpTimeline = anime.timeline({
		autoplay: true,
	})

	StartUpTimeline.add({
		targets: logo,
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'easeInOutSine',
		delay: anime.stagger(500),

		opacity: [0, 1],
		duration: 1000,
	})
		.add(
			{
				targets: buttons,
				translateY: ['400%', '0%'],
				easing: 'easeInOutElastic',
				delay: anime.stagger(50),

				opacity: [0, 1],
				duration: 2500,
			},
			0,
		)
		.add(
			{
				targets: footer,
				easing: 'easeInOutElastic',
				translateY: ['150%', '0%'],

				opacity: [0, 1],
				duration: 3000,
			},
			500,
		)
}

export function contactAnimation(title, text_inputs, buttons) {
	const StartUpTimeline = anime.timeline({
		autoplay: true,
	})

	StartUpTimeline.add(
		{
			targets: title,
			easing: 'easeInCubic',
			opacity: [0, 1],
			duration: 200,
		},
		700,
	)
		.add(
			{
				targets: text_inputs,
				easing: 'easeInOutBack',
				delay: anime.stagger(100),
				opacity: [0, 1],
				width: ['20%', '100%'],
				duration: 700,
			},
			0,
		)
		.add(
			{
				targets: buttons,
				easing: 'easeInOutBack',
				delay: anime.stagger(100),
				opacity: [0, 1],
				scale: [0.2, 1],
				duration: 700,
			},
			500,
		)
}

export function easeInCubicAnimation(el) {
	const StartUpTimeline = anime.timeline({
		autoplay: true,
	})

	StartUpTimeline.add({
		targets: el,
		easing: 'easeInCubic',
		opacity: [0, 1],
		duration: 400,
	})
}

export function buttonEnter(buttonPath, buttonSpan) {
	anime({
		targets: buttonPath,
		// eslint-disable-next-line prettier/prettier
		d:'M10,10 C10,10 50,7 90,7 C130,7 170,10 170,10 C170,10 172,20 172,30 C172,40 170,50 170,50 C170,50 130,53 90,53 C50,53 10,50 10,50 C10,50 8,40 8,30 C8,20 10,10 10,10 Z',
		elasticity: 700,
		offset: 0,
	})
	anime({
		targets: buttonSpan,
		scale: 1.15,
		duration: 800,
		offset: 0,
	})
}

export function buttonleave(buttonPath, buttonSpan) {
	anime({
		targets: buttonPath,
		// eslint-disable-next-line prettier/prettier
		d:'M10,10 C10,10 50,9.98999977 90,9.98999977 C130,9.98999977 170,10 170,10 C170,10 170.009995,20 170.009995,30 C170.009995,40 170,50 170,50 C170,50 130,50.0099983 90,50.0099983 C50,50.0099983 10,50 10,50 C10,50 9.98999977,40 9.98999977,30 C9.98999977,20 10,10 10,10 Z',
		elasticity: 700,
		offset: 0,
	})
	anime({
		targets: buttonSpan,
		scale: 1,
		duration: 800,
		offset: 0,
	})
}
