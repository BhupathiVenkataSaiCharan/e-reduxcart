import React, { Component } from 'react';
import { connect } from 'react-redux';

class Clicker extends Component{

    render(){
        return(
            <>
                <p>You have clicked this {this.props.clicks} times</p>
                <p><button onClick={this.props.increment}>increment</button></p>
            </>
        );
    }
}

//how to read from redux
//make the state available as readable properties through "this.props"
const mapStateToProps = (state) => {
    return {
        clicks : state
    }
}

//how to write to redux
//make dispatch available by defining functions that call dispatch
//with an action-like object {type: }
//and these functions become available on "this.props"
const mapDispatchToProps = (dispatch) => {
    return{
        increment: () => {
            dispatch({type: 'INCREMENT'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Clicker)