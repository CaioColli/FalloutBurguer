import { CardMenu } from "../CardsMenu/CardsMenuComponent"
import { requests } from "../../../../Scripts/RequestApi"
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

    return (
        <>
            <CardMenu 
                data={chicken}
            />
        </>
    )
}