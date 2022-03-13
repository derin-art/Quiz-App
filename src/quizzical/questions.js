import React from "react";
import { ReactDOM } from "react";
import "../App.css"



export default function QuestionsRender(props){
    let selectQuestions = []
    console.log(props.allAnswers)
    props.allAnswers.forEach(ques =>{
    
        selectQuestions.push(<button value={ques.Option} key={ques.id} onClick={(event)=>{ques.renderSelected(event)}} id={ques.id} data-questionno ={ques.questionNo} 
        className ={`hover:outline-blue-200 hover:outline-2 hover:outline
        text-purple-800 text-xs font-semibold border border-purple-300 ${ques.isSelected? "bg-green-400": "bg-green-200"} mb-4 mr-2 
        rounded-full px-6 md:py-2`}
        
        >{ques.Option}</button>)
    })
    

    return <div className="flex flex-col border-y p-2 lg:ml-24 text-purple-800 font-bold" key={props.question} onClick={props.jet}>
        <label>{props.question}</label>
        <div className="flex mt-4">
            
                {selectQuestions}    

        </div>
    </div>
}