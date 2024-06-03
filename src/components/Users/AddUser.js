import React, { useState } from "react"
import Card from "../UI/Card/Card";
import "./AddUser.css"
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/ErrorModal/ErrorModal";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState();

  
  
    const getUsername = (event) => {
        setEnteredUsername(event.target.value);
    }

    const getUserAge = (event) => {
        setEnteredAge(event.target.value);
    }

    
    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: "Invalid Input",
                message: "Please enter a valid username and age (non-empty values).",
            })
            return;
        }
        
        if(enteredAge < 1){
            setError({
                title: "Invalid Input",
                message: "Please enter a valid age (> 0).",
            })
            return;
        }
        
        
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername("");
        setEnteredAge("");
    };

    const errorHandler = () => {
        setError(null);
    }
    

return (
    <div>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
  
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
    </div>
)
}

export default AddUser


