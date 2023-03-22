import './App.css';
import { createStore } from 'redux';
import {Provider, useSelector, useDispatch, connect} from 'react-redux';

function reducer(currentState, action){
  if(currentState === undefined){
    return {
      number:1
    }
  }

  //newState 불변성 유지
  const newState = {... currentState};
  if(action.type ='PLUS'){
    newState.number++;
  }  
  console.log(action,currentState,newState);
  return newState;
}

const store = createStore(reducer);

function App() {
  const number = 2;
  return (
    <div className="App">
      <h1>Root: {number}</h1>
      <div id="container">
        <Provider store={store}>
          <Left1 number={number} />
          <Right1 />
        </Provider>
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

function Left3(){
  const number = useSelector(state=>state.number);
  return (
    <div>
      <h2>Left3 :{number}</h2>
    </div>
  );
}

function  Right1(props){
  return (
    <div>
      <h2>Right1</h2>
      <Right2 />
    </div>
  );
}

function  Right2(props){
  return (
    <div>
      <h2>Right2</h2>
      <Right3 />
    </div>
  );
}

function  Right3(props){
  const dispatch = useDispatch();
  return ( 
    <div>
      <h2>Right3</h2>
      <input type="button" value="+" onClick={()=>{
        dispatch({type:'PLUS'});
      }} />
    </div>
  );
}

export default App;
