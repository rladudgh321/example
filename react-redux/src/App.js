import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [number,setNumber] = useState(1);
  return (
    <div className="App">
      <h1>Root: {number}</h1>
      <div id="container">
        <Left1 number={number} />
        <Right1 onIncrese={()=>{
        setNumber(number+1);
      }}/>
      </div>
    </div>
  );
}

function Left1(props){
  return (
    <div>
      <h2>Left1: {props.number}</h2>
      <Left2 number={props.number}/>
    </div>
  );
}
function Left2(props){
  return (
    <div>
      <h2>Left2: {props.number}</h2>
      <Left3 number={props.number} />
    </div>
  );
}

function Left3(props){
  return (
    <div>
      <h2>Left3 :{props.number}</h2>
    </div>
  );
}

function  Right1(props){
  return (
    <div>
      <h2>Right1</h2>
      <Right2 onIncrese={()=>{
        props.onIncrese();
      }}/>
    </div>
  );
}

function  Right2(props){
  return (
    <div>
      <h2>Right2</h2>
      <Right3 onIncrese={()=>{
        props.onIncrese();
      }} />
    </div>
  );
}

function  Right3(props){
  return (
    <div>
      <h2>Right3</h2>
      <input type="button" value="+" onClick ={()=>{
        props.onIncrese();
      }} />
    </div>
  );
}

export default App;
