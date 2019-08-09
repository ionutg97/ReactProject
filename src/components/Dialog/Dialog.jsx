import React, { Component } from 'react';
import './dialog.css';


const Dialog = (props)=>
{
    if (!dialogVisible) return null;
    return (
        
            <div className='dialog' >
                <div>
                    <div className='title'>{props.title}</div>
                    <div className='body'>{props.body}</div>
                    <div className='actions'>{props.actions}</div>
                </div>
            </div>
        
    );
}

export default Dialog;   