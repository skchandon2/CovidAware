import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Question extends Component {
    render() { 
        return ( 
            <div className="row" style = { { height: "30vh" } }>
                <div className="col-sm-12" id="cardQuestionBox" style={ { textAlign: "center" } }>
                    
                    <div className="card" id="" style={ { width: "18rem", position: "relative", display: "inline-block" } }>
                        <div className="card-body">
                            <h2><span id="oneQuestionResult"></span></h2>
                        </div>
                    </div>
                    <br/>

                    <div className="card" style={ { width: "25rem", position: "relative", display: "inline-block" }}>                            
                        <div className="card-body" id="outerQuestionBox">
                            <h5 className="card-title">Question: </h5>
        <p className="card-text wgQuestionBox" id="displayItem">{this.props.question.text}</p>
                        </div>
                        <div className="card-body" id="playAgainBox" style= { { display: "none" }}>
                            <h5 className="card-title">Game Over</h5>
                            
                            <a href="#" className="btn btn-primary" id="btnPlayAgain">Play Again?</a>
                            </div>
                        </div>
                        {/* <button 
                            onClick={this.getNextQuestion} 
                            className="btn btn-danger btn-sm m-2"
                        >
                            Next
                        </button> */}
                </div>
            </div>
         );
    }
}
 
export default Question;