import { createAnimatable } from 'animejs'

// TODO: Animatie on click toevoegen
// ik denk dat ik een soort van pop effect wil maken waarbij de buitenste ring verdwijnt en de binnenste ring terugkomt. 
// Daarna moet er als soort van vuurwerk waarbij er allemaal kleine strepen uit de ring komen. en je uiteindelijk het DAC logo ziet verschijnen (strikje)
// Hierna moet het weer veranderen naar de normale cursor

let expanded = false;
export default defineNuxtPlugin(() => {
    const initialX = window.innerWidth / 2
    const initialY = window.innerHeight / 2

    const mouse = createAnimatable('.cursor', {
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
        duration: 500,
    })

    const mouseState = () => {
        if(expanded) {
            mouse.width(0, 300, 'outExpo')
            mouse.height(0, 300, 'outExpo')
        } else {
            mouse.width(8, 300, 'outExpo')
            mouse.height(8, 300, 'outExpo')
        }
    }

    const mouseRingState = () => {
        if(expanded) {
            circleRing.width(50, 300, 'outExpo')
            circleRing.height(50, 300, 'outExpo')
        } else {
            circleRing.width(24, 300, 'outExpo')
            circleRing.height(24, 300, 'outExpo')
        }
    }

    const checkTag = (target) => {
        return target.closest('a, button, input[type="submit"], input[type="button"], a>span, a>img, div>a')
    }

    const onMouseMove = (e) => {
        const x = e.clientX
        const y = e.clientY
        mouse.x(x)
        mouse.y(y)
        circleRing.x(x)
        circleRing.y(y)
        if (checkTag(e.target)) {
            expanded = true
            mouseState()
            mouseRingState()
        } else {
            expanded = false
            mouseState()
            mouseRingState()
        }
    }

    window.addEventListener('mousemove', onMouseMove)
})
