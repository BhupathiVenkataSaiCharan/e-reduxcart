import React, { Component } from 'react'

export default class Cart extends Component {
    constructor(props){
        super(props);
        this.state = { 
            number:"",
            address:"",
            showCheckout:false };
    }
    handleInput=(e)=>{
        this.setState({[e.target.number]:e.target.value})
    }
    createOrder=(e)=>{
        e.preventDefault();
        const order = {
            number:this.state.number,
            address:this.state.address
        };
        this.props.createOrder(order);
    }

    render() {
        const {cartItems} = this.props;
        return (
            <>
            <div>
                {cartItems.length ===0?(<div>Cart is empty</div>
                ):(
                <div>you have {cartItems.length} in the cart</div>
                )}
            </div>
            <div>
                <div>
                    <ul>
                        {cartItems.map(item=>(
                            <li key={item.id} style={{textAlign:"center"}}>
                                <div>
                                    <img src={item.image} alt={item.name} width="30px"></img>
                                </div>
                                <div>{item.name}</div>
                                Rs.{item.price} x {item.count}
                                <button 
                                    className="btn btn-danger"
                                    style={{width:"100px",fontSize:"10px"}}
                                    onClick={()=>this.props.removeFromCart(item)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                </div>
                {cartItems.length!==0 &&(
                    <div>
                    <div>
                    <div style={{textAlign:"center"}}>
                        <div >
                            Total: Rs.{cartItems.reduce((a,c)=>a+c.price * c.count, 0)}
                        </div>
                        <button className="btn btn-primary"
                        onClick={()=>{this.setState({showCheckout:true});}} 
                            style={{width:"100px",fontSize:"10px"}}>Proceed</button>
                    </div>
                </div>
                {this.state.showCheckout &&(
                    <div>
                    <form onSubmit={this.createOrder} 
                            style={{display:"flex",flexDirection:"column",
                                        alignItems:"center"}}>
                        <ul>
                            <li style={{textAlign:"center"}}>
                                <label style={{fontSize:"15px",textAlign:"center"}}>Mobile Number</label><br/>
                                <input type="number" required 
                                        onChange={this.handleInput} min="10"></input>
                            </li>
                            <li style={{textAlign:"center"}}>
                                <label style={{fontSize:"15px"}}>Delivery Address</label>
                                <input type="text" required 
                                        onChange={this.handleInput}></input>
                            </li>
                            <li style={{paddingTop:"10px",textAlign:"center"}}>
                                <button 
                                        className="btn btn-primary"
                                        type="submit"
                                        style={{width:"100px",fontSize:"10px"}}
                                        >Checkout</button>
                            </li>
                        </ul>
                    </form>
                </div>
                )}
               
                </div>
                )}
                
            </div>
            </>
        )
    }
}
