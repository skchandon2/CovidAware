import React, { Component } from 'react';
import { Modal, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

class Init extends Component {
    state = {
        isOpen: true
      };
    
    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    render() { 
        return (
            <Modal show={this.state.isOpen} onHide={this.closeModal} style={{display: "block"}}>
                <Modal.Header closeButton>
                    <Modal.Title>Covid Aware</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>A COVID awareness building game!</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={this.closeModal}>Play</Button>
                </Modal.Footer>
            </Modal>

         );
    }
}
 
export default Init;