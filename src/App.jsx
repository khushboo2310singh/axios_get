import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import "./App.css
const App = () => {
    const[users, setusers]=useState([]);
    const handleclick=()=>{
        axios.get('https://65c11d2ddc74300bce8d561c.mockapi.io/users')
        .then(response=>{
            console.log(response.data);
            setusers(response.data)
        })
        .catch(error=>{
            console.log(error);
        })
    }
  return (
    <>
    <h2>Axios get method</h2>
    <input type="button" value="Click me" onClick={handleclick}/>
    {users.map((user)=>{return(
        <div key={user.id} className="App">
            Name--{user.name}<br/>
            Age--{user.age}
        </div>
    )})}
    </>
  )
}

export default App
