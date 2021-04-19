import React, { Component } from 'react'
import CheckBoxGroup from '../Common/CheckBoxGroup';

const options = [
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven'
];

class CheckBoxExamble extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             active: []
        }
    }

    onChange = (value, key) => {
        console.log('onChange',value, key);
        this.setState({
            [key]: value
        })
    }
    
    render() {
        // console.log('CheckBoxExamble',this.state);
        return (
            <div>
                <CheckBoxGroup id="checkbox-example" active={this.state.active} options={options} onChange={(item) => this.onChange(item, 'active')}/>
            </div>
        )
    }
}


export default CheckBoxExamble