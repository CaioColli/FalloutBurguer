import './ShoppingCartComponent.css'
import { IoIosClose } from "react-icons/io"
import { ModalOverlay } from '../../ModalOverlay/ModalOverlayComponent'
import { closeAnimation } from '../../../Scripts/MenusAnimation'
import { animateElements } from '../../../Scripts/MenusAnimation'
import { useContext, useEffect, useRef, useState } from 'react'
import vaultBoy from '../../../assets/VaultBoyTired.svg'
import { HiOutlineMinusSm } from "react-icons/hi";
import { HiPlus } from "react-icons/hi";
import { currencyFormat } from '../../../Scripts/CurrencyFormat'
import { Button } from '../../Buttons/Button'
import { Link } from 'react-router-dom'
import { Context } from '../../../Context/Context'

export const ShoppingCartComponent = ({ onClose }) => {
    const ref = useRef(null)
    const [quantities, setQuantities] = useState({})
    const { data, handleRemoveItem, updateItemQuantity } = useContext(Context)

    useEffect(() => {
        const initialQuantities = {}
        data.forEach(item => {
            // Faz com que a cada vez clicado em adicionar ao carrinho ele adicione mais 1 no input ao invés de duplicar o elemento
            initialQuantities[item.id] = item.quantity || 1
        })
        setQuantities(initialQuantities)
    }, [data])

    const handleCloseClick = () => {
        closeAnimation(ref.current, 200, onClose)
    }

    const decrement = (id) => {
        setQuantities(prevQuantities => {
            const newQuantity = Math.max((prevQuantities[id] || 1) - 1, 1)
            updateItemQuantity(id, newQuantity)
            return{ ...prevQuantities, [id]: newQuantity }
        })
    }

    const increment = (id) => {
        setQuantities(prevQuantities => {
            const newQuantity = Math.min((prevQuantities[id] || 1) + 1, 10)
            updateItemQuantity(id, newQuantity)
            return{ ...prevQuantities, [id]: newQuantity }
        })
    }

    const total = Array.isArray(data) ? data.reduce((acc, item) => {
        return acc + item.price * (quantities[item.id] || 1);
    }, 0) : 0

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
                            {Array.isArray(data) && data.length > 0 ? (
                                data.map(item => (
                                    <li key={item.id}>
                                        <div className='item-description'>
                                            <div className='card-image'>
                                                <img className="image" src={item.image} alt={`Imagem ${item.title}`} />
                                            </div>

                                            <p className='title'>{item.title}</p>
                                        </div>

                                        <div className='price-container'>
                                            <div className='buttons'>
                                                <div className='quantity-items'>
                                                    <button className='quantify-buttons' onClick={() => decrement(item.id)}> <HiOutlineMinusSm /></button>
                                                    <input
                                                        type='number'
                                                        // Passando o valor 1 garante que o valor nunca seja undefined
                                                        value={quantities[item.id] || 1}
                                                        readOnly />
                                                    <button className='quantify-buttons' onClick={() => increment(item.id)}> <HiPlus /> </button>
                                                </div>

                                                <Button size='m' onClick={() => handleRemoveItem(item.id)}>Excluir</Button>
                                            </div>
                                        </div>
                                            <p className='price'>{currencyFormat(item.price)}</p>
                                    </li>
                                ))
                            ) : (
                                <div className='empty-cart-warning'>
                                    <div>
                                        <img src={vaultBoy} alt="Vault Boy Tired" />
                                    </div>

                                    <span>Seu carrinho está vazio!</span>
                                </div>
                            )}
                        </ul>
                    </nav>
                        {data.length > 0 && (
                            <div className='total-value-cart'>
                                <span className='total-value'>{`Total ${currencyFormat(total)}`}</span> 
                                <Link to='/carrinho'>
                                    <Button size='l'> Confirmar </Button>
                                </Link>
                            </div>
                        )}
                </section>
            </aside>
        </>
    )
}
