import { useEffect, useRef } from 'react'
import './ModalComponent.css'
import { IoIosClose } from "react-icons/io"

export const Modal = ({ onClose, children }) => {
    const ref = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClose()
            }
        }

        const handleScapeKey = (event) => {
            if (event.key === 'Escape') {
                onClose()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        document.addEventListener('keydown', handleScapeKey)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('keydown', handleScapeKey)
        }

    }, [onClose])

    return (
        <>
            <dialog className='modal' ref={ref} open>
                <div className='content-modal'>
                    <IoIosClose id='icon-close' className='icon-close' onClick={onClose} />
                    { children }
                </div>
            </dialog>
        </>
    )
}
