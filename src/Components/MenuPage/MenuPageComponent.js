import './MenuPageComponent.css'
import { useEffect, useRef, useState } from 'react'
import { MoreOrdersMenuComponent } from '../MoreOrdersMenu/MoreOrdersMenuComponent'
import { MeatMenuComponent } from '../MeatMenu/MeatMenuComponent'
import { ChickenMenuComponent } from '../ChickenMenu/ChickenMenuComponent'
import { AccompanimentMenuComponent } from '../AccompanimentMenu/AccompanimentMenuComponent'
import useScrollOnDrag from 'react-scroll-ondrag'

export const MenuPage = () => {
    const [width, setWidth] = useState()

    const moreOrdersRef  = useRef()
    const meatRef   = useRef()
    const chickenRef   = useRef()
    const accompanimentRef   = useRef()

    const { events: moreOrdersEvents } = useScrollOnDrag(moreOrdersRef)
    const { events: meatEvents } = useScrollOnDrag(meatRef)
    const { events: chickenEvents } = useScrollOnDrag(chickenRef)
    const { events: accompanimentEvents } = useScrollOnDrag(accompanimentRef)

    const clickDisable = (event) => {
        event.preventDefault()
    }

    useEffect(() => {
        const sizeWidth = window.innerWidth

        if (sizeWidth < 1280) {
            setWidth(true)
        } else {
            setWidth(false)
        }
    }, [])

    return (
        <section className='menu'>
            <div className="menu-items" {...(width ? moreOrdersEvents : {})} ref={moreOrdersRef}>
                <h1>MAIS PEDIDOS</h1>

                <MoreOrdersMenuComponent />

                <a href='' onClick={ clickDisable }>Ver todos...</a>
            </div>

            <div className="menu-items" {...(width ? meatEvents : {})} ref={meatRef}>
                <h1>CARNE</h1>

                <MeatMenuComponent />

                <a href='' onClick={ clickDisable }>Ver todos...</a>
            </div>

            <div className="menu-items" {...(width ? chickenEvents : {})} ref={chickenRef}>
                <h1>FRANGO</h1>

                <ChickenMenuComponent />
                
                <a href='' onClick={ clickDisable }>Ver todos...</a>
            </div>

            <div className="menu-items" {...(width ? accompanimentEvents : {})} ref={accompanimentRef}>
                <h1>ACOMPANHAMENTOS </h1>

                <AccompanimentMenuComponent />

                <a href='' onClick={ clickDisable }>Ver todos...</a>
            </div>
        </section>
    )
}