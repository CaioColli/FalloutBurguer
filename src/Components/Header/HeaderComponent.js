import './Header.css'
import { CiShoppingCart } from "react-icons/ci"
import { FaCircle } from "react-icons/fa"
import { HiOutlineMenuAlt2 } from "react-icons/hi"
import { useEffect, useState } from 'react'
import pageLogo from '../../assets/PageIcon.svg'
import { MenuBurguer } from './MenuBurguer/MenuBurguerComponent'
import { ShoppingCartComponent } from './ShoppingCart/ShoppingCartComponent'

export const HeaderComponent = () => {
    const [size, setSize] = useState(false)
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

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset
            const sizeWindow = window.innerWidth
    
            if (sizeWindow < 1280 && scrollPosition > 40) {
                setSize(true)
            } else {
                setSize(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            {showMenu && <MenuBurguer onclose={clickCloseMenu}/>}
            {showShoppingCart &&  <ShoppingCartComponent onClose={ clickCloseShoppingCart } />}

            <div id='header-content' className='header-content' style={{ backgroundColor: size ? 'rgb(0,0,0,70%)' : 'transparent'}} >
                
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
                        <FaCircle className='icon-circle' />
                        <CiShoppingCart className='icon-shoppingCart' /> 
                    </button>
                </div>
            </div>
        </>
    )
}
