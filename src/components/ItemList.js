import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

export default function ItemList() {
    const [items, setItems] = React.useState([]);
    const [itemName, setItemName] = React.useState('');

    const AddItem = (props) => {
        return (
            <button
                className="addButton"
                style={{marginLeft: "2em"}}
                onClick={() => props.onClick(props.item)}
            >
                ADD
                <FontAwesomeIcon icon={solid('plus')} style={{marginLeft: "2em"}} />
            </button>
        );
    }

    const addNewItem = () => {
        console.log(itemName);
        setItems(items.concat(itemName));
        setItemName('');
    }

    const changeItemName = (event) => {
        setItemName(event.target.value);
    }

    const deleteItem = (item_to_delete) => {
        console.log({item_to_delete, items});
        setItems(items.filter(item => item != item_to_delete));
    }

    const ListItemRow = (props) => {
        return (
            <span style={{display: "flex", flexDirection: "row"}}>
                {props.index + 1}. {props.item}

                <button onClick={() => deleteItem(props.item)} style={{marginLeft: "auto"}}>
                    DELETE
                    <FontAwesomeIcon icon={solid('trash')} style={{marginLeft: "2em"}} />
                </button>
            </span>
        )
    }

    return (
        <div style={{display: "flex", flexDirection: "column", width: "max-content"}}>
            <div style={{display: "flex", flexDirection: "row"}}>
                <input name="itemName" value={itemName} onChange={changeItemName} onKeyDown={(event) => {if (event.key === 'Enter') return addNewItem() }} /> 
                <br />
                <AddItem onClick={addNewItem} item={itemName} />
            </div>

            <br />

            <div style={{display: "flex", flexDirection: "column"}}>
                {items.map((item, index) => (
                    <ListItemRow key={index} index={index} item={item}/>
                ))}
            </div>

        </div>
    );
}