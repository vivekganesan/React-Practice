import React, { Component } from 'react'
import styled from 'styled-components'


const InnerDiv = styled.div`
    margin: 2px;
    padding: 2px;
    background-color: #f1f1f1;
    width: 300px;
    height: 200px;

`;

const StyledH1 = styled.h1`
    font-size: 25px;
    font-weight: 900;
`;
const StyledDiv1 = styled.div`
    text-align: left;
    padding: 4px 0;
    font-weight: 900;
`;

const StyledDiv12 = styled.div`
    text-align: left;
    padding: 4px 0;
`;

export default class PaymentCard extends Component {
    
    render() {
        const {title, from, fromDate, to, toDate, total, totalVal, onClick} = this.props;
        return (
            <InnerDiv>
                <StyledH1>{title}</StyledH1>
                <StyledDiv1>{from}</StyledDiv1>
                <StyledDiv12>{fromDate}</StyledDiv12>
                <StyledDiv1>{to}</StyledDiv1>
                <StyledDiv12>{toDate}</StyledDiv12>
                <StyledDiv1>{total} {totalVal}</StyledDiv1>
                <button onClick={onClick}>Accept</button>
            </InnerDiv>
        )
    }
}
