import { requests } from '../../../../Scripts/RequestApi'
import { useEffect, useState } from 'react'
import { CardMenu } from '../CardsMenu/CardsMenuComponent'

export const MoreOrdersMenuComponent = ({ onClickBuy }) => {
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

    const handleClick = (item) => {
        onClickBuy(item)
    }

    return (
        <>
            <CardMenu
                data={ moreOrdered } 
                onClickBuy={ handleClick }
            />
        </>
    )
}