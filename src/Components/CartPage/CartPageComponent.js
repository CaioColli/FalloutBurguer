import { CardsComponent } from './Cards/CardsComponent'
import './CartPageComponent.css'
import { HeaderComponent } from './Header/HeaderComponent'

export const CartPage = () => {
    return (
        <div className='cartPage'>
            <HeaderComponent />
            <CardsComponent />
        </div>
    )
}