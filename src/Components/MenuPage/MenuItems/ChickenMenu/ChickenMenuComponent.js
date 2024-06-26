import { CardMenu } from "../CardsMenu/CardsMenuComponent"
import { requests } from "../../../../Scripts/RequestApi"
import { useEffect, useState } from "react"

export const ChickenMenuComponent = ({ onClickBuy }) => {
    const [chicken, setChicken] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await requests()
            setChicken(data.chicken)
        }

        fetchData()
    }, [])

    const handleClick = (item) => {
        onClickBuy(item)
    }

    return (
        <>
            <CardMenu onClickBuy={handleClick}
                data={chicken}
            />
        </>
    )
}