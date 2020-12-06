import React, { Component } from 'react';
import Score from './score';
import Question from './question';
import Selections from './selections';
import { getRanromQuestions } from '../services/localQuestionService';

class Game extends Component {
    state = {
        score: 0, 
        questions: getRanromQuestions(),
        currentQuestion:  {
            _id: "0",
            text: "Questions Will Appear Here.",
            answers: []
        },
        selectionId: this.props.selectionId
    };

    setCurrentQuestion = (question) => this.setState({ currentQuestion: question });

    getNextQuestion = () => {
     let question = this.state.questions.shift();
     this.setCurrentQuestion(question);
    }

    handleSelection = selection => {
        const answers = this.state.currentQuestion.answers;
        const isCorrect = answers.some(a => a._id.includes(selection._id));
        if (isCorrect) {
            this.incrementScore();
        }
        this.getNextQuestion();
    };

    incrementScore = () => {
        this.setState({ score: this.state.score + 1 });
    };

    handleReplay = () => {
        console.log("Initialize new game");
    }

    render() { 
        return ( 
            <div>
                <Score score = {this.state.score} />
                <Question question = {this.state.currentQuestion} />
                <Selections onSelection={this.handleSelection} />
            </div>
         );
    }
}
 
export default Game;