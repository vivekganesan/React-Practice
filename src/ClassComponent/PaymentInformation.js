import React, { Component } from 'react'
import styled from 'styled-components'
import PaymentCard from '../Common/PaymentCard';

const FlexContainer = styled.div`
    display: flex;
    background-color: blue;
`;

const arr = [{
    title: 'Tilte 1',
    from: 'From :',
    fromDate: '30/3/2021',
    toDate: '06/04/2021',
    to: 'To :',
    total: 'Total :',
    totalVal: '200 USD'
}, {
    title: 'Tilte 2',
    from: 'From :',
    fromDate: '30/3/2021',
    toDate: '06/04/2021',
    to: 'To :',
    total: 'Total :',
    totalVal: '200 USD'
}, {
    title: 'Tilte 3',
    from: 'From :',
    fromDate: '30/3/2021',
    toDate: '06/04/2021',
    to: 'To :',
    total: 'Total :',
    totalVal: '200 USD'
}, {
    title: 'Tilte 4',
    from: 'From :',
    fromDate: '30/3/2021',
    toDate: '06/04/2021',
    to: 'To :',
    total: 'Total :',
    totalVal: '200 USD'
}]


export default class PaymentInformation extends Component {

    cardButton = () => {
        alert("Button Clicked");
    }
    render() {
        return (
            <FlexContainer>
                {
                    arr.map((item) => (
                        <>
                            <PaymentCard
                                title={item.title} 
                                from={item.from} 
                                fromDate={item.fromDate} 
                                to={item.to} 
                                toDate={item.toDate}
                                total={item.total}
                                totalVal = {item.totalVal}
                                onClick={this.cardButton}
                            />
                        </>
                    )
                    )
                }


            </FlexContainer>
        )
    }
}

