//import { useEffect, useState } from 'react'
import { useState } from 'react'
import { HeaderComponent } from './Components/Header/HeaderComponent'
import { HomePageComponents } from './Components/HomePage/HomePageComponent'
import { LocationPage } from './Components/LocationPage/LocationPageComponent'
import { MenuPage } from './Components/MenuPage/MenuPageComponent'
import { PageContainer } from './Components/PageContainer/PageContainerComponents'

export const App = () => {
  const [ itemInCart, setItemsInCart ] = useState([])

  const clickBuyItem = (item) => {
    setItemsInCart((prevItems) => [...prevItems, item])
  }

  return (
    <div>
      <PageContainer>
          <HeaderComponent itemsInCart={ itemInCart } />
      
          <HomePageComponents />
          
          <LocationPage />

          <MenuPage onClickBuy={ clickBuyItem } />
      </PageContainer>
    </div>
  )
}