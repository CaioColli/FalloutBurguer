import './HomePage.css'
import { useEffect, useState } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { requests } from '../../Scripts/RequestApi'
import { currencyFormat } from '../../Scripts/CurrencyFormat'
import { Button } from '../Buttons/Button'
import traceIcon from '../../assets/Trace.svg'
import radiationIcon from '../../assets/RadiationIcon.svg'
import shadowBurguer from '../../assets/shadow.svg'
gsap.registerPlugin(ScrollTrigger)

export const HomePageComponents = () => {
    const [emphasis, setEmphasis] = useState([])
    const featuresItem = emphasis[1]

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await requests()
                setEmphasis(data.meat)
            } catch (error) {
                console.error('Erro ao buscar os dados', error)
            }
        }

        const animateElements = () => {
            setTimeout(() => {
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
            }, 50)
        }

        animateElements()
        fetchData()
    }, [])
    
    const handleClick = (id) => {
        //console.log('ID do item', id)
        //setSelectedItemId(id)
        //Aqui atribuo a função que adiciona o item no carrinho
    }

    return (
        <section className='homePage'>
            <div className="leftSide-homePage">
                <div className='content-leftSide'>
                    <span>DESCUBRA NOVOS SABORES!</span>
                    {featuresItem && <h1>Especial {featuresItem.title} </h1>}
                    {featuresItem && <p> {featuresItem.description} </p>}

                    <div className="btns">
                        <Button size='l' onClick={ () => handleClick(featuresItem.id) }>
                            <span className='text-button'> Adicionar </span>
                        </Button>
                        <button className='btn-GoToMenu'> Cardápio </button>
                    </div>
                </div>

            </div>

            <div className="rightSide-homePage">
                <img src={ radiationIcon } className='radiationIcon-1'></img>
                <img src={ radiationIcon } className='radiationIcon-2'></img>
                <div className='content-rightSide'>
                    <div className="div-burguerImage">

                        <div className='container-price'>
                            <img src={ traceIcon } alt="Traçado do hamburguer para o preço" className="traceBurguer"></img>
                            <div className='priceBurguer'>
                                <div className='price'>
                                    <p>Apenas</p>
                                    {featuresItem && <h3> {currencyFormat(featuresItem.price)} </h3>}
                                </div>
                            </div>
                        </div>

                        <div className='content-burguerImage'>
                            {featuresItem && <img src={featuresItem.image} alt="Foto de um hamburguer" className="burguerImage"></img>}
                            <img src={ shadowBurguer } alt="Sombra do hamburguer" className="shadowBurguer"></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}