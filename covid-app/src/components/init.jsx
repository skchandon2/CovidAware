import React, { Component } from 'react';
import { Modal, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

class Init extends Component {
    render() { 
        let prevScore = '';
        if(this.props.previousOverallScore != -1)
        {
            prevScore = "Score: " + this.props.previousOverallScore;
        }
        return (
            <Modal show={this.props.showInit} onHide={this.props.onCloseInit} style={{display: "block"}}>
                <Modal.Header closeButton>
                    <Modal.Title>Covid Aware</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>A COVID awareness building game!</p>
                    <h2>{prevScore}</h2>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.onCloseInit}>Play</Button>
                </Modal.Footer>
            </Modal>

         );
    }
}
 
export default Init;