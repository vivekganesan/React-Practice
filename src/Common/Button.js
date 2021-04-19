import React from 'react'
import styled from 'styled-components';

export default function Button(props) {
    const { size, color, content, alertContent } = props;
    return (
        <button style={{backgroundColor: color, fontSize: size}} onClick={() => {alert(alertContent);}}>{content}</button>
    )
}
