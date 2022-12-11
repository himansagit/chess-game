import React from 'react';
import { useReducer } from "react";
import Piece from './Piece';
import './index.css';
import InitialList from './ChessPicesList';

function reducer(state,action){

}

function Board(){
    const [state,dispatch]=useReducer(reducer,InitialList)
    const Divs=[]
    for(let i=0;i<64;i++)
        Divs.push(i);
    function getColor(i){
        if((Math.floor(i/8)+i)%2==0)
            return "white"
        else
            return "black"
    }
   return (
    
    <div className='chess-board'>
    {
    //   state.map(piece=>{
    //     return <Piece key={piece.id} name={piece.name} Col={piece.curC} Row={piece.curR} team={piece.team}/>
    //   })
        Divs.map(divs=> {
            return (<div style={{backgroundColor:getColor(divs)}}></div>)
        } )
    }
    </div>
 
   )
}
export default Board;