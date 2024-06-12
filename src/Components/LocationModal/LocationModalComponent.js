import './LocationModalComponent.css'
import React, { useEffect, useState } from 'react'
import { LuPhone } from "react-icons/lu"
import { IoLocationOutline } from "react-icons/io5"
import { requests } from '../../Scripts/RequestApi'
import { ModalOverlay } from '../ModalOverlay/ModalOverlayComponent'
import { Modal } from '../Modal/ModalComponent'
import pageLogo from '../../assets/PageIconYellow.svg'

export const MapModal = ({ modalContent, onClose }) => {
    const { showSearch, showUnits } = modalContent || {}
    const [search, setSearch] = useState('')
    const [visibility, setVisibility] = useState(false)
    const [ locations, setLocations ] = useState([])
    const handleSearch = (event) => {
        setSearch(event.target.value)

        if (event.target.value.trim() === '') {
            setVisibility(false)
        } else {
            setVisibility(true)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await requests()
                setLocations(data.locations)
            } catch (error) {
                console.error('Erro ao buscar os dados', error)
            }
        }

        fetchData()
    }, [])

    // O uso do unit é quando se trata de um objeto, quando for string não é preciso
    // Vide https://www.youtube.com/watch?v=5Tq4-UgPTDs&t=16s&ab_channel=ViniciusDacal
    const toLower = search.toLowerCase()
    const locationsFiltered = locations.filter((location) => location.location && location.location.toLowerCase().includes(toLower))

    return (
        <>
            <ModalOverlay />

            <Modal onClose={onClose}>
                <div className='content-fixed'>
                    {showSearch &&
                        <>
                            <input
                                type='text'
                                placeholder='Pesquise'
                                value={search}
                                onChange={ handleSearch } >
                            </input >

                            <img src={ pageLogo }
                                className='icon-burguer'
                                alt='Icone de um hamburguer'
                                style={{ display: visibility ? 'none' : 'block' }}>
                            </img>
                        </>
                    }

                    {showUnits && locationsFiltered.map((location, index) => {
                        return (
                            <div className='about-restaurant' key={index} style={{ display: visibility ? 'flex' : 'none' }}>
                                <img src='Images/Imagem Loja.png' alt='Imagem da lanchonete'></img>
                                <div>
                                    <h1> Unidade de {location.location} </h1>
                                    <p> <LuPhone className='icon' /> {location.phone} </p>
                                    <p> <IoLocationOutline className='icon' /> {location.adress} </p>
                                    <iframe
                                        title='Restaurant location'
                                        src={location.map}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className='map'>
                                    </iframe>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Modal>
        </>
    )
}