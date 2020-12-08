import React from 'react';
import {setCompleted} from '../actions/actions';
import { initialState, reducer } from '../reducers/reducer';
import {useReducer} from 'react';
const ToDo = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    const handleClick = () => {
        dispatch(setCompleted(props.item.id));
        // console.log(props.item)
    }

    return (
        <div onClick={handleClick} className={`item${props.item.completed? ' done' : ''}`}>
            <p>{props.item.item}</p>
        </div>
    )
}

export default ToDo;