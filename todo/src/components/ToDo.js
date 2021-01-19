import React from 'react';
import {setCompleted} from '../actions/actions';


const ToDo = (props) => {
    
    const handleClick = () => {
        props.dispatch(setCompleted(props.item.id));
        // console.log(props.item)
    }

    return (
        <div className={`item${props.item.completed? ' done' : ''}`}>
            <p onClick={handleClick} >{props.item.item}</p>
        </div>
    )
}

export default ToDo;