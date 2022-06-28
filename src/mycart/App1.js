import React, { Component } from 'react';
import Clicker from './Clicker';
import GroceryCart from './GroceryCart';
import GroceryItems from './GroceryItems';
import History from "./History";

class App1 extends Component{

    render(){

        return(
            <>
            <div style={{display:'inline-block',width:'48%'}}>
            <h1>Grocery Cart</h1>
            {/* <Clicker/> */}
            <History/>
            <div>
            <GroceryItems/>
            <GroceryCart/>
            </div>
            </div>
            </>
        );
    }
}

export default App1;
