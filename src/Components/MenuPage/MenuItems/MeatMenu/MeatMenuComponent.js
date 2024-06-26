import { CardMenu } from "../CardsMenu/CardsMenuComponent";
import { requests } from "../../../../Scripts/RequestApi";
import { useEffect, useState } from "react";

export const MeatMenuComponent = ({ onClickBuy }) => {
    const [meat, setMeat] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await requests()
            setMeat(data.meat)
        }

        fetchData()
    }, [])

    const handleClick = (item) => {
        onClickBuy(item)
    }

    return (
        <>
            <CardMenu
                data={meat}
                onClickBuy={ handleClick }
            />
        </>
    )
}