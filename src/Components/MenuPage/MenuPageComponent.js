import './MenuPageComponent.css'
import useScrollOnDrag from 'react-scroll-ondrag'
import { AccompanimentMenuComponent } from './MenuItems/AccompanimentMenu/AccompanimentMenuComponent'
import { ChickenMenuComponent } from './MenuItems/ChickenMenu/ChickenMenuComponent'
import { MeatMenuComponent } from './MenuItems/MeatMenu/MeatMenuComponent'
import { MoreOrdersMenuComponent } from './MenuItems/MoreOrdersMenu/MoreOrdersMenuComponent'
import { useEffect, useRef, useState } from 'react'

export const MenuPage = ({ onClickBuy }) => {
    const [width, setWidth] = useState()

    const itemClicked = (item) => {
        onClickBuy(item)
    }

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

                <MoreOrdersMenuComponent onClickBuy={ itemClicked } />

                <a href='' onClick={ clickDisable }>Ver todos...</a>
            </div>

            <div className="menu-items" {...(width ? meatEvents : {})} ref={meatRef}>
                <h1>CARNE</h1>

                <MeatMenuComponent onClickBuy={ itemClicked } />

                <a href='' onClick={ clickDisable }>Ver todos...</a>
            </div>

            <div className="menu-items" {...(width ? chickenEvents : {})} ref={chickenRef}>
                <h1>FRANGO</h1>

                <ChickenMenuComponent onClickBuy={ itemClicked }/>
                
                <a href='' onClick={ clickDisable }>Ver todos...</a>
            </div>

            <div className="menu-items" {...(width ? accompanimentEvents : {})} ref={accompanimentRef}>
                <h1>ACOMPANHAMENTOS </h1>

                <AccompanimentMenuComponent onClickBuy={ itemClicked } />

                <a href='' onClick={ clickDisable }>Ver todos...</a>
            </div>
        </section>
    )
}