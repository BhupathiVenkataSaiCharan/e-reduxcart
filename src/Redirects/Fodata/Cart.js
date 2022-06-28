import React from 'react';
import { useCart } from "react-use-cart";

const Cart = () => {
    const { 
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart 
            } = useCart();

            if(isEmpty) return <h1 className="text-center"> Your cart is Empty</h1>

            

    return(
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h5>Unique Items ({totalUniqueItems}) total Items ({totalItems}) </h5>
                    <table className="table table-light table-hover m-0">
                        <tbody>
                            {items.map((item, index)=>{
                                console.log(items);
                                console.log(totalItems);
                                console.log(cartTotal);
                                return(
                                    <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>Quantity({item.quantity})</td>
                                    <td>
                                        <button className="btn btn-info ms-2"
                                            onClick={()=>updateItemQuantity(item.id, item.quantity +1)}>+</button>
                                        <button className="btn btn-info ms-2"
                                            onClick={()=>updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                        <button className="btn btn-danger ms-2"
                                            onClick={()=>removeItem(item.id)} 
                                            style={{width:'70px'}}>Remove Item</button>
                                    </td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="col-auto ms-auto">
                    <h2>Total Price: Rs. {cartTotal}</h2>
                </div>
                <div className="col-auto">
                    <button className="btn btn-danger m-2" style={{width:'100px'}}
                        onClick={()=>emptyCart()}>Clear Cart</button>
                    <button className="btn btn-primary m-2" style={{width:'100px'}} 
                            >Place Order</button>
                </div>
            </div>
        </section>
    );
}

export default Cart;
