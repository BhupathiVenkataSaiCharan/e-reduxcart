import React, { Component } from 'react';
import Itemcard from './Itemcard';
// import data from "./data";
import Cart from './Cart';
import Data from "./data.json";

class Home extends Component{
    // constructor(props){
    //     super(props);
    // }
    
    render(){
        // console.log(data.productData);
        return(
            <>
                {/* <h1 className="text-center mt-3">All Items</h1> */}
                <section className="py-4 container">
                    <div className="row no-gutters">
                        <div className="col-md-6 no-gutters">
                            <div className="leftside" style={{height:'auto',width:'100%'}}>

                                {Data.map((item, index)=>{
                                    return(
                                        <Itemcard name={item.name} description={item.description} 
                                            price={item.price} item={item} key={index} />
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-md-6 no-gutters">
                            <div className="rightside" style={{height:'auto',width:'100%',position:'relative'}}>
                                    <Cart/>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Home;