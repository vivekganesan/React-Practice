import React, { Component } from 'react'

export default class ClassTimer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             timer: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(preState => ({timer : preState.timer + 1 }));
        }, 1000);
    }

    componentWillUnmount() {
        this.interval = clearInterval();
    }
    
    render() {
        return (
            <div>
                Class Timer - {this.state.timer}
                <button onClick={() => clearInterval(this.interval)}>Clear Timer</button>
            </div>
            
        )
    }
}
