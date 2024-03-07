import React,{useState} from 'react'
import { ToDoForm } from './ToDoForm'
import ToDoList from './ToDoList'
import { EditToDoForm } from './EditToDoForm'
import { ToDoCompleate } from './ToDoCompleate'
import {useEffect} from 'react'




export const ToDoWrapper = () => {
    const [toDos,setTodos] = useState([])
    const [isCompleteScreen, setIsCompleteScreen] = useState (false);
    useEffect(() => {
        const storedToDos = JSON.parse(localStorage.getItem('toDoItems'));
        if (storedToDos) {
            setTodos(storedToDos);
        }
    }, []);
    
    const addToDo = (toDo,descrp) => {
        const newToDo = {id: Date.now(), task: toDo,description: descrp, compleated : false, isEditing: false}
        let updatedToDo = [...toDos,newToDo]
        setTodos(updatedToDo)
        localStorage.setItem('toDoItems',JSON.stringify(updatedToDo))
    }
    
    const deleteToDo = (id) => {
        const updatedToDo = toDos.filter((todo)=>{
            return todo.id !== id
        })
        setTodos(updatedToDo)
        localStorage.setItem('toDoItems',JSON.stringify(updatedToDo))   
    }
    
    const editToDo = (id) => {
        const updatedToDo = toDos.map((todo)=>
            todo.id === id ? {...todo, isEditing : !todo.isEditing} : todo )
        setTodos(updatedToDo)
        localStorage.setItem('toDoItems',JSON.stringify(updatedToDo))    
    }
    
    const editTask = (task,id,description) => {
        const updatedToDo = toDos.map((todo)=>
            todo.id === id ? {...todo, isEditing : !todo.isEditing, task, description} : todo )

        setTodos(updatedToDo)
        localStorage.setItem('toDoItems',JSON.stringify(updatedToDo))    
    }
    
    const comleateToDo = (id) =>{
        const updatedToDo = toDos.map((todo)=>
            todo.id === id ? {...todo, compleated : !todo.compleated } : todo
        )
        setTodos(updatedToDo)
        localStorage.setItem('toDoItems',JSON.stringify(updatedToDo))    

    }

    const filteredToDos = toDos.filter((todo) => (isCompleteScreen ? todo.compleated : !todo.compleated));

    return (
        <div>
            <div className="TodoWrapper">
                <h1  >My ToDo's....!</h1>
                <br />
                <ToDoForm addToDo={addToDo} />
                <br />
                <ToDoCompleate setIsCompleteScreen={setIsCompleteScreen} isCompleteScreen={isCompleteScreen} />
                {
                   filteredToDos.map((toDo,index)=>{
                        if (toDo.isEditing ) {
                            return (<EditToDoForm key={index} editToDo={editTask} task={toDo} />)
                        }else{
                            return(<ToDoList task={toDo} key={index} deleteToDo={deleteToDo} editToDo={editToDo} comleateToDo={comleateToDo} />)
                        }
                    })
                }
            </div>
        </div>
    )
}
