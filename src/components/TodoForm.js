import React, {useRef, useEffect} from 'react'
// import { onKeyPress } from './onKeyPress';
export default function TodoForm( {initialVal, editing, handleAddTodo, handleUpdateTodo}) {

    const classN = editing ? 'update-form' : "add-form" ;
    const buttnN = editing ? 'update-submit' : "add-submit" ;
    const inputN = editing ? 'update-input' : "add-input" ;
    const val = editing ? initialVal : null;

    const todoNameRef = useRef();

    // submits todo on "Enter" press
    function  useOnEnter(handleSubmit) {
        useEffect(() => {
            function keyPressHandler(event) {
                if (event.key === 'Enter') {
                    handleSubmit();
                }
            }

        window.addEventListener('keydown', keyPressHandler);

        return() => {
            window.removeEventListener('keydown', keyPressHandler)
        }
        }, [handleSubmit]);
    } 
    useOnEnter(handleSubmit);

    function handleSubmit() {
        const name = todoNameRef.current.value;

        if (name === '') return ;

        editing ? handleUpdateTodo(name): handleAddTodo(name) ;

        // resets value in input
        todoNameRef.current.value = null;
    }

    // useOnEnter(handleAddTodo())

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
