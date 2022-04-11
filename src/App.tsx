import React,{FC,useState,ChangeEvent} from 'react';
import './App.css';
import {ITask} from "./components/interface";


const App:FC=() => {
  const[text,setText] =useState<string>("");
  const[days,setDays] =useState<number>();
  const[todoList,setTodoList]=useState<ITask[]>([]);
  const handleOnChange =(e:ChangeEvent<HTMLInputElement>):void=> {
    if(e.target.name ==="items"){
      setText(e.target.value)
    }else {
      setDays(Number(e.target.value))
    }
  }
const handleOnCLick =():void=>{
  const newTask:ITask ={ taskName:text ,taskDays:Number(days)};
  setTodoList([...todoList,newTask])
  setText("");
  setDays(0);
}
const handleOnClickButton =(nameToDel:string):void=>{
  setTodoList(todoList.filter((task)=>{
    return task.taskName !== nameToDel;
  }))
   
}



  return (
    <div className="App">
      <div className="tophalf">
        <div className='input-container'>
        <input type="text" placeholder='type your reminder here ' name="items" onChange={handleOnChange} value={text} />
        <input type="number" placeholder='Deadline ' name="days" onChange={handleOnChange} value={days}/>
        </div>
        <div className='button top'>
        <button onClick={handleOnCLick}> Add task</button>
        </div>
      </div>
      <div className='bottomhalf'>
          {todoList.map((item:ITask,key:number)=>{
            return(
              <div className='task' key={key}>
                <div className='task-name'>
                  {item.taskName}
                </div>
                <div className='task-days'>
                  {item.taskDays}
                </div>
                <div className='del-button'>
                  <button onClick={()=>{handleOnClickButton(item.taskName)}}>x</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
