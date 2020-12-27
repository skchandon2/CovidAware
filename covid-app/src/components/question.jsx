import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Question extends Component {
    getQuestionAnswer() {
        if(this.props.highlightAnswerLabel)
        {
        if (this.props.hasAnsweredCorrectly === 1) {
            return <h2><span className="badge badge-success">Correct!</span></h2>
        } else if (this.props.hasAnsweredCorrectly === 0) {
            return <h2><span className="badge badge-danger">Wrong!</span></h2>
        } else {
            <h2><span>&nbsp;</span></h2>
        }
        }
        else
        {
            return <h2>&nbsp;</h2>
        } 
    }

    render() { 
        return ( 
            <div className="row" style = { { height: "30vh" } }>
                <div className="col-sm-12" id="cardQuestionBox" style={ { textAlign: "center" } }>
                    
                    <div className="card answerResultLabel" id="" style={ { width: "18rem", position: "relative", display: "inline-block" } }>
                        <div className="card-body">
                            {this.getQuestionAnswer()}
                        </div>
                    </div>
                    <br/>

                    <div className="card" style={ { width: "25rem", position: "relative", display: "inline-block" }}>                            
                        <div className="card-body" id="outerQuestionBox">
                            <h5 className="card-title">Question [{this.props.questionCount}]: </h5>
        <p className="card-text wgQuestionBox" id="displayItem" dangerouslySetInnerHTML={{__html: this.props.question.text}}/>
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