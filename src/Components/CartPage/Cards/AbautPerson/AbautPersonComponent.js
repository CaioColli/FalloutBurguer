import { useContext } from 'react'
import { CardCart } from '../Card/CardComponent'
import { InputsComponent } from '../Inputs/InputsComponent'
import { UserContext } from '../../../../Context/UserDataContext'

export const AbautPersonComponent = () => {
    const { setData } = useContext(UserContext)

    return (
        <>
            <CardCart>
                <InputsComponent 
                    placeholder='Nome'
                    type='text'
                    label='Nome'
                    maxLength='20'
                    onChange={(e) => setData(prev => ({...prev, nome: e.target.value}))}
                />

                <InputsComponent 
                    placeholder='(00) 00000-0000'
                    type='tel'
                    label='Telefone'
                    inputType='phone'
                    onChange={(e) => setData(prev => ({...prev, telefone: e.target.value}))}
                />
            </CardCart>
        </>
    )
}