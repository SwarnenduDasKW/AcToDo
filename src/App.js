import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import { Button, FormControl, Input,InputLabel,TextField, Container } from "@material-ui/core";
import Todo from "./Todo";
import db from "./firebase";
import firebase from 'firebase';
import AddBoxIcon from '@material-ui/icons/AddBox';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  //Load the data from DB
  useEffect(() => {
     // this code here... fires when the app.js loads
     db.collection("todos").orderBy('timestamp','desc').onSnapshot(snapshot => {
      // console.log("Data from database ->>>",snapshot.docs.map({id: doc.id, todoText: doc => doc.data()}));
       setTodos(snapshot.docs.map(doc => ({id: doc.id,todoText: doc.data().todo})));
     })
   },[]);

  const addTodo = (event) => {
    event.preventDefault(); //this will prevent refreshing the page.

    db.collection('todos').add({
      todo:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    //setTodos([...todos,input]);
    setInput(""); //clear the input
    
  }

  return (
    <div className="app">
      <h1 className="app__appName">ACTODO</h1>
      <small className="app__version">version 1.0</small>
      <container className="app_todoContainer"> 
      <form className="app_formInput">
        <FormControl>
          {/* <InputLabel className="app_inputLabel">What would you want to do?</InputLabel> */}
          <TextField
            id="standard-multiline-flexible"
            label="Add To do"
            multiline
            value={input}
            onChange={event => setInput(event.target.value)}
            fullWidth
          />
          {/* <Input className="app_inputTodo" value={input} onChange={event => setInput(event.target.value)} /> */}
        </FormControl>
        <Button 
            className="add__todo"
            disabled={!input} 
            variant="contained" 
            color="secondary" 
            startIcon={<AddBoxIcon />}
            type="submit" 
            onClick={addTodo}>
          Add to list
        </Button>
      </form>
      </container>
      <ul>
        {todos.map(x => (
          <Todo todo={x}/>
        ))}
      </ul>

    </div>
  );
}

export default App;
