import './CardComponent.css'

export const CardCart = ({ children }) => {    
    return (
        <div className='card'>
            {children}
        </div>
    )
}