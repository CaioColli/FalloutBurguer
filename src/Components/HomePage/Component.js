import './Component.css'

export const HomePageComponents = ({tittleBurguer, descriptionBurguer, priceBurguer}) => {
    return (
        <section>
            <div className="leftSide">
                <h5>DESCUBRA NOVOS SABORES!</h5>
                <h1>Especial {tittleBurguer} </h1>
                <p> {descriptionBurguer} </p>
                
                <div className="btns">
                    <button className='btn-addCard'>Adicionar</button>
                    <button className='btn-GoToMenu'>Cardápio</button>
                </div>
            </div>

            <div className="rightSide">
                <div className="div-burguerImage">
                    <img src="Images/ImagemHamburguer.png" alt="Foto de um hamburguer" className="burguerImage"></img>   
                    <img src="Images/SombraHamburguer.svg" alt="Sombra do hamburguer" className="shadowBurguer"></img>
                    <img src="Images/TraçadoHamburguer.svg" alt="Traçado do hamburguer para o preço" className="traceBurguer"></img>

                    <div className='priceBurguer'>
                        <div className='price'>
                            <p>Apenas</p>
                            <h3> {priceBurguer} </h3>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    )
}