import './FooterComponent.css'
import { CardCart } from "../Card/CardComponent"
import { FaRegCopyright } from "react-icons/fa"
import { BsGithub } from "react-icons/bs"
import { IoLogoLinkedin } from "react-icons/io5"

export const FooterComponent = () => {
    return (
        <>
            <CardCart>
                <div className='footer-content'>
                    <p>PROJETO SEM FINS LUCRATIVOS</p>

                    <div>
                        <div className='dev'>
                            <FaRegCopyright className='icon' />
                            <p>Desenvolvido por Caio Colli</p>
                        </div>

                        <div className='footer-icons'>
                            <a href='https://github.com/CaioColli' target='_blank'><BsGithub className='icon-footer' /></a>
                            <a href='https://www.linkedin.com/in/caiocolli/' target='_blank'><IoLogoLinkedin className='icon-footer' /></a>
                        </div>
                    </div>
                </div>
            </CardCart>
        </>
    )
}