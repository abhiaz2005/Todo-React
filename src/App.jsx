import React, { useState } from 'react';
import Input from './components/Input';
import List from './components/List';

const App = () => {
  const [tasks, setTasks] = useState([]);

  let formHandler = (data) => {
    setTasks((prev) => [...prev, { task: data.task }]); 
  };

  let  deletehandler =  (id) =>{
    setTasks((prev)=>{
      return prev.filter((task,index)=>{
        return index !== id;
      })
    })
  }
  return (
    <div className='w-full h-screen bg-zinc-400'>
      <Input formHandler={formHandler} />
      <List tasks={tasks} deletehandler={deletehandler}/>
    </div>
  );
};

export default App;
