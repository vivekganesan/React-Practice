import React, { Component } from 'react'
import '../styles/Dropdown.css';

export default class DropDown extends Component {    

    CustomSelectClick = () => {
        document.querySelector('.custom-select').classList.toggle('open');

        for (const option of document.querySelectorAll(".custom-option")) {
            option.addEventListener('click', function() {
                if (!this.classList.contains('selected')) {
                    this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
                    this.classList.add('selected');
                    this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
                }
            })
        }
        
    }
    render() {
        return (
            <div className="custom-select-wrapper" onClick={this.CustomSelectClick}>
                <div className="custom-select">
                    <div className="custom-select__trigger"><span>Tesla</span>
                        <div className="arrow"></div>
                    </div>
                    <div className="custom-options">
                        <span className="custom-option selected" data-value="tesla">Tesla</span>
                        <span className="custom-option" data-value="volvo">Valvo</span>
                        <span className="custom-option" data-value="mercedes">Mercedes</span>
                    </div>

                </div>
            </div>
        )
    }
}
