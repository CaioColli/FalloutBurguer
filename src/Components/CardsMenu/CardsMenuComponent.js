import './CardsMenuComponent.css'
import { currencyFormat } from '../../Scripts/CurrencyFormat'
import { Button } from '../Buttons/Button'
import { CiShoppingCart } from "react-icons/ci"
import radiationIcon from '../../assets/RadiationIcon.svg'
import vaultBoy from '../../assets/MiniVaultBoy.svg'

export const CardMenu = ({ data, id ,image, title, description, onClick, price}) => {
    return (
        <>
            <ul className="menu-list">
                {data && data.map((item) => {
                    return (
                        <li className="item" key={item[id]} >
                            <div className='leftSide'>
                                <div className='topSide'>
                                    <img className="image" src={item[image]} />
                                    <h2 className="title"> {item[title]} </h2>
                                </div>
                                <div className='bottomSide'>
                                    <p className="description"> {item[description]} </p>

                                    <div className='value'>
                                        <Button size='s' onClick={() => onClick(item[id])}>
                                            <CiShoppingCart className='icon-button' />
                                        </Button>
                                        <p className="price"> {currencyFormat(item[price])} </p>
                                        <button className='more-information'>
                                            <p className='text-more-information'> Mais informações</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="rightSide">
                                <img src={radiationIcon} alt='imagem ilustrativa de aviso nuclear' className='radiationImage'></img>
                                <img src={vaultBoy} alt='ilustração de um garoto de fallout (vault boy)' className='vaultBoyImage'></img>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}


// onClick={ () => onClick(id) }