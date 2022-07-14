import { Link } from "react-router-dom";
import React, {useContext} from 'react'
import { CartContext } from '../../Context/CartContext';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
  const { cart, totalPrice, totalProducts, deleteProduct, clear } = useContext(CartContext);

    if (cart.length === 0){
      return (
        <>
          <h3 className="cart-title"> No hay productos en el carrito, comprá <Link className="cart-link" to="/"> acá </Link></h3>
        </>
        );
      }

      return (
        <>
          <div>
              {cart.map (product =>
                <div className="cart-detail" key={product.id}>
                  <p> Cantidad: {product.quantity} </p>
                  <p> Producto: {product.name} </p>
                  <p> Precio: ${product.price}</p>
                  <p> Subtotal: ${product.quantity * product.price}</p>
                  <p className="delete-button" onClick={() =>deleteProduct(product.id)}><RemoveCircleIcon/></p>
                </div>)}
          </div>
          <div className="cart-resume">
            <p> Total productos: {totalProducts()} </p>
            <p className="cart-total" >Total: ${totalPrice()}</p>
            <button className="clear-button" onClick={()=> clear()}><DeleteIcon fontSize="small"/> Vaciar Carrito</button>
          </div>
        </>
        );
      }


export default Cart;