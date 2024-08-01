import './FooterComponent.css'
import robot from '../../assets/Robot.svg'
import { IoLocationOutline } from 'react-icons/io5'
import { FaPhone } from "react-icons/fa6"
import { CiMail } from "react-icons/ci";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export const FooterComponent = () => {
    return (
        <footer className='footerPage'>

            <div className='footerContent'>
                <img src={robot}></img>

                <div className='institutional'>
                    <h3>INSTITUCIONAL</h3>
                    <ul>
                        <li>INÍCIO</li>
                        <li>QUEM SOMOS</li>
                        <li>CARDÁPIO</li>
                        <li>UNIDADES</li>
                        <li>CONTATO</li>
                    </ul>
                </div>

                <div className='contact'>
                    <h3>ENTRE EM CONTATO</h3>
                    <ul>
                        <li>
                            <div>
                                <IoLocationOutline />
                                Escritório Central São Paulo
                            </div>
                        </li>
                        <li>
                            <div>
                                <FaPhone />
                                (19)99270-2740
                            </div>
                        </li>
                        <li>
                            <div>
                                <CiMail />
                                caiocolli22@gmail.com
                            </div>
                        </li>
                    </ul>
                </div>

                <div className='socialMidia'>
                    <h3>REDES SOCIAIS</h3>
                    <ul>
                        <li> <IoLogoFacebook /> </li>
                        <li> <FaInstagram /> </li>
                        <li> <FaGithub /> </li>
                    </ul>
                    <span>#FALLOUTBURGUER</span>
                </div>
            </div>
        </footer>
    )
}