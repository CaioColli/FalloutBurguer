import { useContext } from 'react'
import './SummaryComponent.css'
import { Context } from '../../../../Context/Context'
import { currencyFormat } from '../../../../Scripts/CurrencyFormat'
import { CardCart } from '../Card/CardComponent'

export const SummaryComponent = () => {
    const { data, totalValue } = useContext(Context)

    return (
        <>
            {data.length === 0 ?
                <div />
                :
                <CardCart>
                    <ul className='ul-summary'>
                        {Array.isArray(data) && data.map((item) => (
                            <li key={item.id}>
                                <p className='title'> {item.title} </p>

                                <div className='quantity-price'>
                                    <span className='quantity'>{`x${item.quantity}`}</span>
                                    <span className='price'>{currencyFormat(item.price * item.quantity)}</span>
                                </div>
                            </li>
                        ))}
                        <li>
                            <p className='title'>Total</p>
                            <span className='price'>{currencyFormat(totalValue)}</span>
                        </li>
                    </ul>
                </CardCart>
            }
        </>
    )
}