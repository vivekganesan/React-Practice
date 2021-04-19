import React,{useState} from 'react'
import useInput from './useInput';



function UserForm() {
    // const [fName,setFname] = useState('');
    // const [lName,setLname] = useState('');
    const [fName, bindFirstName, resetFname] = useInput('');
    const [lName, bindLastName, resetLname] = useInput('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`FirstName: ${fName} lastname: ${lName}`);
        resetFname();
        resetLname();
    }

    
    return (
        <form onSubmit= {handleSubmit}>
            <div>
                <label>First Name:</label>
                <input type="text" {...bindFirstName}/>
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" {...bindLastName}/>
            </div>
            <button >Submit</button>
        </form>
    )
}

export default UserForm
