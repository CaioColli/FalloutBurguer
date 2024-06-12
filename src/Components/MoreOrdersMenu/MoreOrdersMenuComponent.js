import { requests } from '../../Scripts/RequestApi'
import { useEffect, useState } from 'react'
import { CardMenu } from '../CardsMenu/CardsMenuComponent'

export const MoreOrdersMenuComponent = () => {
    const [moreOrdered, setMoreOrdered] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await requests()
                setMoreOrdered(data.moreOrders)
            } catch (error) {
                console.error('Erro ao buscar os dados', error)
            }
        }

        fetchData()
    }, [])

    const handleClick = (id) => {
        // console.log('O id do item é:', id)
    }

    return (
        <>
            <CardMenu onClick={ handleClick } 
                data={moreOrdered} 
                id={'id'} 
                image={'image'} 
                title={'title'} 
                description={'description'}
                price={'price'}
            />
        </>
    )
}