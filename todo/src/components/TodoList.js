import React, {Component} from 'react';
import Todo from './ToDo';
// import handleClear from './ToDoForm';

export default function TodoList(props){
    
    
    return(
        <div>
            <div>
                {props.formData.map((item)=>(
                    <Todo key={item.id} item={item}/>
                ))}
                <button onClick={props.handleClear} className="clear-btn">Click to Clear</button>
            </div>
        </div>
    )
}