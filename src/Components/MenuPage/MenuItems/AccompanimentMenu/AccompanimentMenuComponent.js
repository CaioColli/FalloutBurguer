import { CardMenu } from "../CardsMenu/CardsMenuComponent"
import { requests } from "../../../../Scripts/RequestApi"
import { useEffect, useState } from "react"

export const AccompanimentMenuComponent = ({ onClickBuy }) => {
    const [accompanimentMenu, setAccompanimentMenu] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await requests()
            setAccompanimentMenu(data.accompaniment)
        }

        fetchData()
    }, [])

    const handleClick = (item) => {
        onClickBuy(item)
    }

    return (
        <>
            <CardMenu 
                data={ accompanimentMenu }
                onClickBuy={ handleClick }
            />
        </>
    )
}
