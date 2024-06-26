import './ShoppingCartComponent.css'
import { IoIosClose } from "react-icons/io"
import { ModalOverlay } from '../../ModalOverlay/ModalOverlayComponent'
import { closeAnimation } from '../../../Scripts/MenusAnimation'
import { animateElements } from '../../../Scripts/MenusAnimation'
import { useEffect, useRef, useState } from 'react'
import vaultBoy from '../../../assets/VaultBoyTired.svg'
import { HiOutlineMinusSm } from "react-icons/hi";
import { HiPlus } from "react-icons/hi";
import { currencyFormat } from '../../../Scripts/CurrencyFormat'
import { Button } from '../../Buttons/Button'

export const ShoppingCartComponent = ({ items, onClose }) => {
    const ref = useRef(null)
    const [quantities, setQuantities] = useState({})

    const handleCloseClick = () => {
        closeAnimation(ref.current, 200, onClose)
    }

    useEffect(() => {
        const initialQuantities = {}
        items.forEach(item => {
            initialQuantities[item.id] = 1
        })
        setQuantities(initialQuantities)
    }, [items])

    const decrement = (id) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities, [id]: Math.max((prevQuantities[id] || 1) - 1, 1)
        }))
    }

    const increment = (id) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities, [id]: Math.min((prevQuantities[id] || 1) + 1, 10)
        }))
    }

    useEffect(() => {
        animateElements(ref.current, 200, 0)

        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                handleCloseClick()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [onClose])

    return (
        <>
            <ModalOverlay />

            <aside className='shopping-cart-menu' ref={ref}>
                <section>
                    <header>
                        <IoIosClose onClick={handleCloseClick} className='icon-close' />
                    </header>

                    <nav>
                        <ul>
                            {items && items.length > 0 ? (
                                items.map(item => (
                                    <li key={item.id}>
                                        <div className='card-image'>
                                            <img className="image" src={item.image} alt={`Imagem ${item.title}`} />
                                        </div>
                                        <div className='item-description'>
                                            <p className='title'>{item.title}</p>

                                            <div className='price-container'>
                                                    <div className='buttons'>
                                                        <div className='quantity-items'>
                                                            <button className='quantify-buttons' onClick={() => decrement(item.id)}> <HiOutlineMinusSm /></button>
                                                            <input
                                                                type='number'
                                                                value={quantities[item.id]}
                                                                readOnly />
                                                            <button className='quantify-buttons' onClick={() => increment(item.id)}> <HiPlus /> </button>
                                                        </div>

                                                        <Button size='m'>Excluir</Button>
                                                    </div>

                                                <p className='price'>{currencyFormat(item.price)}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            ) : (
                                <div className='empty-cart-warning'>
                                    <div>
                                        <img src={vaultBoy}></img>
                                    </div>

                                    <span>Seu carrinho está vazio!</span>
                                </div>
                            )}
                        </ul>
                    </nav>
                </section>
            </aside>
        </>
    )
}
