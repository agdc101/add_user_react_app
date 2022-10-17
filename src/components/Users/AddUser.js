import React, { useState } from "react";
import Button from "../Button/Button";

const AddUser = props => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');

    const AddUserHandler = (e) => {
        e.preventDefault();
        if ((userName.trim().length !== 0 || userAge.trim().length !== 0) && (+userAge > 1)) {
            props.onAddUser(userName, userAge);
            setUserName('');
            setUserAge('');
        }
    }

    const usernameChange = (e) => {
        setUserName(e.target.value);
    }

    const ageChange = (e) => {
        setUserAge(e.target.value);
    }

    return (
        <form onSubmit ={AddUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" onChange={usernameChange} value={userName}></input>
            <label htmlFor="age">Age</label>
            <input id="age" type="number" onChange={ageChange} value={userAge}></input>
            <Button type="submit">Submit</Button>
        </form>
    )
};

export default AddUser;