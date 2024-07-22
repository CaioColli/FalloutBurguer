import { CardMenu } from "../CardsMenu/CardsMenuComponent"
import { requests } from "../../../../Scripts/RequestApi"
import { useEffect, useState } from "react"

export const AccompanimentMenuComponent = () => {
    const [accompanimentMenu, setAccompanimentMenu] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await requests()
            setAccompanimentMenu(data.accompaniment)
        }

        fetchData()
    }, [])

    return (
        <>
            <CardMenu 
                data={ accompanimentMenu }
            />
        </>
    )
}
