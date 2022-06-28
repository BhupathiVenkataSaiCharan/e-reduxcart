import React, { Component } from 'react';
import {connect} from "react-redux";
import {undo,redo} from "./reducers/actions";
  
class History extends Component{
      render(){
        
      return <div style={{float:'right',width:'48%',textAlign:'center', alignItems:'center'}}>
              <button  style={{position:'relative',
                                                    width:'100px',
                                                    fontSize:'15px',
                                                    padding:'10px',
                                                    borderRadius:'10px',
                                                    margin:'10px',
                                                    textAlign:'center'}} onClick={this.props.undo}>undo</button>
              <button  style={{position:'relative',
                                                    width:'100px',
                                                    fontSize:'15px',
                                                    padding:'10px',
                                                    borderRadius:'10px',
                                                    margin:'10px',
                                                    textAlign:'center'}} onClick={this.props.redo}>redo</button>
          </div>
  }
}


function mapDispatchToProps(dispatch){
    return {
        undo:()=>dispatch(undo()),
        redo:()=>dispatch(redo())
    }
}

export default connect(null,mapDispatchToProps)(History);
