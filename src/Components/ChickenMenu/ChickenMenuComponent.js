import { CardMenu } from "../CardsMenu/CardsMenuComponent"
import { requests } from "../../Scripts/RequestApi"
import { useEffect, useState } from "react"

export const ChickenMenuComponent = () => {
    const [chicken, setChicken] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await requests()
            setChicken(data.chicken)
        }

        fetchData()
    }, [])

    const handleClick = (id) => {
        console.log('O id do item é:', id)
    }

    return (
        <>
            <CardMenu onClick={handleClick}
                data={chicken}
                id={'id'}
                image={'image'}
                title={'title'}
                description={'description'}
                price={'price'}
            />
        </>
    )
}