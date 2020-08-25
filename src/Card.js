import React from 'react';

export default function Card(props) {
    return (
      <div className='Card'>
        <h3>{props.name}</h3>
        <div className='avatar-box'>
            <img src={props.avatar} alt='avatar' />
        </div>
        <p>In Session: {props.inSession}</p>
        <p>On Stage: {props.onStage}</p>
      </div>
    );
  };