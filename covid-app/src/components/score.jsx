import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Score extends Component {
    state = {  
        score: 0,
        questions: 0
    }

    render() { 
        return ( 
            <div className="row" style={ { height: "20vh", marginTop: 15 } }>
                <div className="col-sm-12" style= { { textAlign: "center" } }>
                    <h1>
                        {this.getScore()}
                    </h1>
                </div>
            </div>
         );
    }

    getScore() {
        const { score, questions } = this.state;
        
        return (
            <span id="lblScore" className="badge badge-primary">Score: {score} out of {questions}
        </span>
        );
    }
}
 
export default Score;