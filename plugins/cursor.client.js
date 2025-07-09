import { createAnimatable } from 'animejs'

export default defineNuxtPlugin(() => {
    const initialX = window.innerWidth / 2
    const initialY = window.innerHeight / 2

    const circle = createAnimatable('.cursor', {
        width: 8,
        height: 8,
		x: initialX,
		y: initialY,
		ease: 'out(15)',
	})

    const circleRing = createAnimatable('.cursor-circle', {
        x: initialX,
		y: initialY,
		ease: 'outQuart',
    })
    
    const shrinkCursor = () => {
        circle.width(8)
        circle.height(8)
    }

    const growCursor = () => {
        circle.width(20)
        circle.height(20)
    }

	const onMouseMove = (e) => {
		const x = e.clientX
		const y = e.clientY 
		circle.x(x)
		circle.y(y)
		circleRing.x(x)
		circleRing.y(y)
	}

    window.addEventListener('mousemove', onMouseMove)
    
    const links = document.querySelectorAll('a, button, input[type="submit"], input[type="button"]')

    links.forEach(link => {
        link.addEventListener('mouseover', growCursor)
        link.addEventListener('mouseout', shrinkCursor)
    })
})
