import React from 'react';
import Joker from './Joker';
import './joker.css'

function JokerBody(){

    return(asdfas
        <div>
            <h1 className="jokeHead text-center"></h1>

                <div className="jokerBody">
                    <Joker
                        who="Vanna"
                        answers="Go to Hell!"
                        />
                
                <Joker
                    who="Rest"
                    answers=" My Case!"
                    />
                </div>

                <Joker
                    who="Wanna See"
                    answers=" More Money!"
                    />
                </div>

    );
}

export default JokerBody