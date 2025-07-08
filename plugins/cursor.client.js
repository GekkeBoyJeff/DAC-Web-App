import { createAnimatable } from 'animejs'

export default defineNuxtPlugin(() => {
    const initialX = window.innerWidth / 2
    const initialY = window.innerHeight / 2

    const circle = createAnimatable('.cursor', {
		x: initialX,
		y: initialY,
		backgroundColor: 0,
		ease: 'out(15)',
	})

    const circleRing = createAnimatable('.cursor-circle', {
		x: initialX,
		y: initialY,
		backgroundColor: 0,
		ease: 'outQuart',
	})

	const onMouseMove = (e) => {
		const x = e.clientX
		const y = e.clientY 
		circle.x(x)
		circle.y(y)
		circleRing.x(x)
		circleRing.y(y)
	}

	window.addEventListener('mousemove', onMouseMove)
})
