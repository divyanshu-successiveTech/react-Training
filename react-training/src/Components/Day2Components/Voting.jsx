'use client'


import { useReducer } from "react";

const voteReducer =(state,action)=>{
    switch(action.type){
        case 'vote':
            return {
                ...state,
                [action.payload]: state[action.payload] +1
            }
        default:
            return state;
    }
}


const initialState ={
    A:0,
    B:0,
    C:0,
};


const Voting =()=>{
    const [vote,dispatch]= useReducer(voteReducer,initialState);



    const handleVote=(option)=>{
        dispatch({type:'vote',payload: option});

    }       


    return (
        <>
        <h1>Voting app</h1>
        <>
        <button onClick={()=>{handleVote('A')}}>Vote for A</button>
        <button onClick={()=>{handleVote('B')}}>Vote for B</button>
        <button onClick={()=>{handleVote('C')}}>Vote for C</button>
        
        </>

        <h3>Current Votes</h3>
        <ul>
            <li>A:{vote.A}</li>
            <li>B:{vote.B}</li>
            <li>C:{vote.C}</li>

        </ul>
        </>

        
    )
}


export default Voting;


