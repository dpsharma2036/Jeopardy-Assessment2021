
import React, {Component} from 'react'


function Display(props){
    return(
        <div className = "Display">
            {/*<h2>Category:</h2>*/}
            <em>User Score:</em>
            {props.score}<br/><br/>
            <strong>Question:</strong>
            {props.data.question}<br/>
            <strong>Value:</strong>
            {props.data.value}<br/>
            <strong>Category:</strong>
            {props.category} <br/>

            <imput
             type="text" onChange={props.handleChange}
            value={props.userAnswer} />

            <button onClick={props.handleSubmit}>Submit Answer</button>
            
            
        </div>
    )

}

export default Display;