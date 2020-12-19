import React, { Component } from 'react';
import { getSelections } from '../services/localSelectionService'
import 'bootstrap/dist/css/bootstrap.css';
import Selection from './selection';

class Selections extends Component {
    state = { 
        selections : getSelections()
    };
    
    handleSelection = selection => {
        this.props.onSelection(selection);
    };

    // Reset
    handleReset= () => {
        const selections = getSelections();
        this.setState({ selections });
    }
    
    render() { 
        return ( 
            <div className="row">
                    <div className="col-1"></div>
                    {this.state.selections.map(selection => 
                    <Selection 
                        key={selection._id} 
                        onSelection={this.handleSelection}
                        selection = {selection}
                        currentAnswers={this.props.currentAnswers}
                        currentId = {selection._id} 
                    />)}
                    <div className="col-2"></div> 
                </div>
         );
    }
}
 
export default Selections;