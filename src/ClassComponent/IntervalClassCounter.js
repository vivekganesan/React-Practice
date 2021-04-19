import React, { Component } from 'react';


export default class IntervalClassCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             counter: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(this.tick,1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }
    
    render() {
        const {counter} = this.state;
        return (
            <div style={{color: "red"}}>
                {counter}
            </div>
        )
    }
}
