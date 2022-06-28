import React, { Component } from 'react';
import {connect} from "react-redux";
import {removeFromCart} from "./reducers/actions";
  
class GroceryCart extends Component{

    total(){
        return this.props.items.reduce((total, item) => {
            return total + item.price
        }, 0)
    }

      render(){
        if(this.props.items.length === 0){
            return <div id="grocery-cart">
                <p>the cart is empty</p>
            </div>
        }
      return <div style={{float:'right',width:'48%',textAlign:'center', alignItems:'center'}}>
              <table border="1">
                  <tbody>
                        <tr>
                            <th>Item Name</th>
                            <th>Item Price</th>
                        </tr>
                        {this.props.items.map((item,index) =>{
                            return <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                    <button style={{position:'relative',
                                                    width:'100px',
                                                    fontSize:'15px',
                                                    padding:'10px',
                                                    borderRadius:'10px',
                                                    margin:'10px',
                                                    textAlign:'center'}}
                                                    onClick={() => this.props.removeFromCart(index) }>
                                    <td>Remove</td>
                                    </button>
                            </tr>
                        })}
                  </tbody>
              </table>
              <p>
                  Total: ${this.total()}
              </p>
          </div>
  }
}

const mapStateToProps = (state) => {
    return {
        items: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
       removeFromCart:(index)=>{
           dispatch(removeFromCart(index))
       }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceryCart);