import React, { Component } from 'react'

export default class ClassMouseCoordinate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             x: 0,
             y:0
        }
    }

    logCordinate = e => {
        console.log('componentDidMount');
        this.setState({x: e.clientX, y: e.clientY});
    }

    componentDidMount() {
        console.log('componentDidMount');
        window.addEventListener('mousemove', this.logCordinate)
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        window.removeEventListener('mousemove', this.logCordinate)
    }
    
    render() {
        const {x, y} = this.state;
        return (
            <div>
                Class Coordinate X - {x} Y - {y}
            </div>
        )
    }
}
