import { PageContainer } from './Components/PageContainer/PageContainerComponents'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { InitialPage } from './Components/InitialPage/InitialPage'
import { CartPage } from './Components/CartPage/CartPageComponent'
import { ContextData } from './Context/Context'

export const App = () => {
  return (
    <div>
      <PageContainer>
        <BrowserRouter>
          <ContextData>
            <Routes>
              <Route path='/' element={ <InitialPage /> } />
              <Route path='/carrinho' element={ <CartPage /> } />
              <Route path='*' element={ <div> Nada </div> } />
            </Routes>
          </ContextData>
        </BrowserRouter>
      </PageContainer>
    </div>
  )
}