import './Component.css'
import { CiShoppingCart } from "react-icons/ci";
import { GoSun } from "react-icons/go";
import { FaCircle } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

export const HeaderComponent = ({itemOne, itemTwo, itemThree, itemFour}) => {
    return (
        <div className='header-content'>
            
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
