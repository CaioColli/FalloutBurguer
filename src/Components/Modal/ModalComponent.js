import './ModalComponent.css'
import { IoIosClose } from "react-icons/io"

export const Modal = ({ onClose, children }) => {
    return (
        <div className='modal'>
            <div className='content-modal'>
                <IoIosClose id='icon-close' className='icon-close' onClick={onClose} />
                { children }
            </div>
        </div>
    )
}