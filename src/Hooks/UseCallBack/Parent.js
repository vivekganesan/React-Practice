import React, {useState, useCallback} from 'react';
import Title from './Title';
import Button from './Button';

function Parent() {
    const [age, setAge] = useState(28);
    const [salary, setSalary] = useState(20000);

    const ageClick = useCallback(() => {
        setAge(age + 1);
    },[age])

    const salaryClick = useCallback(() => {
        setSalary(salary + 1000)
    },[salary])
    return (
        <div>
            <Title />
            Age - {age}
            <Button title="Increment Age" handleClick={ageClick}/>
            Salary - {salary}
            <Button title="Increment Salary" handleClick={salaryClick}/>
        </div>
    )
}

export default Parent
