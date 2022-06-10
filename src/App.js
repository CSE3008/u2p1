import React, { useState } from "react";
import './App.css';

function App() {
  const [counter, setCounter] = useState (0);
   let result = 0;
  
 
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);


  function add (){
    var a=num1
    var b=num2
    console.log("This is a");
    console.log(a);
    console.log("This is b");
    console.log(b);
   result = a + b; 
   setCounter(result);
  console.log(result);
  }
  function subtract (){
    var a=num1
    var b=num2
    result = a - b;
  console.log(result);
  setCounter(result);
  }
  function multiply (){
    var a=num1
    var b=num2
    result = a * b;
  console.log(result);
  setCounter(result);
  }

  const [people, setPeople] = useState([
    {
      name: "John",
      lastName: "Doe",
      age: 30,
      favouriteFood: "Pizza",
      favouriteColour: "Red",
      counter: 0,
    },
  ]);

  const [name, setName] = useState("");
  const [lastName, setLastname] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        name="name"
        onChange={(event) => {
          setName(event.target.value);
          
        }}
      />
      <input
        type="text"
        name="lastName"
        onChange={(event) => {
          setLastname(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setPeople((current) => [{ name, lastName }, ...current]);
        }}      >
        Add user
      </button>
      <ul>
        {people.map((person, idx) => (
          <li id={idx}>{`${person.name} ${person.lastName}`}</li>
        ))}
      </ul>

      <p className='text-blue'>Calculadora + - X</p>
      <input
        type="text"
        name="Num1"
        onChange={(event) => {
          setNum1(event.target.value);
          console.log(num1);}}
      />
      <input
        type="text"
        name="Num2"
        onChange={(event) => {
          setNum2(event.target.value);
        }}
      />
 

      <button 
      onClick={()=> {
       add();
        }}>Sumar</button>
        <button 
      onClick={()=> {
        subtract()
        }}>Restar</button>
          <button 
      onClick={()=> {
        multiply()
        }}>Multiplicar</button>
        
      <h1 className='text-red'>Result: {counter}</h1>
         
    </div>
  );
}

export default App;
