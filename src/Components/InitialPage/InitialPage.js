import { ButtonToTop } from "../Buttons/ButtonToTop"
import { HeaderComponent } from "../Header/HeaderComponent"
import { HomePageComponents } from "../HomePage/HomePageComponent"
import { LocationPage } from "../LocationPage/LocationPageComponent"
import { MenuPage } from "../MenuPage/MenuPageComponent"

export const InitialPage = () => {
    return (
        <>
            <ButtonToTop />
            <HeaderComponent />
            <HomePageComponents />
            <LocationPage />
            <MenuPage />
        </>
    )
}