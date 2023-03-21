import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [funcShow,setFuncShow] = useState(true);
  const [classShow,setClassShow] = useState(true);
  return (
    <div className="container">
      <h1>hello world</h1>
        {funcShow ? <FuncComp initNumber={'랜덤숫자 만들기'}></FuncComp> : false}
        <input type="button" value="function Style toggle key" onClick={()=>{
          if(funcShow === true){
          setFuncShow(false);
          }else {
          setFuncShow(true);
          }
        }} />
        {classShow ? <ClassComp initNumber={'랜덤숫자 만들기'}></ClassComp> :false }
        <input type="button" value="class Style toggle key" onClick={()=>{
          if(classShow === true){
            setClassShow(false);
          }else {
            setClassShow(true);
          }
        }} />
    </div>
  );
}
let funcStyle ='color:blue';
let funcId =0;
function FuncComp(props){

  const [number,setNumber] = useState(props.initNumber);
  const [_date, setDate] = useState((new Date()).toString());

  useEffect(()=>{
    console.log('%cfunc=>useEffect number'+(++funcId),funcStyle);
    return function(){
      console.log('%cfunc=>useEffect number return'+(++funcId), funcStyle);
    }
  },[number]);
  console.log('%cfunc=>render'+(++funcId),funcStyle);
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
  shouldComponentUpdate(nextProps,nextState){
    console.log('%cclass=>shouldComponentUpdate',classStyle);
    return true;
  }
  componentDidUpdate(nextProps,nextState){
    console.log('%cclass=>componentDidUpdate',classStyle);
  }
  componentWillUnmount(nextProps,nextState){
    console.log('%cclass=>componentWillUnmount',classStyle);
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