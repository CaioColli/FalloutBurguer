import { CardMenu } from "../CardsMenu/CardsMenuComponent"
import { requests } from "../../Scripts/RequestApi"
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

    const handleClick = (id) => {
        console.log('O id do item é:', id)
    }

    return (
        <>
            <CardMenu onClick={handleClick}
                data={accompanimentMenu}
                id={'id'}
                image={'image'}
                title={'title'}
                description={'description'}
                price={'price'}
            />
        </>
    )
}