import './MenuBurguerComponent.css'
import { ModalOverlay } from '../../ModalOverlay/ModalOverlayComponent'
import { IoIosClose } from "react-icons/io"
import { FaRegCopyright } from "react-icons/fa6";
import { useEffect, useRef } from 'react';
import { closeAnimation } from '../../../Scripts/MenusAnimation';
import { animateElements } from '../../../Scripts/MenusAnimation';

export const MenuBurguer = ({ onclose }) => {
    const ref = useRef(null)

    const handleCloseClick = () => {
        closeAnimation(ref.current, -200, onclose)
    }

    useEffect(() => {
        animateElements(ref.current, -200, 0)

        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                handleCloseClick()
            }
        }

        const handleScapeKey = (event) => {
            if (event.key === 'Escape' ) {
                handleCloseClick()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        document.addEventListener('keydown', handleScapeKey)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('keydown', handleScapeKey)
        }
    }, [ onclose ])

    return (
        <>
            <ModalOverlay />

            <aside className='menu-burguer' ref={ref}>
                <header>
                    <IoIosClose onClick={ handleCloseClick } className='icon-close' />
                </header>

                <nav className='nav-products'>
                    <ul>
                        <li>MAIS PEDIDOS</li>
                        <li >CARNE</li>
                        <li>FARNGO</li>
                        <li>ACOMPANHAMENTOS</li>
                    </ul>
                </nav>

                <nav className='nav-inf'>
                    <ul>
                        <li> <a href='https://github.com/CaioColli' target='_black'> GitHub </a> </li>
                        <li> <a href='https://www.linkedin.com/in/caiocolli/' target='_black'> Linkedin </a> </li>
                    </ul>
                </nav>

                <footer>
                    <div>
                        <FaRegCopyright className='icon-copyright'/>
                        <span>CaioColli</span>
                    </div>
                </footer>
            </aside>
        </>
    )
}