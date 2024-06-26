import { Component } from "react"

export class AddedItems extends Component {
    render() {
        const { selectedItem } = this.props
        return (
            <>
                <li key={selectedItem.id}>
                    <img className="image" src={selectedItem.image} alt={`Imagem ${selectedItem.title}`} />
                    <p>{selectedItem.title}</p>
                    <p>{selectedItem.description}</p>
                    <p>{selectedItem.price}</p>
                </li>
            </>
        )
    }
}