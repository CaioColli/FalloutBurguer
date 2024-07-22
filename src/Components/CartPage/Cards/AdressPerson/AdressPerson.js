import { useContext, useEffect, useState } from "react"
import { CardCart } from "../Card/CardComponent"
import { InputsComponent } from "../Inputs/InputsComponent"
import useViaCep from "@rsiqueira/use-viacep"
import { UserContext } from "../../../../Context/UserDataContext"

export const AdressPersonComponent = () => {
    const [dataCep, setDataCep] = useState('')
    const {cep} = useViaCep(dataCep)

    const { setData } = useContext(UserContext)

    useEffect(() => {
        if (cep) {
            setData(prev => ({
                ...prev,
                cep: cep.cep,
                bairro: cep.bairro,
                estado: cep.uf,
                rua: cep.logradouro,
                cidade: cep.localidade
            }))
        }
    }, [cep, setData])
    
    return (
        <>
            <CardCart>
                <InputsComponent
                    placeholder='CEP'
                    type='text'
                    label='CEP'
                    maxLength='8'
                    onChange={(e) => setDataCep(e.target.value)}
                />
                <InputsComponent 
                    placeholder='Bairro'
                    type='text'
                    label='Bairro'
                    valueCep={cep.bairro}
                />
                <InputsComponent 
                    placeholder='Estado'
                    type='text'
                    label='Estado'
                    maxLength='18'
                    valueCep={cep.uf}
                />
                <InputsComponent 
                    placeholder='Rua'
                    type='text'
                    label='Rua'
                    valueCep={cep.logradouro}
                />
                <InputsComponent 
                    placeholder='Cidade'
                    type='text'
                    label='Cidade'
                    valueCep={cep.localidade}
                />
                <InputsComponent 
                    placeholder='Numero'
                    type='number'
                    label='Numero'
                    onChange={(e) => setData(prev => ({...prev, numero: e.target.value}))}
                />
            </CardCart>
        </>
    )
}