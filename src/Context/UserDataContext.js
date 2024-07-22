import { createContext, useState } from "react"

export const UserContext = createContext()

export const UserContextData = ({ children }) => {
    const [data, setData] = useState({
        nome: '',
        telefone: '',
        cep: '',
        bairro: '',
        estado: '',
        rua: '',
        cidade: '',
        numero: ''
    })

    const emptyValue = () => {
        const values = Object.values(data)
        return values.some(value => value === '' || value === undefined)
    }

    const handleSubmitUserData = () => {
        return data
    }

    return (
        <UserContext.Provider value={{ data, setData, handleSubmitUserData, emptyValue }}>
            {children}
        </UserContext.Provider>
    )
}
