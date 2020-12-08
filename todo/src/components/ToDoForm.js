import React, { useReducer, useState } from 'react';

import reducer, {initialState} from '../reducers/reducer';
import {setItem, setCompleted, setId} from '../actions/actions';

const ToDoForm = (props) => {
    const [formData, setFormData]=useState('');
    
    const handleChanges = (e) => {
        setFormData(e.target.value)
    }

    const handleAddToDo = (e) => {
        e.preventDefault();
        props.dispatch(setItem(formData))
    }

 
    return(
        <div>
            <form onSubmit={e=>{
                e.preventDefault();

            }}>
                <input type='text' onChange={handleChanges}/>
                <button type='submit' onClick={handleAddToDo}>Add your to do</button>
            </form>
        </div>
    );
}

export default ToDoForm;