import React, { Component } from 'react'
import styled from 'styled-components'

const AlignedFieldSet = styled.fieldset`
    text-align: left;
`;


export default class Radio extends Component {
    render() {
        return (
            <div>
                <AlignedFieldSet>
                    <legend>Accessible Radio</legend>
                    <div>
                        <input type="radio" id="txt" name="formate" checked/>
                        <label for="txt">Text File</label>
                    </div>
                    <div>
                        <input type="radio" id="csv" name="formate"/>
                        <label for="csv">CSV File</label>
                    </div>
                    <div>
                        <input type="radio" id="html" name="formate"/>
                        <label for="html">HTML File</label>
                    </div>
                </AlignedFieldSet>
            </div>
        )
    }
}

