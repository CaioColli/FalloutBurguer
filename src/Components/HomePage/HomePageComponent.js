import './HomePage.css'
import { useEffect } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { animationAddToBag } from '../MenuPage/MenuPageComponent'
import { CiShoppingCart } from "react-icons/ci"
import { PiHamburger } from "react-icons/pi"
import { GiPaperBagOpen } from "react-icons/gi"
import { GiPaperBagFolded } from "react-icons/gi"
import { RiEBike2Line } from "react-icons/ri"
gsap.registerPlugin(ScrollTrigger)

export const HomePageComponents = ({tittleBurguer, descriptionBurguer, priceBurguer}) => {

    useEffect(() => {
        const timeLine = gsap.timeline({ defaults: { duration: 1 } })
        
        const animation = timeLine.fromTo('.burguerImage', {
            y: 60,
            opacity: 0
        }, {
            y: 0,
            opacity: 1
        }).fromTo('.shadowBurguer', {
            y: 60,
            opacity: 0
        }, {
            y: 0,
            opacity: 1
        }, "-= 0.75").fromTo('.traceBurguer', {
            x: 60,
            opacity: 0
        }, {
            x: 0,
            ease: "bounce.out",
            duration: 1,
            opacity: 1,
        }, "-= 1.80").fromTo('.priceBurguer', {
            y: 60,
            opacity: 0
        }, {
            y: 0,
            opacity: 1
        })

        ScrollTrigger.create({
            trigger: '.homePage',
            start: 'top center',
            end: 'bottom center',
            onEnter: () => animation.play(),
            onEnterBack: () => animation.restart()
        })

    }, [])
    
    return (
        <section className='homePage'>

            <div className="leftSide-homePage">
                <div className='content-leftSide'>
                    <h5>DESCUBRA NOVOS SABORES!</h5>
                    <h1>Especial {tittleBurguer} </h1>
                    <p> {descriptionBurguer} </p>
               
                    <div className="btns">
                        <button className='btn-addCard' onClick={ animationAddToBag }> 
                            <CiShoppingCart className='iconAddCart' />
                            <GiPaperBagOpen className='iconBagOpen' />
                            <PiHamburger className='iconHamburger' />
                            <GiPaperBagFolded className='iconBagFolded' />
                            <RiEBike2Line className='iconBike' />
                        </button>
                        <button className='btn-GoToMenu'>Cardápio</button>
                    </div>
                </div>
                
            </div>

            <div className="rightSide-homePage">
                <div className='content-rightSide'>
                    <div className="div-burguerImage">
                        <div className='content-burguerImage'>
                            <img src="Images/ImagemHamburguer.png" alt="Foto de um hamburguer" className="burguerImage"></img>   
                            <img src="Images/SombraHamburguer.svg" alt="Sombra do hamburguer" className="shadowBurguer"></img>
                            <img src="Images/TraçadoHamburguer.svg" alt="Traçado do hamburguer para o preço" className="traceBurguer"></img>

                            <div className='priceBurguer'>
                                <div className='price'>
                                    <p>Apenas</p>
                                    <h3> {priceBurguer} </h3>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}