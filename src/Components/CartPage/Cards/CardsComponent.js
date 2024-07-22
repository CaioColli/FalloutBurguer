import './CardsComponent.css'
import { BackPageComponent } from './BackPage/BackPageComponent'
import { SummaryComponent } from "./Summary/SummaryComponent"
import { AbautPersonComponent } from './AbautPerson/AbautPersonComponent'
import { AdressPersonComponent } from './AdressPerson/AdressPerson'
import { ConfirmOrderComponent } from './ConfirmOrder/ConfirmOrderComponent'
import { FooterComponent } from './Footer/FooterComponent'
import { UserContextData } from '../../../Context/UserDataContext'

export const CardsComponent = () => {
    return (
        <section className='cards'>
            <UserContextData>
                <SummaryComponent />
                <BackPageComponent />
                <AbautPersonComponent />
                <AdressPersonComponent />
                <ConfirmOrderComponent />
                <FooterComponent />
            </UserContextData>
        </section>
    )
}