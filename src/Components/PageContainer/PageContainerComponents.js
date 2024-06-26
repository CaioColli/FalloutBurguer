import './PageContainerComponents.css'

export const PageContainer = ({ children }) => {
    return (
        <div className='page-container'>
            { children }
        </div>
    )
}