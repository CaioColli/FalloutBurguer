import { HeaderComponent } from './Components/Header/Component'
import { HomePageComponents } from './Components/HomePage/Component'

export function App() {
  return (
    <div>
      <HeaderComponent 
        itemOne = 'MAIS PEDIDOS'
        itemTwo = 'CARNE'
        itemThree = 'FRANGO'
        itemFour = 'ACOMPANHAMENTOS'
      />
  
      <HomePageComponents 
        tittleBurguer = 'Garden Fresh Burguer'
        descriptionBurguer = 'O Garden Fresh é uma explosão de frescor e sabor vegetal, perfeito para os amantes de saladas que desejam algo um pouco mais substancial. Começamos com um suculento hambúrguer de carne bovina, grelhado no ponto exato para manter a suculência e o sabor. Em seguida, sobre ele, é generosamente coberto com uma combinação de vegetais crocantes e frescos.'
        priceBurguer = 'R$ 29.99'
      />
    </div>
  )
}