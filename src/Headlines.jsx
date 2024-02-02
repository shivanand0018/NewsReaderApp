import React, { useEffect } from 'react'
import './Headlines.css';
const Headlines = (props) => {

    console.log(props);
    return (
        <div>
            <ul id="scroll-container">
                <div id="scroll-text">
                <h2 style={{color:'yellowgreen',fontFamily:'cursive',textDecoration:'underline'}}>Headlines:</h2>
                    {props.Content.articles.map((item,i)=><h5 >{i+1}{')'}{item.title}</h5>)}
                </div>
            </ul>
        </div>
    )
}

export default Headlines