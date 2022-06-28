import React, { Component } from 'react';
import {connect} from "react-redux";
import {addToCart} from "./reducers/actions";

class GroceryItems extends Component{
      render(){
      return (
          <div style={{float:'left',width:'48%',textAlign:'center', alignItems:'center'}}>
              <table border="1">
                  <tbody>
                        <tr>
                            <th>Item Name</th>
                            <th>Item Price</th>
                        </tr>
                        {this.props.items.map((item,index) =>{
                            return <tr id={index}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                    <button style={{position:'relative',
                                                    width:'100px',
                                                    fontSize:'15px',
                                                    padding:'10px',
                                                    borderRadius:'10px',
                                                    margin:'10px',
                                                    textAlign:'center'}}
                                                    onClick={() => this.props.addToCart(item) }>
                                    <td>Add to cart</td>
                                    </button>
                            </tr>
                        })}
                  </tbody>
              </table>
          </div>
      );
  }
}

const mapStateToProps = (state) => {
    return {
        items: state.forSale
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
       addToCart:(item)=>{
           dispatch(addToCart(item))
       }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceryItems);

