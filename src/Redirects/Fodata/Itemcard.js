import React from 'react';
import { useCart } from "react-use-cart";

const Itemcard = (props) => {
    
    const { addItem } = useCart();

    return(
        <div className="row" >
            <div className="col-sm-6">
                <div className="card bg-opacity-50">
                <div className="card-body text-center" >
                    <h5 className="card-title">{props.name}</h5>
                    <h6 className="card-title">{props.description}</h6>
                    <p className="card-text"> Rs. {props.price}</p>
                    <button
                        style={{position:'relative',
                                                    width:'80px',
                                                    fontSize:'15px',
                                                    padding:'10px',
                                                    borderRadius:'10px',
                                                    margin:'10px',
                                                    textAlign:'center'}} 
                                                    onClick={()=>addItem(props.item)} >+</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Itemcard;