import React, {Component} from 'react';

export default function TodoList(props){
    return(
        <div>
            <div>
                {props.formData.map((ele)=>{
                    return<p>{ele.item}</p>
                })}
            </div>
        </div>
    )
}