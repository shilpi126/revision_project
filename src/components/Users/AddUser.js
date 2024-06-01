import React, { useState } from "react"
import Card from "../UI/Card/Card";
import "./AddUser.css"
import Button from "../UI/Button/Button";

const AddUser = () => {

    const [userInput, setUserInput] = useState({
        username:"",
        age:""
    });
    
    const getUsername = (event) => {
        
        setUserInput((prevState) => {
            return {
            ...prevState,
            username : event.target.value
            }
        })
    
    }

    const getUserAge = (event) => {

        setUserInput((prevState) => {
            return {
                ...prevState,
                age : event.target.value
            }
        })
    
    }

    
    const addUserHandler = (event) => {
        event.preventDefault();
        if(userInput.username.trim().length === 0 || userInput.age.trim().length === 0){
            return;
        }
        
        if(userInput.age < 1){
            return;
        }

        console.log(`${userInput.username}`, `${userInput.age}`);
        setUserInput({ username: "", age: "" });  
      };

return (
    <Card className="input">
    <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={userInput.username} onChange={getUsername}/>
        <label htmlFor="age">Age</label>
        <input type="number" id="age" value={userInput.age} onChange={getUserAge}/>
        {/* <button type="submit">Add User</button> */}
        <Button type="submit" >Add User</Button>
        {/* <Button onClick={clickHandler}>Click Here</Button> */}
    </form>
    </Card>
)
}

export default AddUser