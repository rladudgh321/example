import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  return (
    <div className="container">
      <h1>Hello world</h1>
      <FuncComp initNumber={'0부터 1사이의 랜덤한 숫자가 나옵니다'} />
      <ClassComp initNumber={'0부터 1사이의 랜덤한 숫자가 나옵니다'} />
    </div>
  );
}

function FuncComp(props){
  const [number, setNumber] = useState(props.initNumber);
  const [date, setDate] = useState((new Date().toString()));
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number : {number}</p>
      <p>Date : {date}</p>
      <input type="button" value="random" onClick={()=>{
        setNumber(Math.random());
        setDate((new Date()).toString());
      }} />
    </div>
  );
}

class ClassComp extends React.Component{
  state ={
    number:this.props.initNumber,
    date: new Date().toString()
  }
  render(){
    return(
      <div className="container">
        <h2>class style component</h2>
        <p>Number : {this.state.number} </p>
        <p>Date : {this.state.date}</p>
        <input type="button" value="random" onClick={function(){
          this.setState({number:Math.random()});
          this.setState({date:new Date().toString()});

          }.bind(this)
        } />
      </div>
    );
  }
}

export default App;
