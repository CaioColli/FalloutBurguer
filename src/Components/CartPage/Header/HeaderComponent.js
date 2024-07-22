import './HeaderComponent.css'
import pageLogo from '../../../assets/PageIcon.svg'

export const HeaderComponent = () => {
    return (
        <header className='cart-header'>
            <img src={pageLogo}></img>
        </header>
    )
}