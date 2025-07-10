import { createAnimatable } from 'animejs'

// TODO: Animatie on click toevoegen
// ik denk dat ik een soort van pop effect wil maken waarbij de buitenste ring verdwijnt en de binnenste ring terugkomt. 
// Daarna moet er als soort van vuurwerk waarbij er allemaal kleine strepen uit de ring komen. en je uiteindelijk het DAC logo ziet verschijnen (strikje)
// Hierna moet het weer veranderen naar de normale cursor

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
    
    const resetCursor = () => {
        setRingToNormalSize()
        circle.width(8, 100, 'out')
        circle.height(8, 100, 'out')
    }

    const expandCursorOnHover = async () => {
        setRingToLargeSize()
        circle.height(0, 300, 'outQuart')
        circle.width(0, 300, 'outQuart')
        setTimeout(() => {
            circleRing.width(40, 300, 'outBack')
            circleRing.height(40, 300, 'outBack')
        }, 200)
    }

    const setRingToLargeSize = () => {
        circleRing.width(50, 300, 'outExpo')
        circleRing.height(50, 300, 'outExpo')
    }

    const setRingToNormalSize = () => {
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
    
    const links = document.querySelectorAll('a, button, input[type="submit"], input[type="button"], a>span')

    links.forEach(link => {
        link.addEventListener('mouseover', expandCursorOnHover)
        link.addEventListener('mouseout', resetCursor)
    })
})
