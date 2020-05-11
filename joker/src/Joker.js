import React from 'react';
import './joker.css'

/**** *  *  Think of this component as the model and think of JokerBody.js as the controller *  
 * 
 * This is the creation of a Joker component.
 * 
*/

 //below listed are the following props: props.who, props.answers
function Joker(props){ //props variable is how you add a prop to 
    return(
    <div className="row">
          <div className="col-2">
              </div>

          <div className="col-6">
                 <div className="jokerBody rounded-top border border-warning"> 
                 <div className="card-title knock">
                    Knock Knock <br></br>Who's There? {props.who}<br></br>
                </div>
                <div className="card-text">
                    I {props.who} Who?
                    <br></br>
                    <br></br>
                Answer: I {props.who} {props.answers}
                </div>
            </div>
            <br></br>
                <br></br>
        </div>
          <div className="col-2">
            </div>
    </div>
    );
}

export default Joker;