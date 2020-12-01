
import React from 'react';

const Random = (props) => {

    return (
        <>
          Random value between {props.min} and {props.max} : &nbsp; 
        {Math.round(Math.random() * (props.max - props.min) + props.min)}
     
        </>
    );

}

export default Random; 