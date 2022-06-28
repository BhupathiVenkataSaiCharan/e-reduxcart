import React, { Component } from 'react';

export default class Products extends Component {
    constructor(props){
        super();
        this.state={
            showMe:false
        }
    }

    operation(){
        this.setState({
            showMe:!this.state.showMe
        })
    }

    render() {
        return (
            <div>
                <ul >
                    {this.props.products.map(product =>(
                        <li key={product.id} >
                            <div className="card bg-opacity-40" style={{border:"1px solid black",
                                            alignItems:"center",padding:"5px 10px"}}>
                                <a href>
                                    <img src={product.image} alt={product.name} width="50px" ></img>
                                    <p>{product.type}</p>
                                    
                                </a>
                                <p>{product.name}</p>
                                <div>
                                    <div style={{textAlign:"center"}}>Rs. {product.price}</div>

                                    {/* <button className="btn btn-danger" 
                                        onClick={()=>this.props.removeFromCart(product)}
                                        style={{width:"30px",fontSize:"10px"}}>-</button>
                                        0
                                    <button className="btn btn-primary" 
                                        onClick={()=>this.props.addToCart(product)}
                                        style={{width:"30px",fontSize:"10px"}}>+</button> */}

                                    {
                                        this.state.showMe 
                                        ?
                                            <div>
                                                <button className="btn btn-danger" 
                                                        onClick={()=>this.props.removeFromCart(product)}
                                                        style={{width:"30px",fontSize:"10px"}}>-</button>
                                                    0
                                                <button className="btn btn-primary" 
                                                        onClick={()=>this.props.addToCart(product)}
                                                        style={{width:"30px",fontSize:"10px"}}>+</button>
                                            </div>
                                        :null
                                    }
                                    
                                    <button className="btn btn-primary" 
                                        onClick={()=>this.operation()}
                                        style={{width:"70px",fontSize:"10px"}}>Add</button>

                                </div>
                                
                            </div>
                        </li>
                    ))}
                </ul>
                
            </div>
        )
    }
}


