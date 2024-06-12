import './LocationPage.css'
import { requests } from '../../Scripts/RequestApi'
import { MapModal } from '../LocationModal/LocationModalComponent'
import { Button } from '../Buttons/Button'
import { useEffect, useState, useRef } from 'react'
import useScrollOnDrag from 'react-scroll-ondrag'
import vaultBoy from '../../assets/VaultBoy.svg'

export const LocationPage = () => {
    const [showModal, setShowModal] = useState(false)
    const [modalContent, setModalContent] = useState({})
    const [locations, setLocations] = useState([])
    const [width, setWidth] = useState()
    
    const ref = useRef()
    const { events } = useScrollOnDrag(ref)

    const clickOpenModal = (content) => {
        setModalContent(content)
        setShowModal(true)
    }

    const clickCloseModal = () => {
        setShowModal(false)
    }

    useEffect(() => {
        const sizeWindow = window.innerWidth

        if (sizeWindow < 1280) {
            setWidth(true)
        } else {
            setWidth(false)
        }

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

    return (
        <section className='locationPage'>
            {showModal && <MapModal modalContent={ modalContent } onClose={clickCloseModal} />}

            <div className='leftSide-locationPage'>
                <div className='content-leftSide'>
                    <h1> SAIBA ONDE NOS ENCONTRAR </h1>
                    <img src={ vaultBoy }></img>
                    <p> Consulte as unidades próxima a você </p>
                    <Button size='l' onClick={
                        () => clickOpenModal({
                            showSearch: true,
                            showUnits: true
                        })
                    }> 
                    <span className='text-button'> Pesquisar </span>
                    </Button>
                </div>
            </div>

            <div className='rightSide-locationPage'>
                <div className='content-rightSide'>
                    {/* Se o tamanho da tela for de um smartphone, execute a função da biblioteca useScrollOnDrag() */}
                    <div className='rightSide-items'
                        {...(width ? events : {})}
                        ref={ref}>

                        <h2>NOSSAS UNIDADES</h2>

                        <ul className='rightSide-list'>
                            {locations && locations.map((location) => {
                                return (
                                    <li className='item' key={ location.id} >
                                        <div className='item-image'>
                                            <img src={location.image}></img>
                                        </div>
                                        <div className='item-information'>
                                            <h3 className='item-title'> {`Unidade ${location.location}`} </h3>
                                            <p className='item-phone'> { location.phone } </p>
                                            <p className='item-adress'> { location.adress } </p>
                                            <iframe
                                                title='Restaurant location'
                                                src={location.map}
                                                allowFullScreen=""
                                                loading="eager"
                                                referrerPolicy="no-referrer-when-downgrade"
                                                className='item-map'>
                                            </iframe>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}