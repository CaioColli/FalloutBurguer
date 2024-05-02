import { gsap } from "gsap"
import hexToRgba from 'hex-to-rgba'

export const animationAddToBag = () => {
    const timeLine = gsap.timeline({defaults: {duration: 0.7}})

    timeLine.fromTo('.iconAddCart', {
        x: 0
    }, {
        x: 40,
        opacity: 0
    }).fromTo('.iconBagOpen', {
        y: 50,
        opacity: 0,
        color: '#000'
    }, {
        y: 0,
        opacity: 1,
        color: '#fff'
    }).fromTo('.iconHamburger', {
        y: -50,
        opacity: 0,
        color: '#000'
    }, {
        y: 0,
        opacity: 1,
        color: hexToRgba('#fff', '0.6'),
        onComplete: () => {
            gsap.to('.iconBagOpen', {
                opacity: 0
            })
            gsap.to('.iconHamburger', {
                opacity: 0
            })
        }
    }).to('.iconBagFolded', {
        opacity: 1,
        y: -30,
        color: '#000'
    }).fromTo('.iconBike', {
        x: 0
    }, {
        x: 45,
        opacity: 1,
        onComplete: () => {
            timeLine.to('.iconBagFolded', {
                y: 0,
                opacity: 0
            }).to('.iconBike', {
                x: 100,
                opacity: 0
            }).to('.iconAddCart', {
                x: 0,
                opacity: 1
            })
        }
    })
}

export const MenuPage = () => {

}