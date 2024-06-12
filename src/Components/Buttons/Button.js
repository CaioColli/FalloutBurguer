import './Button.css'

export const Button = ({onClick, children, size, highlight}) => {
    return (
        <>
            <button className={`button ${size} ${highlight}`} onClick={onClick}>
                { children }
            </button>
        </>
    )
}