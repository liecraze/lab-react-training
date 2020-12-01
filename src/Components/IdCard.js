
import React from 'react';

function IdCard(props) {

        return(
            <>
         
         <img src={props.picture} alt="profile pic" />
         <p>
          <strong> First Name: </strong>
          {props.firstName}
        </p>
        <p>
          <strong> Last Name: </strong>
          {props.lastName}
        </p>
        <p>
          <strong> Gender: </strong>
          {props.gender}
        </p>
        <p>
          <strong> Height: </strong>
          {props.height / 100}m
        </p>
        <p>
          <strong> Birth: </strong>
          {props.birth.toDateString()}
        </p>

            </>
        )
    
}


export default IdCard; 