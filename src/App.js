import React, { useState } from "react";
import './App.css';

function App() {
  const [counter, setCounter] = useState (0);
   let result = 0;
  
 
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [res, setres] = useState(0);

  function add (){
    var a=parseInt(num1)
    var b=parseInt(num2)
    result = a + b; 
   setCounter(result);
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
  function split (){
    var a=num1
    var b=num2
    result = a / b;
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
      <div className="container-fluid">
      <div className="row">
        <p></p>
        <h1 class="display-3">DWI - Tarea III - Unidad II</h1>
        <p></p>
        </div>

      <div className="row">
            
        <div className="col">
      <input
      className="form-control"
      placeholder="First Name"
        type="text"
        name="name"
        onChange={(event) => {
          setName(event.target.value);          
        }}
      />
      </div>
      <div className="col">
        <input
        className="form-control"
        placeholder="Last Name"
        type="text"
        name="lastName"
        onChange={(event) => {
          setLastname(event.target.value);
        }}
      />
      </div>
         
      <div className="col">
      <button 
      className="btn btn-secondary"
        onClick={() => {
          setPeople((current) => [{ name, lastName }, ...current]);
        }}      >
        Add user
      </button>
      <p></p>
      </div>
      </div>
      <div className="row">
      
        <div className="col" >
      <ul className="list-group">
        {people.map((person, idx) => (
          <li className="list-group-item" id={idx}>{`${person.name} ${person.lastName}`}</li>
        ))}
      </ul>
        </div>
        
      </div>
      <p></p><p></p><p></p><p></p>
      <div className="row">
      <div className="col">
        <p></p>
        <h1>Calculadora</h1>
        <p></p>
      </div>
      </div>

      <div className="row">
      <div className="col-2"></div>
      <div className="col-4">
      <input
        className="form-control"
        type="text"
        name="Num1"
        onChange={(event) => {
          setNum1(event.target.value);
          console.log(num1);}}
      />
      </div>
      <div className="col-4">
      <input
        className="form-control"
        type="text"
        name="Num2"
        onChange={(event) => {
          setNum2(event.target.value);
        }}
      />
      </div>
      </div>
      <p></p>
        <div className="row">
        <div className="col-2"></div>
        <div className="col-2">
          <button 
          className="btn btn-outline-info btn-circle"
          onClick={()=> {
          add();
            }}>+</button>
        </div>
        <div className="col-2">
          <button
          className="btn btn-outline-info btn-circle" 
          onClick={()=> {
          subtract()
          }}>-</button>
        </div>
        <div className="col-2">
          <button 
          className="btn btn-outline-info btn-circle"
          onClick={()=> {
          multiply()
          }}>x</button>
        </div>
        <div className="col-2">
          <button 
          className="btn btn-outline-info btn-circle"
          onClick={()=> {
          split()
          }}>/</button>
      </div>
      <div className="col-2"></div>
        </div>
        
        
        <div className="row gy-5">   
          <div className="col-2"></div>
          <div className="col-8"> 
          <h3>
            = 
            <small class="text-muted"> {counter}</small>
          </h3>
          </div>
          </div>
        </div>
         
    </div>
  );
}

export default App;
