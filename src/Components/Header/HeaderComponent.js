import './Header.css'
import { CiShoppingCart } from "react-icons/ci";
import { GoSun } from "react-icons/go";
import { FaCircle } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useEffect, useState } from 'react';

export const HeaderComponent = ({itemOne, itemTwo, itemThree, itemFour}) => {
    const [size, setSize] = useState(false)

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
        <div id='header-content' className='header-content' style={{ backgroundColor: size ? '#fff' : 'transparent'}} >
            
            <div className='btn-menu'> 
            <HiOutlineMenuAlt2 className='icon-menu' /> 
            </div>

            <img src="Images/IconeHamburguer.svg" alt='Logotipo de um hamburguer'></img>

            <ul>
                <li>{itemOne}</li>
                <li>{itemTwo}</li>
                <li>{itemThree}</li>
                <li>{itemFour}</li>
            </ul>

            <div className='btns'>
                <button className='btn-darkMode'> <GoSun /> </button>
                <button className='btn-shoppingCart'> 
                    <FaCircle className='icon-circle' />
                    <CiShoppingCart className='icon-shoppingCart' /> 
                </button>
            </div>
        </div>
    )
}
