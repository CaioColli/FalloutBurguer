import { Link } from 'react-router-dom'
import { CardCart } from '../Card/CardComponent'
import './BackPageComponent.css'
import { IoChevronBackSharp } from "react-icons/io5"

export const BackPageComponent = () => {
    return (
        <>
            <CardCart>
                <div className='backPageContent'>
                    <Link to='/' className='backPage'>
                        <IoChevronBackSharp className='icon' />
                        <p>Voltar</p>
                    </Link>
                </div>
            </CardCart>
        </>
    )
}