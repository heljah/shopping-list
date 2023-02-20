import * as React from 'react';

export default function ItemList() {
    const [items, setItems] = React.useState([]);
    const [itemName, setItemName] = React.useState();

    const AddItem = (props) => {
        return (
            <button
                className="addButton"
                onClick={() => props.onClick(props.item)}
            >
                ADD
            </button>
        );
    }

    const addNewItem = (item) => {
        setItems(items.concat(item));
    }

    const changeItemName = (event) => {
        setItemName(event.target.value);
    }

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <div style={{display: "flex", flexDirection: "row"}}>
                <input name="itemName" onChange={changeItemName} /> 
                <br />
                <AddItem onClick={addNewItem} item={itemName} />
            </div>

            <br />

            <div style={{display: "flex", flexDirection: "column"}}>
                {items.map((item, index) => (
                    <span key={index}>{index + 1}. {item}</span>
                ))}
            </div>
        </div>
    );
}