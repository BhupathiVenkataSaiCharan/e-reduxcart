import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

//product.js


const New1 = ({id,name,price,addToCart,removeFromCart}) => {
    return (
        <>
        <div className="row" id={id}>
            <div className="col-sm-6">
                <div className="card bg-opacity-50">
                <div className="card-body text-center">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{price}</p>
                    <button
                        style={{position:'relative',
                                                    width:'100px',
                                                    fontSize:'15px',
                                                    padding:'10px',
                                                    borderRadius:'10px',
                                                    margin:'10px',
                                                    textAlign:'center'}} 
                                        onClick={()=>addToCart({id,name,price,units:1})}>+</button>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default New1;
