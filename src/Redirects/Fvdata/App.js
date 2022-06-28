import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import data from "./data.json";
import Products from './components/Products';
import Filter from './components/Filter';
import Cart from './components/Cart';
// import Inc from './Inc';
// import PostList from './Posts/PostList';

class App extends Component{
    constructor(){
        super();
        this.state = {
            products: data.products,
            cartItems: localStorage.getItem("cartItems") 
                ? JSON.parse(localStorage.getItem("cartItems"))
                :[],
            type:""
        };
    }
    
    createOrder=(order)=>{
        alert("Need to save order for" + order.number);
    }

    removeFromCart=(product)=>{
        const cartItems = this.state.cartItems.slice();
        this.setState({
            cartItems: cartItems.filter(x=>x.id !==product.id),
        });
        // localStorage.setItem("cartItems",JSON.stringify(cartItems.filter(x=>x.id !==product.id)));
    }

    addToCart=(product)=>{
        const cartItems = this.state.cartItems.slice();
        let alreadyInCart = false;
        cartItems.forEach(item =>{
            if(item.id === product.id){
                item.count++;
                alreadyInCart = true;
            }
        });
        if(!alreadyInCart){
            cartItems.push({...product, count: 1})
        }
        this.setState({cartItems});
        // localStorage.setItem("cartItems",JSON.stringify(cartItems));
    };

    filterProducts = (event) => {
        console.log(event.target.value);
        if(event.target.value === ""){
            this.setState({type:event.target.value, product:data.products})
        }else{
            this.setState({
                type: event.target.value,
                products: data.products.filter(product=> product.type.indexOf(event.target.value)),
            });
        }
    }
        
    // fetchData(){
    //     fetch('data.json')
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((obj) => {
    //         console.log(obj);
    //     })
    //     .catch((error)=>{
    //         console.error("something went wrong");
    //         console.log(error);
    //     })
    // }


    render(){
        return(
            <>
                 <section className="py-4 container">
                    <div className="row no-gutters">
                        <div className="col-md-6 no-gutters">
                            <div className="leftside" style={{height:'auto',width:'100%'}}>
                                <Filter count={this.state.products.length}
                                        type={this.state.type}
                                        filterProducts={this.filterProducts}
                                />
                                <Products products={this.state.products} addToCart={this.addToCart} 
                                            removeFromCart={this.removeFromCart}
                                            cartItems={this.state.cartItems}
                                            />
                            </div>
                        </div>
                        <div className="col-md-6 no-gutters">
                            <div className="rightside" style={{paddingLeft:"100px",
                                paddingTop:"100px",height:'auto',width:'100%',position:'relative'}}>
                                    <Cart cartItems={this.state.cartItems}
                                            createOrder={this.createOrder} 
                                            removeFromCart={this.removeFromCart}/>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <PostList/> */}
                {/* <Inc/> */}
                
            </>
        );
    }
}

export default App;