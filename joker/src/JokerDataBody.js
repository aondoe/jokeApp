import React from 'react';
import jokeList from "./JokeListData";
import Joker from './Joker';
import './joker.css';

function JokerDataBody(){
//jokeList is an array with properties 'who' and 'answers'. Props is a parameter here used to get values from the array

//The component below can also be filtered property lengths of the jokeList array
let jokeComponent= jokeList.filter(props=>props.answers.length>1).map(props => <Joker who={props.who} answers={props.answers}/>);

/*The line above can be written another way:
<Joker 
    who={props.who}
    answers={props.answers}
/>
*/

let jokeTitle='I Got Knock Knock Jokes?!!'; //Title for this component
document.title=jokeTitle;
let para="Below are a collection of absolutely useless knock knock jokes! YAY!";

    return(
        <div>
                <h1 className="jokeHead text-center">{jokeTitle}</h1>
                    <p class="jokePara text-center">{para}</p>
                    <div className="jokerBody">
                            {jokeComponent}
            </div>
        </div>
    )}

export default JokerDataBody;