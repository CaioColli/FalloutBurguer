import { CardMenu } from "../CardsMenu/CardsMenuComponent";
import { requests } from "../../../../Scripts/RequestApi";
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

    return (
        <>
            <CardMenu
                data={meat}
            />
        </>
    )
}