import gsap from 'gsap';

export const animateElements = ( component, initialPosition, finalPosition ) => {
    const timeLine = gsap.timeline({ defaults: { duration: 1 } })

    timeLine.fromTo(component, {
        x: initialPosition,
        opacity: 0
    }, {
        x: finalPosition,
        opacity: 1
    })
}

export const closeAnimation = ( component, initialPosition, onClose ) => {
    gsap.to(component, {
        x: initialPosition,
        opacity: 0,
        duration: 1,
        onComplete: onClose
    })
}