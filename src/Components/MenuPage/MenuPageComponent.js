import './MenuPage.css'
import { useEffect, useState } from "react"
import { requestAPI } from "../../Scripts/RequestApi"

export const MenuPage = () => {
    const [mostOrdered, setMostOrdered] = useState([])
    const [meat, setMeat] = useState([])
    const [chicken, setChicken] = useState([])

    function currencyFormat(value) {
        return value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
    }

    useEffect(() => {
        const fetchMoreOrders = async () => {
            const request = await requestAPI('https://raw.githubusercontent.com/CaioColli/BurguerHouseJson/main/MoreOrders.json')
            setMostOrdered(request.menu)
        }

        const fetchMeat = async () => {
            const request = await requestAPI('https://raw.githubusercontent.com/CaioColli/BurguerHouseJson/main/Meat.json')
            setMeat(request.menu)
        }

        const fetchChicken = async () => {
            const request = await requestAPI('https://raw.githubusercontent.com/CaioColli/BurguerHouseJson/main/Chicken.json')
            setChicken(request.menu)
        }

        fetchMoreOrders()
        fetchMeat()
        fetchChicken()
    }, [])

    return (
        <section className='menu'>
            <div className="menu-items">
                <h1>MAIS PEDIDOS</h1>

                <ul className="menu-list">
                    {mostOrdered && mostOrdered.map((burguer) => {
                        return (
                            <li className="item" key={burguer.id} >
                                <div className='leftSide'>
                                    <h2 className="title"> {burguer.title} </h2>
                                    <p className="description"> {burguer.description} </p>
                                    <p className="price"> {currencyFormat(burguer.price)} </p>
                                </div>
                                <div className="rightSide">
                                    <img className="image" src={burguer.image} />
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div className="menu-items">
                <h1>CARNE</h1>

                <ul className="menu-list">
                    {meat && meat.map((burguer) => {
                        return (
                            <li className="item" key={burguer.id} >
                                <div className='leftSide'>
                                    <h2 className="title"> {burguer.title} </h2>
                                    <p className="description"> {burguer.description} </p>
                                    <p className="price"> {currencyFormat(burguer.price)} </p>
                                </div>
                                <div className="rightSide">
                                    <img className="image" src={burguer.image} />
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div className="menu-items">
                <h1>FRANGO</h1>

                <ul className="menu-list">
                    {chicken && chicken.map((burguer) => {
                        return (
                            <li className="item" key={burguer.id} >
                                <div className='leftSide'>
                                    <h2 className="title"> {burguer.title} </h2>
                                    <p className="description"> {burguer.description} </p>
                                    <p className="price"> {currencyFormat(burguer.price)} </p>
                                </div>
                                <div className="rightSide">
                                    <img className="image" src={burguer.image} />
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}