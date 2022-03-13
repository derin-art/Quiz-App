import React from "react";

export default function option(props){
    return <button 
    
    no = {props.questionNo}
    id = {props.id}
    data-could = {props.questionNo}
    className= {`mr-4 p-1 px-4
    ${props.isSelected ? "bg-green-500" : "bg-green-300"} border rounded-full 
   hover:outline hover:outline-indigo-300
    hover-border-none hover:outline-2`} onClick={(event)=>{props.handleClick(event)}}
    
     data-valuable = {props.Option}
     
     >

    {props.Option}
    </button>
}