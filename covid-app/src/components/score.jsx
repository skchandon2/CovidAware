import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Score extends Component {
    render() { 
        return ( 
            <div className="row" style={ { height: "10vh", marginTop: 15 } }>
                <div className="col-sm-12" style= { { textAlign: "center" } }>
                    <h1>
                        <span id="lblScore" className="badge badge-primary">
                            Score: {this.props.score}
                        </span>
                    </h1>
                </div>
            </div>
         );
    }
}
 
export default Score;