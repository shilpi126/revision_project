import React, { useState } from "react"
import Card from "../UI/Card/Card";
import "./AddUser.css"
import Button from "../UI/Button/Button";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
  
  
    const getUsername = (event) => {
        setEnteredUsername(event.target.value);
    }

    const getUserAge = (event) => {
        setEnteredAge(event.target.value);
    }

    
    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            return;
        }
        
        if(enteredAge < 1){
            return;
        }
        
        
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername("");
        setEnteredAge("");
    };

return (
    <Card className="input">
    <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={enteredUsername} onChange={getUsername}/>
        <label htmlFor="age">Age</label>
        <input type="number" id="age" value={enteredAge} onChange={getUserAge}/>
        {/* <button type="submit">Add User</button> */}
        <Button type="submit" >Add User</Button>
        {/* <Button onClick={clickHandler}>Click Here</Button> */}
    </form>
    </Card>
)
}

export default AddUser


