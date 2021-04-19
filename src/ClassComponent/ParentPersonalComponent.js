import React, { Component } from 'react'
import PropTypes from 'prop-types';



class ParentPersonalComponent extends Component {

    
    render() {

        // const person = {
        //     name: "vivek",
        //     age: 28
        // }
        return (
            <div>
            <PersonalComponent  age={28}/>
            </div>
        )
    }
}

const PersonalComponent = (props) => {
    return (
        <div>
            {props.name} - {props.age}
        </div>
    )
}

PersonalComponent.propTypes = {
    // person: PropTypes.shape({
    //     name: PropTypes.string,
    //     age: PropTypes.number,
    // })
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
  };

PersonalComponent.defaultProps  = {
    name: "Unknown"
}

// ParentPersonalComponent.propTypes = {
//     name: PropTypes.string,
//     age: PropTypes.number,
// }

export default ParentPersonalComponent;
