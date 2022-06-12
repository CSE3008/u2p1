import React, { useState } from "react";
import './App.css';

function App() {
  const [counter, setCounter] = useState (0);
   let result = 0;
  
 
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);


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
          <h1 className="display-3 text-purple">DWI - Tarea III - Unidad II</h1>
          <p></p>
        </div>

        <div className="row">
          <div className="col-2"></div>
            
          <div className="col-3">
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
          <div className="col-3">
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
         
          <div className="col-2">
            <button 
              className="btn btn-secondary"
              onClick={() => {
                setPeople((current) => [{ name, lastName }, ...current]);
              }}      >
              Add user
            </button>
          </div>
        </div>
        <p></p>
        <div className="row justify-content-md-center">      
          <div className="col-5" >
            <ul className="list-group">
              {people.map((person, idx) => (
                <li className="list-group-item" id={idx}>{`${person.name} ${person.lastName}`}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row"><p></p><p></p><p></p><p></p></div>

        <p></p><p></p><p></p><p></p>
      </div>

      
        
      <div className="row">
        <div className="col-2"></div>
        <div className="col-sm-8">
          <div class="card">
            <div class="card-header">
              <h1 className="text-info">Calculadora</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-2"></div>
                <div className="col">
                  <input
                    className="form-control"
                    type="text"
                    name="Num1"
                    onChange={(event) => {
                      setNum1(event.target.value);
                      console.log(num1);}}
                  />
                </div>
                <div className="col">
                  <input
                    className="form-control"
                    type="text"
                    name="Num2"
                    onChange={(event) => {
                      setNum2(event.target.value);
                    }}
                  />
                </div>
                <div className="col-2"></div>
              </div>
                <p></p>
              <div className="row">
                <div className="col-4"></div>
                <div className="col-1">
                  <button 
                    className="btn btn-outline-info btn-circle"
                    onClick={()=> {
                    add();
                      }}>+</button>
                </div>
                <div className="col-1">
                  <button
                    className="btn btn-outline-info btn-circle" 
                    onClick={()=> {
                    subtract()
                    }}>-</button>
                </div>
                <div className="col-1">
                  <button 
                    className="btn btn-outline-info btn-circle"
                    onClick={()=> {
                    multiply()
                    }}>x</button>
                </div>
                <div className="col-1">
                  <button 
                    className="btn btn-outline-info btn-circle"
                    onClick={()=> {
                    split()
                    }}>/</button>
                </div>
                <div className="col"></div>
              </div>   
                <p></p>  
              <div className="row"> 

                <div className="col-4"></div>
                <div className="col border border-info rounded-pill"> 
                  <h1>= 
                    <small class="text-muted"> {counter}</small>
                  </h1>
                </div>
                <div className="col"></div>
              </div>
            </div>
            </div>
                  
        </div>
      </div>
      <p></p>
      <p></p>
      <div class="footer-basic bg-light">        
            <p> </p>
            <p class="copyright">Carolina Soto © 2022</p>
            <p> </p>        
    </div>
         
    </div>
  );
}

export default App;
