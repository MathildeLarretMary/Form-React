import { useState, useEffect } from 'react';
import { fakeUsers } from '../../data/fakeData';
import { checkToSubmit } from '../../Functions/checkToSubmit.js'
import Button from '../Button/Button';
import './Form.css';

export default function Form () {

//################################--- STATES ---#######################################
    
    // All users from API
    const [users, setUsers] = useState([]);
    // single user connected
    const [user, setUser] = useState([]);

    // userValue input
    const [userValue, setUserValue] =useState('')
    // userPassword input
    const [userPassword, setUserPassword] =useState('')

    // if is checked, able to submit
    const [check, setCheck] = useState(false);

//################################--- COMPORTEMENT ---#######################################

    useEffect(() => {
        setUsers(fakeUsers);
    }, [])

    useEffect(() => {
        // if a user is find on dataBase, able to submit
        checkToSubmit(users, userValue, userPassword, setCheck, setUser)
    }, [userPassword, userValue, users, check])


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user);
    }

//################################--- RENDER ---#######################################

    return (
        <form method='POST' className='form'>
            <div className='inputs'>
                {/* set value on callback function to have any changing automatically */}
                <input type="text" onChange={event => setUserValue(event.target.value)} placeholder =" User Name or Email" className='form_input'/>
                {/* set value on callback function to have any changing automatically */}
                <input type="password" onChange={event => setUserPassword(event.target.value)} placeholder =" Password" className='form_input'/>
            </div>
            {!check && <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}
            {check && <Button actionClick={handleSubmit} value="Unicornect" className='form_submit'/>}
        </form>
    )
}