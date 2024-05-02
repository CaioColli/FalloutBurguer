import './ModalComponent.css'
import React, { Fragment, useState} from 'react'
import { IoIosClose } from "react-icons/io"
import { LuPhone } from "react-icons/lu"
import { IoLocationOutline } from "react-icons/io5"
import { locations } from '../LocationPage/LocationPageComponent'

export const Modal = ({ modalContent, onClose }) => {
    const { showInput, showImage, showUnits, showAdress, unit, phone, adress, location } = modalContent || {}
    const [search, setSearch] = useState('')
    const [ visibility, setVisibility ] = useState(false)

    const handleSearch= (event) => {
        setSearch(event.target.value)
        
        if (event.target.value.trim() === '') {
            setVisibility(false)
        } else {
            setVisibility(true)
        }
    }

    // Anotar
    // O uso do unit é quando se trata de um objeto, quando for string não é preciso
    // Vide https://www.youtube.com/watch?v=5Tq4-UgPTDs&t=16s&ab_channel=ViniciusDacal
    const toLower = search.toLowerCase()
    const locationsFiltered = locations.filter((location) => location.unit.toLowerCase().includes(toLower))

    return (
        <>
            <div className='modal-overlay'></div>

            <div className='modal'>
                <div className='content-modal'>
                    <div className='content-fixed'>
                        <IoIosClose id='icon-close' className='icon-close' onClick={onClose} />
                        {showInput && < input
                            type='text'
                            placeholder='Pesquise'
                            value={search}
                            onChange={ handleSearch } >
                        </input >}
                        {showImage && < img src='Images/Icone Burguer.svg' 
                            className='icon-burguer'
                            alt='Icone de um hamburguer'
                            style={{ display: visibility ? 'none' : 'block' }}>
                        </img>}
                    </div>

                    {showUnits && locationsFiltered.map((location, index) => {
                        return (
                            <div className='about-restaurant' key={index} style={{ display: visibility ? 'flex' : 'none' }}>
                                <img src='Images/Imagem Loja.png' alt='Imagem da lanchonete'></img>
                                <div>
                                    <h1> Unidade de {location.unit} </h1>
                                    <p> <LuPhone className='icon' /> {location.phone} </p>
                                    <p> <IoLocationOutline className='icon' /> {location.address} </p>
                                    <iframe
                                        title='Restaurant location'
                                        src={location.location}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className='map'>
                                    </iframe>
                                </div>
                            </div>
                        )
                    })}

                    {showAdress &&
                        <div className='about-restaurant' >
                            <img src='Images/Imagem Loja.png' alt='Imagem da lanchonete'></img>
                            <div>
                                <h1> Unidade de {unit} </h1>
                                <p> <LuPhone className='icon' /> {phone} </p>
                                <p> <IoLocationOutline className='icon' /> {adress} </p>
                                <iframe
                                    tittle='Restaurant location'
                                    src={location}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className='map'>
                                </iframe>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}