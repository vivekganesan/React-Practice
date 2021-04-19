import React, { Component } from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types';

const StyledUL = styled.ul`
text-align: left;
list-style-type: none;
display: flex;
`;
const options = [
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven'
];
class CheckBoxGroup extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            active: this.props.active
        }
    }

    // static getDerivedStateFromProps(nextprops, state) {
    //     console.log('nextprops',nextprops, state);
    //     console.log('nextpropsstate',state );
    // }

    // componentWillReceiveProps(nextProps){
        
    //     if(nextProps.active !== this.props.active){
    //         console.log('componentWillReceiveProps');
    //         this.setState({
    //             active: nextProps.active
    //         })
    //     }
    // }
    

    onChange = (event) => {
        const {active} = this.state;
        // console.log('onChange',event, this.state);
        if(event.target.checked){
            active.push(event.target.name)
        }else{
            active.splice(active.indexOf(event.target.name), 1)
        }
        this.props.onChange(active, event)
        // this.props.onChange(value);
    }

    renderOptions() {        
        return (
            this.props.options.map((item, i) => (
                <li key={i}>
                    <input id={`${this.props.id}_${i}`} type="checkbox" name={item} checked={this.state.active.indexOf(item) > -1} onChange={this.onChange}/>
                    <label htmlFor={item}>{item}</label>
                </li>
            ))
        )
    }

    render() {
       // console.log('state',this.state);
        return (
            <StyledUL>
                {this.renderOptions()}
            </StyledUL>
        )
    }
}

CheckBoxGroup.propTypes = {
    options: propTypes.arrayOf(propTypes.oneOfType([propTypes.string,propTypes.number])).isRequired,
    active: propTypes.arrayOf(propTypes.oneOfType([propTypes.number,propTypes.string])).isRequired,
    onChange: propTypes.func.isRequired,
    id: propTypes.string.isRequired
}

export default CheckBoxGroup;
