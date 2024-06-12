import { CardMenu } from "../CardsMenu/CardsMenuComponent";
import { requests } from "../../Scripts/RequestApi";
import { useEffect, useState } from "react";

export const MeatMenuComponent = () => {
    const [meat, setMeat] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await requests()
            setMeat(data.meat)
        }

        fetchData()
    }, [])

    const handleClick = (id) => {
        console.log('O id do item é:', id)
    }

    return (
        <>
            <CardMenu onClick={ handleClick }
                data={meat} 
                id={'id'} 
                image={'image'} 
                title={'title'} 
                description={'description'}
                price={'price'}
            />
        </>
    )
}