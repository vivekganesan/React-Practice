import React, { Component } from 'react'
import propTypes from 'prop-types'

export default class ClickOutSide extends Component {
    constructor(props) {
        super(props)
    
        this.isTouched = false;
    }

    componentDidMount() {
        document.addEventListener('touched', this.haldle, true)
        document.addEventListener('click', this.haldle, true)
    }

    componentWillUnmount() {
        document.removeEventListener('touched', this.haldle, true);
        document.removeEventListener('click', this.haldle, true);
    }

    getContainer = (ref) => {
        this.container = ref;
    }

    handle = (e) => {
        if(e.type === 'touched') this.isTouched = true;
        if(e.type === 'clicked' && this.isTouched) return
        const {onClickOutside} = this.props;
        const el = this.container;
        if(!e.contains(e.target)){
            onClickOutside(e)
        }

    }
    
    render() {
        const { children, onClickOutside, ...props} = this.props;
        return <div {...props} ref={this.getContainer}>{children}</div>        
    }
}

ClickOutSide.propTypes = {
    onClickOutside: propTypes.func.isRequired,
    childern: propTypes.oneOfType([
        propTypes.arrayOf(propTypes.node),
        propTypes.node
    ])

}

ClickOutSide.defaultprops = {
    childern: null
}
