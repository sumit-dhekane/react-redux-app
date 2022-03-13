import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import store from './store/store';
import { useState } from 'react';

function App() {

  const [count,setcount]=useState(0)

const store= useSelector((store)=>store)
const dispatch=useDispatch()
console.warn(store)

   const handleIncreament=()=>{
    dispatch({type:'INCREAMENT_COUNTER'})
   }

   const handleDecreament=()=>{
    dispatch({type:'DECREAMENT_COUNTER'})
   }
   const handleIncreamentByTwice=()=>{
     dispatch ({type:'INCREAMENT_BY_TWICE'})
   }
   const handleIncreamentByNumber=()=>{
      dispatch({type:'INCREAMENT_BY_NUMBER',value:count}
      )
   }

   const handleChangeCount=(event)=>{
       setcount(event.target.value)

   }
      
  return (
    <>
    <h1>Counter{store.counter}</h1>
    <button onClick={handleIncreament}>Increament</button>
    <button onClick={handleDecreament}>Decreament</button>
    <input type={'number'} onChange={handleChangeCount}></input>
    <button onClick={ handleIncreamentByNumber}>INCREAMENT BY{count}</button>
    </>
  )
  }  
export default App;
