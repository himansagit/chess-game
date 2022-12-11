import React from 'react';
import './index.css';


function Piece(props){
    const theme= props.team=="White"? "light" : "dark";
    
   return (
     <button type='button' className={"btn btn-"+ theme} style={{gridColumnStart:props.Col,gridRowStart:props.Row}}>{props.name}</button>

        // <button type='button' className='btn btn-secondary'>Click</button>
   )
}
export default Piece;

//ridColumnStart:{props.piece.curC},gridRowStart:{props.piece.curR}