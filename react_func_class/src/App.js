import './App.css';
import React, {useState} from 'react';

function App() {
  return (
    <div className="container">
      <h1>hello world</h1>
        <FuncComp initNumber={'랜덤숫자 만들기'}></FuncComp>
        <ClassComp initNumber={'랜덤숫자 만들기'}></ClassComp>
    </div>
  );
}

function FuncComp(props){
  const [number,setNumber] = useState(props.initNumber);
  const [_date, setDate] = useState((new Date()).toString());
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number: {number}</p>
      <p>Date: {_date}</p>
      <input type="button" value="random" onClick={()=>{
        setNumber(Math.random());
      }}></input>
      <input type="button" value="date" onClick={()=>{
        setDate((new Date()).toString());
      }} />
    </div>
  );
}
        
var classStyle ='color:red';
class ClassComp extends React.Component{
  componentWillMount(){
    console.log('%cclass=>componentWillMount',classStyle);
  }
  componentDidMount(){
    console.log('%cclass=>componentDidMount',classStyle);
  }
  state ={
    number:this.props.initNumber,
    __date:(new Date()).toString()
  }
  render(){
    console.log('%cclass=>render',classStyle);
    return(
      <div className="container">
        <h2>class style component</h2>
        <p>Number: {this.state.number}</p>
        <p>Date: {this.state.__date}</p>
        <input type="button" value="random" onClick={function(){
          this.setState({number:Math.random()});
        }.bind(this)} />
        <input type="button" value="date" onClick={function(){
          this.setState({__date:new Date().toString()});
        }.bind(this)} />
      </div>
    );
  }
}

export default App;
