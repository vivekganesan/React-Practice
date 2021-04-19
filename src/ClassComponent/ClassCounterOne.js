import React, { Component } from 'react';

export default class ClassCounterOne extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             counter: 0,
             name:''
        }
    }
    
    componentDidMount() {
        document.title = `Clicked ${this.state.counter} times` ;
    }

    componentDidUpdate(pervPros,prevState) {
        if(prevState.counter !== this.state.counter){
            console.log("Document rendered");
            document.title = `Clicked ${this.state.counter} times` ;
        }
        
    }

    
    render() {
        const {counter} = this.state;
        return (
            <div>
                <input type="text" value={this.state.name}  onChange={e => {this.setState({name: e.target.value})}}/>
                <button onClick={ () => this.setState({ counter : counter+1})}>Click {counter} times</button>
            </div>
        )
    }
}
