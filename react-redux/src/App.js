import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux';
import {Provider, useSelector, useDispatch, connect} from 'react-redux';

function App() {
  function reducer(currentState, action){
    if(currentState === undefined){
      return {
        topics: {id:1, title:'html', desc: 'html is ...'},
        _number_ :1
      }
    }

    //불변성유지
    let newState;
    if(action.type === 'PLUS'){
      let plusnum = currentState._number_ + 1;
      newState = Object.assign({},currentState,{_number_: plusnum});
    }    

    console.log(action, currentState, newState);
    return newState;
  }



  const store = createStore(reducer);

  const number = 1;
  return (
    <div className="App">
      <h1>Root: {number}</h1>
      <div id="container">
        <Provider store = {store}>
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

function Left3(props){
  const id = useSelector(state=>state._number_);
  // const title = useSelector(state=>state.topics.title);
  // const desc = useSelector(state=>state.topics.desc);
  return (
    <div>
      <h2>Left3 : {id}</h2>
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
  let id = useSelector(state=>state._number_);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Right3</h2>
      <input type="button" value="+" onClick ={()=>{
        dispatch({type:'PLUS', plus: id++});
      }} />
    </div>
  );
}

export default App;
