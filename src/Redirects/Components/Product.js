import React, { Component } from 'react';
import New1 from "./New1";
import PRODUCTS from './PRODUCTS';


// index.js

class Product extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:'React',
            cart:[
                // {id: 4, 
                //     name:"Banana", 
                //     price:'Rs.12',
                //     units:2 
                // }
            ]
        }
        this.addToCart=this.addToCart.bind(this);
        // this.removeFromCart = this.removeFromCart.bind(this);
    }
    
    findProductIndex = (cart, productID) => {
        return cart.filter(p => p.id === productID)
    }

    addToCart(product){
        const existingProduct = this.findProductIndex(this.state.cart, product.id);
        
        if(existingProduct.length > 0){
            const withoutExistingProducts = this.state.cart.filter(p => p.id !== product.id);
            const updatedProductUnits = {
                ...existingProduct[0],
                units: existingProduct[0].units + product.units
            };

            this.setState({
                cart: [...withoutExistingProducts, updatedProductUnits ]
            });
        }else{
            this.setState({
                cart: [...this.state.cart, product]
            });
        }
    }
    // removeFromCart(index){
    //     const existingProduct = this.findProductIndex(this.state.cart);
        
    //     if(existingProduct.length > 0){
        
    //         const updatedProductUnits = {
    //             ...existingProduct[0],
    //             units: existingProduct[0].units -1
    //         };

    //         this.setState({
    //             cart: existingProduct.splice(index, 1)
    //         });
    //     }
    // }

    render(){
        return(
            <>
                <div className="row no-gutters">
                    <div className="col-md-6 no-gutters">
                        <div className="leftside" style={{height:'auto',width:'100%'}}>
                                    {
                                        PRODUCTS.map(p=> <New1 key={p.id} {...p} addToCart={this.addToCart}/>)
                                    }
                        </div>
                    </div>
                    <div className="col-md-6 no-gutters">
                        <div className="rightside" style={{height:'auto',width:'100%',position:'fixed'}}>
                            <ul>
                                    {this.state.cart.map(c => <li>{c.name}:{c.units}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


export default Product;

