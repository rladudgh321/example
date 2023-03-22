import './App.css';
import React, { Component, useState,useEffect } from 'react';

function App() {
    const [funcShow,setFuncShow] = useState(true);
    const [classShow,setClassShow] = useState(true);
  return (
    <div className="container">
        <h1>Hello, world</h1>
    {funcShow ? <FuncComp initNumber={'랜덤숫자'}></FuncComp>: false}
    <input type="button" value="Func toggle" onClick={()=>{
        if(funcShow === true){
            setFuncShow(false);
        }else{
            setFuncShow(true);
        }
    }} />
    {classShow ? <ClassComp initNumber={'랜덤숫자'}></ClassComp> : true}
    <input type="button" value="class toggle" onClick={()=>{
        if(classShow === true){
           setClassShow(false);
        }else{
            setClassShow(true);
        }
        }} />
    </div>
  );
}
let funcStyle= 'color:blue';
let funcId =0;
function FuncComp(props){

    useEffect(function(){
        console.log('%cFunc useEffect'+(++funcId),funcStyle);
        return function(){
        console.log('%cFunc return useEffect'+(++funcId),funcStyle);
        }
    },[]);
    console.log('%cFunc render'+(++funcId),funcStyle);
    const [random, setRandom] = useState(props.initNumber);
    const [date,setDate] = useState(new Date().toString());
    return (
        <div className="container">
        <h2>Function style component</h2>
        <p>Number:{random}</p>
        <input type="button" value="random" onClick={()=>{
            setRandom(Math.random());
        }} />
        <p>Date: {date}</p>
        <input type="button" value="Date" onClick={function(){
            setDate(new Date().toString());
        }} />
    </div>
    );
}

let classStyle = 'color:red';
let classId = 0; 
class ClassComp extends Component{
    componentWillMount(){
        console.log('%cClass=>componentWillMount'+(++classId),classStyle);
    }
    componentDidMount(){
        console.log('%cClass=>componentDidMount'+(++classId),classStyle);
    }
    componentWillUnmount(){
        console.log('%cClass=>componentWillUnmount'+(++classId),classStyle);
    }
    shouldComponentUpdate(){
        console.log('%cClass=>shouldComponentUpdate'+(++classId),classStyle);
        return true;
    }
    componentDidUpdate(){
        console.log('%cClass=>componentDidUpdate'+(++classId),classStyle);
    }
    state = {
        random: this.props.initNumber,
        date: new Date().toString()
    }
    render(){
        console.log('%cClass=>render'+(++classId),classStyle);

        return (
            <div className="container">
                <h2>Class style component</h2>
                <p>Number: {this.state.random}</p>
                <input type="button" value="random" onClick={function(){
                    this.setState({random: Math.random()});
                }.bind(this)} />
                <p>Date: {this.state.date}</p>
                <input type="button" value="Date" onClick={function(){
                    this.setState({date: new Date().toString()});
                }.bind(this)} />
            </div>
        );
    }
}

export default App;
