import React, { Component } from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'

// display: ${props.inline ? 'flex' : 'block'};

const StyledUL = styled.ul`
    list-style-type: none;
    text-align: left;
    display: flex;
`;

class RadioGroup extends Component {  
    
    constructor(props) {
        super(props)    
        // this.state = {
             
        // }
    }

    onChange = (value) => {
        // console.log('value',value);
        this.props.onChange(value)
    }

    

    renderOptions() {
        return (
            this.props.options.map((item, i) => (
                <li key={i}>
                    <input type="radio" checked={this.props.active === item} id={`${this.props.id}_${i}` } value={item} onChange={() => this.onChange(item)}/>
                    <label htmlFor={item}>{item}</label>
                </li>
            ))
        )
    }

    render() {
        const {inline} = this.props;
        // console.log('inline',this.props);
        return (
            <StyledUL inline={inline}>
                {this.renderOptions()}
            </StyledUL>
        )
    }
}


RadioGroup.propTypes = {
    options: propTypes.arrayOf(propTypes.oneOfType(propTypes.number,propTypes.string)).isRequired,
    inline: propTypes.bool,
    active: propTypes.oneOfType([propTypes.number,propTypes.string]),
    onChange: propTypes.func.isRequired
}

RadioGroup.defaultProps = {
    inline: null,
    active: null
}

export default RadioGroup;