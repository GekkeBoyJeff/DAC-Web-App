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
        duration: 100,
	})

    const circleRing = createAnimatable('.cursor-circle', {
        width: 24,
        height: 24,
        x: initialX,
		y: initialY,
        ease: 'outQuart',
        duration: 300,
    })
    
    const shrinkCursor = () => {
        growCursorRing()
        circle.width(8, 100, 'out')
        circle.height(8, 100, 'out')
    }

    const shrinkCursorRing = () => {
        circleRing.width(0, 100, 'out')
        circleRing.height(0, 100, 'out')
    }

    const growCursor = async () => {
        // overGrowCursor()
        // shrinkCursorRing()
        overGrowCursorRing()
        setTimeout(() => {
            circle.height(0, 300, 'outQuart')
            circle.width(0, 300, 'outQuart')
        }, 100)
    }

    const overGrowCursor = () => {
        circle.height(30, 300, 'outQuart')
        circle.width(30, 300, 'outQuart')
    }

    const overGrowCursorRing = () => {
        circleRing.width(40, 300, 'out')
        circleRing.height(40, 300, 'out')
    }

    const growCursorRing = () => {
        circleRing.width(24, 300, 'out')
        circleRing.height(24, 300, 'out')
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
