import { HeaderComponent } from './Components/Header/HeaderComponent'
import { HomePageComponents } from './Components/HomePage/HomePageComponent'
import { LocationPage } from './Components/LocationPage/LocationPageComponent'
import { MenuPage } from './Components/MenuPage/MenuPageComponent'

export function App() {
  return (
    <div>
      <HeaderComponent />
  
      <HomePageComponents />
      
      <LocationPage />

      <MenuPage />
    </div>
  )
}