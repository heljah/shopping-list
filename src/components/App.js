import * as React from 'react';
import ItemList from './ItemList';

export function App({ initialData }) {
    const [count, setCount] = React.useState(0);
    return (
        <div>
        <h1>{initialData.appName}</h1>
        <p>Add items to your shopping list by writing them to input field and clicking ADD - button after.</p>
        <br />
        <br />
        <ItemList />
        <br />
        <br />
        Here is a button that will track how many times you click it:
        <br />
        <br />
        <button title="increment" onClick={() => setCount(count + 1)}>
            {count}
        </button>
        </div>
    );
}
