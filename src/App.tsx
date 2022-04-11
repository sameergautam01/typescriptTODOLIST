import React,{FC,useState,ChangeEvent, HTMLInputTypeAttribute} from 'react';
import './App.css';

const App:FC=() => {
  const[text,setText] =useState<string>("");
  const[days,setDays] =useState<number>();
  const[todoList,setTodoList]=useState([]);
  const handleOnChange =(e:ChangeEvent<HTMLInputElement>)=> {
    if(e.target.name ==="items"){
      setText(e.target.value)
    }else {
      setDays(Number(e.target.value))
    }
  }
  return (
    <div className="App">
      <div className="tophalf">
        <div className='input-container'>
        <input type="text" placeholder='type your reminder here ' name="items" onChange={handleOnChange} />
        <input type="number" placeholder='Deadline ' name="days" onChange={handleOnChange}/>
        </div>
        <div className='button top'>
        <button> Add task</button>
        </div>
      </div>
      <div className='bottomhalf'>

      </div>
    </div>
  );
}

export default App;
