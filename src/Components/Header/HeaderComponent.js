import './Header.css'
import { CiShoppingCart } from "react-icons/ci"
import { HiOutlineMenuAlt2 } from "react-icons/hi"
import { useState } from 'react'
import pageLogo from '../../assets/PageIcon.svg'
import { MenuBurguer } from './MenuBurguer/MenuBurguerComponent'
import { ShoppingCartComponent } from './ShoppingCart/ShoppingCartComponent'

export const HeaderComponent = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [showShoppingCart, setShowShoppingCart] = useState(false)
    
    const clickOpenShoppingCart = () => {
        setShowShoppingCart(true)
    }

    const clickCloseShoppingCart = () => {
        setShowShoppingCart(false)
    }

    const clickOpenMenu = () => {
        setShowMenu(true)
    }

    const clickCloseMenu = () => {
        setShowMenu(false)
    }

    return (
        <>
            {showMenu && <MenuBurguer onclose={clickCloseMenu}/>}
            {showShoppingCart &&  <ShoppingCartComponent onClose={ clickCloseShoppingCart } />}

            <div id='header-content' className='header-content' >
                
                <div className='btn-menu'> 
                <HiOutlineMenuAlt2 className='icon-menu' onClick={clickOpenMenu}/> 
                </div>

                <img src={pageLogo} alt='Logotipo hamburgueria'></img>

                <nav>
                    <ul>
                        <li>MAIS PEDIDOS</li>
                        <li>CARNE</li>
                        <li>FRANGO</li>
                        <li>ACOMPANHAMENTOS</li>
                    </ul>
                </nav>

                <div className='btns'>
                    <button className='btn-shoppingCart' onClick={ clickOpenShoppingCart }> 
                        <CiShoppingCart className='icon-shoppingCart' /> 
                    </button>
                </div>
            </div>
        </>
    )
}
