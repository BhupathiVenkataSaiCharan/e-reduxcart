import React, { Component } from 'react';

class DummyText extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            paragraph: 3,
            results:[]
        }
        this.handleChange=this.handleChange.bind(this);
    }

    componentDidMount(){
        this.fetchText();
    }

    fetchText(){
        this.setState({isLoading:true});
        
        const url='https://baconipsum.com/api/?type=meat-and-filler&paras=' +this.state.paragraph;
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            // console.log(JSON.stringify(json));
            this.setState({
                results:json,
                isLoading: false
            })
        });

    }
    handleChange(e){
        this.setState({paragraph:e.target.value},()=>{
            this.fetchText();
        });
    }

    displayResults(){
        if(this.state.isLoading){
            return <p>Loading...</p>
        }else{
            return this.state.results.map((paragraphText, index)=>{
                return <p key={index}>{paragraphText}</p>
            })
        }
    }

    render(){
        return(
            <>
            <div id="dummy-container">
                <h1>DummyText Generator</h1>
                <div id="dummy-text-controls">
                    <h2>RealTime Options</h2>
                    <p>
                        Paragraph:
                    </p>
                    <p>
                        <input type="number" value={this.state.paragraph} min='1' onChange={this.handleChange}/>
                    </p>
                </div>
                <div id="dummy-text-results">
                    {this.displayResults()}
                </div>
            </div>
            </>
        );
    }
}

export default DummyText;