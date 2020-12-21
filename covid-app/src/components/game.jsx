import React, { Component} from 'react';
import Init from './init';
import Score from './score';
import Question from './question';
import Selections from './selections';
import { getRanromQuestions } from '../services/localQuestionService';

class Game extends Component {
    state = {
        showInit: true,
        score: 0, 
        questions: getRanromQuestions(),
        currentQuestion:  {
            _id: "0",
            text: "Questions Will Appear Here.",
            answers: []
        },
        previousCorrectAnswers: [],
        hasAnsweredCorrectly: -1,
        isHighlighted: false,
        previousOverallScore: -1,
        showAnswerLabel: false
    };

    setCurrentQuestion = (question) => this.setState({ currentQuestion: question });

    getNextQuestion = () => {
     let question = this.state.questions.shift();
     console.log('question:', question);
     if (question) {
        this.setCurrentQuestion(question);
     } else {
         this.handleReplay();
     }
    }

    handleCloseInit = () => {
        this.setState({ showInit: false });
        this.getNextQuestion();
    }

    handleSelection = selection => {
        
        const answers = this.state.currentQuestion.answers;
        const isCorrect = answers.some(a => a._id.includes(selection._id));
        if (isCorrect) {
            this.setState({ hasAnsweredCorrectly: 1 });
            this.incrementScore();
        } else {
            this.setState({ hasAnsweredCorrectly: 0 });
            
        }
        this.setState({previousCorrectAnswers: [...this.state.currentQuestion.answers], isHighlighted: true, showAnswerLabel: true});
        
        
    };
    

    componentDidUpdate()
    {
        if(this.state.isHighlighted)
        {
            this.timeout = setTimeout(() => {
                console.log("~~~~~~")
                this.setState({ previousCorrectAnswers: [], isHighlighted: false, showAnswerLabel: false});
                this.getNextQuestion();
            }, 1000);
        }
        else
        {
            clearTimeout(this.timeout);
        }
        
    };

    incrementScore = () => {
        this.setState({ score: this.state.score + 1 });
    };

    handleReplay = () => {
        this.setState({
            showInit: true,
            score: 0, 
            questions: getRanromQuestions(),
            currentQuestion:  {
                _id: "0",
                text: "Questions Will Appear Here.",
                answers: [1]
            },
            previousCorrectAnswers: [],
            hasAnsweredCorrectly: -1,
            isHighlighted: false,
            showAnswerLabel: false,
            previousOverallScore: this.state.score
        })
    }

    render() { 
        return ( 
            <div>
                <Init 
                    showInit = {this.state.showInit} 
                    onCloseInit={this.handleCloseInit}
                    previousOverallScore = {this.state.previousOverallScore}
                />
                <Score score = {this.state.score} />
                <Question 
                    question = {this.state.currentQuestion} 
                    hasAnsweredCorrectly = {this.state.hasAnsweredCorrectly}
                    highlightAnswerLabel = {this.state.showAnswerLabel} 
                />
                <Selections onSelection={this.handleSelection} previousCorrectAnswers={this.state.previousCorrectAnswers}/>
            </div>
         );
    }
}
 
export default Game;