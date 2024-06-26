import './MenuModal.css'
import { Modal } from "../../../Modal/ModalComponent"
import vaultBoyHungry from '../../../../assets/VaultBoyHungry.svg'
import { useState } from 'react'
import { HiOutlineMinusSm } from "react-icons/hi";
import { HiPlus } from "react-icons/hi";
import { Button } from '../../../Buttons/Button';
import { currencyFormat } from '../../../../Scripts/CurrencyFormat';
import { ModalOverlay } from '../../../ModalOverlay/ModalOverlayComponent';

export const MenuModal = ({ item, onClose, onClickBuy}) => {
    const [count, setCount] = useState(1)

    if(!item) return null

    if (count === 0) {
        onClose()
    }

    const confirmOrder = (item) => {
        onClose()
        console.log(item)
        onClickBuy(item)
    }

    const decrement = () => {
        setCount(prevCount => Math.max(prevCount - 1, 0))
    }  
    
    const increment = () => {
        setCount(prevCount => {
            if (prevCount < 10) {
                return prevCount + 1
            } else {
                return prevCount
            }
        })

    }

    return (
        <>
            <ModalOverlay />

            <Modal onClose={onClose}>
                <div className='menu-modal-content'>
                    <aside>
                        <img src={ vaultBoyHungry }></img>
                    </aside>
                    <div className='informations-item'>
                        <div className='item-image'>
                            <img src={item.image}></img>
                        </div>
                        <div className='item-description'>
                            <p>{item.fullDescription}</p>
                            <span>{currencyFormat(item['price'])}</span>

                            <footer>
                                <div className='quantity-items'> 
                                    <button className='quantify-buttons' onClick={ decrement }> <HiOutlineMinusSm /></button>
                                        <input  
                                        type='number' 
                                        value={count} 
                                        readOnly/>
                                    <button className='quantify-buttons' onClick={ increment }> <HiPlus /> </button>
                                </div>
                                    <Button size='m' onClick={() => confirmOrder(item)}>
                                        Confirmar
                                    </Button>
                            </footer>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}
