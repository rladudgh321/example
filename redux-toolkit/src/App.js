import './App.css';
import React from 'react';
import {createStore} from 'redux';
import {Provider, useSelector, useDispatch,} from 'react-redux';


function reducer(state, action){
    if(state === undefined){
        return {
            value:0
        }
    }
    let newState;

    console.log(action, state, newState);
    return newState;
}

const store = createStore(reducer);

export default function App() {

  return (
    <div>
      <Provider store ={store}>
          <Counter />
      </Provider>
    </div>
  );
}

function Counter(){
    const dispatch = useDispatch();
    const count = useSelector(state=>state.value);
    return(
        <div>
            <input type="button" value="+" onClick={()=>{
                dispatch({type:'up',step:2});
            }} /> {count} 
        </div>
    );
}