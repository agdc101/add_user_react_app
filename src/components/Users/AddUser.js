import React from "react";

const AddUser = props => {
    const AddUserHandler = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit ={AddUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text"></input>
            <label htmlFor="age">Age</label>
            <input id="age" type="number"></input>
            <button type="submit">Add User</button>
        </form>
    )
};

export default AddUser;