import './ButtonToTop.css'
import { LuArrowUpSquare } from "react-icons/lu"

export const ButtonToTop = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    

    return (
        <>
            <button className='btn-top' onClick={scrollToTop}>
                <LuArrowUpSquare className='icon-top'/>
            </button>
        </>
    )
}