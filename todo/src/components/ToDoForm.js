import React, { useReducer, useState } from 'react';

// import  {reducer, initialState} from '../reducers/reducer';
import {setItem, setCompleted, removeItem} from '../actions/actions';

const ToDoForm = (props) => {
    // const [state, dispatch] = useReducer(reducer, initialState);
    const [formData, setFormData]=useState('');
    
    const handleChanges = (e) => {
        setFormData(e.target.value)
    }

    const handleAddToDo = (e) => {
        e.preventDefault();
        props.dispatch(setItem(formData));
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.dispatch(
            setItem({item:formData, completed: false, id:Date.now()})
        );
        setFormData("");
    }

    const handleClear = (e) => {
        e.preventDefault();
        props.dispatch(removeItem());
    }

    
 
 
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={handleChanges}/>
                <button type='submit' onClick={handleAddToDo}>Add your to do</button>
                <button onClick={handleClear}>clear</button>
            </form>
        </div>
    );
}

export default ToDoForm;