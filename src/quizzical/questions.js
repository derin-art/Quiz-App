import React from "react";
import { ReactDOM } from "react";
import "../App.css"



export default function QuestionsRender(props){

    return <div className="flex flex-col border-y p-2 lg:ml-24 text-purple-800 font-bold" key={props.question}>
        <label>{props.question}</label>
        <div className="flex mt-2">{props.renderQuestions}</div>
    </div>
}