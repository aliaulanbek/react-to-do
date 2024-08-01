import React, {useRef} from 'react'
export default function TodoForm( {initialVal, editing, handleAddTodo, handleUpdateTodo}) {

    const classN = editing ? 'update-form' : "to-do-form" ;
    const buttnN = editing ? 'update-submit' : "add-submit" ;
    const inputN = editing ? 'update-input' : "add-input" ;
    const val = editing ? initialVal : null;

    const todoNameRef = useRef();

    function handleSubmit() {
        const name = todoNameRef.current.value;
        if (name === '') return ;

        editing ?
        handleUpdateTodo(name):
        handleAddTodo(name) ;

        // resets value in input
        todoNameRef.current.value = null;
    }

    return (
        <>
        <div className= {classN} >
            <input className={inputN} ref = {todoNameRef} type= 'text' placeholder='Enter to-do...' defaultValue={val} />
            <button className = {buttnN} onClick={handleSubmit}>
                {editing? "UPDATE" : "ADD"}
            </button>
        </div>
        </>
    )
}
