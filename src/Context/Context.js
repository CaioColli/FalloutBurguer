import { createContext, useEffect, useState } from 'react'

export const Context = createContext()

export const ContextData = ({ children }) => {
    const [data, setData] = useState([])
    const [totalValue, setTotalValue] = useState(0)

    const clickBuyItem = (item, quantity = 1) => {
        setData((prevItems) => {
            const itemExists = prevItems.find((i) => i.title === item.title)
            if (itemExists) {
                return prevItems.map((i) => i.title === item.title ? { ...i, quantity: i.quantity + 1 } : i)
            }
            return [...prevItems, { ...item, quantity }]
        })
    }

    const handleRemoveItem = (itemId) => {
        setData(prevItems => prevItems.filter(item => item.id !== itemId))
    }

    const updateItemQuantity = (itemId, quantity) => {
        setData((prevItems) => prevItems.map((item) =>
            item.id === itemId ? { ...item, quantity } : item
        ))
    }

    const updateTotalValue = () => {
        const total = data.reduce((total, item) => total + item.price * item.quantity, 0);
        setTotalValue(total)
    }

    useEffect(() => {
        updateTotalValue()
    }, [data])

    const emptyValue = () => {
        return data.length === 0
    }

    const handleSubmitOrderData = () => {
        return data
    }

    return (
        <Context.Provider value={{ data, setData, clickBuyItem, handleRemoveItem, updateItemQuantity, handleSubmitOrderData, emptyValue, totalValue }}>
            {children}        
        </Context.Provider>
    )
}
