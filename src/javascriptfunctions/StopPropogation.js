import react from 'react';
import styled from 'styled-components';

const Styleddiv = styled.div`
    width: 500px;
    height: 200px;
    border: 1px solid black;
    margin: 20px;
`;

const StyledButton = styled.button`
    margin: 50px;
`;

const onButtonclick = (e) => {
    // e.stoppropagation();
    e.stopPropagation();
    // console.log('cominh');
}
const onDivClick = () => {
    const mydiv = document.getElementById('myDiv');
    mydiv.style.backgroundColor = 'red';
}


const StopProogation = () => {

    return (
        <Styleddiv onClick={onDivClick} id="myDiv">HI from styled components
            <StyledButton onClick={onButtonclick}>Click ME!!!</StyledButton>
        </Styleddiv>
    );

}

export default StopProogation;