import React,{useState} from 'react'

export const EditToDoForm = ({editToDo,task}) => {
    const [value,setValue] = useState(task.task)
    const [description,setDescription] = useState(task.description)
    const handelSubmit = (e) => {
        e.preventDefault()
        if (value && description) {
            editToDo(value,task.id,description);
            setValue('')
            setDescription('')        
        }
    }
    return (
        <form onSubmit={handelSubmit} className="TodoForm">
            <div className="input-container">

            <div className="form-group">
                <h4 style={{ color: 'white' }} >Task</h4>
                <input onChange={(e) => {
                    setValue(e.target.value)
                }} type="text" value={value} className="todo-input"  />
            </div>

            <div className="form-group">
                <h4 style={{ color: 'white' }} >Description</h4>
                <input onChange={(e) => {
                    setDescription(e.target.value)
                }} type="text" value={description} className="todo-input"  />
                <br />
            </div>
            </div>
            <div className="btn-container">
                <button type="submit" className="todo-btn">
                    Update
                </button>
            </div>
        </form>
        
    )
}
