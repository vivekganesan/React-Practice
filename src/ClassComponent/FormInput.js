import React, { Component } from 'react'

export default class FormInput extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             email:'',
             textArea: '',
        }
    }

    handleInputTxt = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleInputEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleTxtArea = (e) => {
        this.setState({
            textArea: e.target.value
        })
    }
    
    render() {
        const {name, email, textArea} = this.state;
        return (
            <div>
                <form>
                    <label>Full Name</label><br/>
                    <div><input type="text" value={name} onChange={this.handleInputTxt}/></div>
                    <div><input type="email" value={email} onChange={this.handleInputEmail}/></div>
                    <div><textarea value={textArea}  onChange={this.handleTxtArea}></textarea></div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
