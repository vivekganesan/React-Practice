import React, { Component } from 'react'
import RedioGroup from '../Common/RadioGroup'

const options = [
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven'
]

export default class RadioExample extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             active: 'One'
        }
    }

    onChange(value,key) {
        this.setState({
            [key]: value
        })
    }
    
    render() {
        return (
            <div>
                <RedioGroup id="checkbx-eample"  options={options} active={this.state.active} onChange={(value) => this.onChange(value, 'active')}/>
            </div>
        )
    }
}
