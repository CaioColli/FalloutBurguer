import './ConfirmOrderComponent.css'
import { Button } from "../../../Buttons/Button"
import { CardCart } from "../Card/CardComponent"
import { useContext } from 'react'
import { UserContext } from '../../../../Context/UserDataContext'
import { Context } from '../../../../Context/Context'
import Swal from 'sweetalert2'
import { currencyFormat } from '../../../../Scripts/CurrencyFormat'

export const ConfirmOrderComponent = () => {
    const { handleSubmitUserData, emptyValue: emptyUserData } = useContext(UserContext)
    const { handleSubmitOrderData, emptyValue: emptyOrderData } = useContext(Context)
    const { totalValue } = useContext(Context)

    const handleConfirmOrder = () => {
        const userData = handleSubmitUserData()
        const orderData = handleSubmitOrderData()

        const OrderItems = orderData.map(item => `${item.quantity} x ${item.title}`).join(', ')

        const message = 
        `Olá, gostaria de fazer um pedido:
        -----✍️(◔◡◔)-----
        Nome: ${userData.nome}
        -----✍️(◔◡◔)-----
        Telefone: ${userData.telefone}
        -----✍️(◔◡◔)-----
        Endereço: ${userData.rua}, ${userData.numero}, ${userData.bairro}, ${userData.cidade}, ${userData.estado}, CEP: ${userData.cep}
        -----✍️(◔◡◔)-----
        Pedido: 
        -----✍️(◔◡◔)-----
        ${OrderItems}
        -----✍️(◔◡◔)-----
        O valor total do pedido é:
        ${currencyFormat(totalValue)}
        `

        navigator.clipboard.writeText(message).then(() => {
            const whatsappNumber = '+5519992702740'
            const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`

            Swal.fire({
                position: "center",
                icon: "info",
                title: "A mensagem foi copiada para a área de transferência.",
                text: 'Cole a mensagem no WhatsApp.'
            })

            setTimeout(() => {
                window.open(whatsappLink, '_blank')
            }, 4000)

        }, (err) => {
            console.error('Erro ao copiar a mensagem:', err)
        })
    }

    const handleButtonDisabled = () => {
        if (emptyUserData()) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Preencha os campos para prosseguir"
            })
        } else if (emptyOrderData()) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Você não possui itens em seu carrinho"
            })
        }
    }

    // Verifica se o botão deve ser desativado
    const isButtonDisabled = emptyOrderData() || emptyUserData()

    return (
        <>
            <CardCart>
                <div className='order-content'>
                    <div>
                        <p>O PEDIDO É PROCESSADO VIA <span>WHATSAPP</span></p>

                        {isButtonDisabled ? 
                        <Button size='l' disabled='disabled' onClick={handleButtonDisabled}>Confirmar</Button> 
                        : 
                        <Button size='l' onClick={handleConfirmOrder}>Confirmar</Button>}
                    </div>
                </div>
            </CardCart>
        </>
    )
}
