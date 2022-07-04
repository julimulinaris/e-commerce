import "./styles.css";

import React, {useEffect, useState} from 'react'

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(parseInt(initial));

    const decrease = () =>{
        setCount (count-1);
    }

    const increase = () =>{
        setCount (count+1);
    }

    useEffect (() =>{
        setCount(parseInt(initial));
    }, [initial])

    return (
        <div className="counter">
            <button disabled={count <= 1} onClick={decrease}>-</button>
            <span className="numero">{count}</span>
            <button disabled={count >= stock} onClick={increase}>+</button>
            <div>
                <p>Stock: {stock}</p>
            </div>
            <div>
                <button disabled={stock <= 0} onClick={()=> onAdd(count)}> Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;
