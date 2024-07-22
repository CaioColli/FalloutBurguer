import './Button.css'

export const Button = ({onClick, children, size, highlight, disabled}) => {
    return (
        <>
            <button className={`button ${size} ${highlight} ${disabled}`} onClick={onClick} >
                { children }
            </button>
        </>
    )
}