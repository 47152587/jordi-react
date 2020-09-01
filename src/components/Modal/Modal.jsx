import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

class PopupModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false
    }
  }

  handleShow() {
    console.log(this.state)
    this.setState({ show: true })
  }
  handleClose() {
    this.setState({ show: false })
  }
  render() {
    return (
      <div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton onClick={() => this.handleClose()}>
            <Modal.Title>View favorites in development</Modal.Title>
          </Modal.Header>
          <Modal.Body>Developing</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.handleClose()}>
              Close
                </Button>
            <Button variant="primary" onClick={() => this.handleClose()}>
              Save Changes
                </Button>
          </Modal.Footer>
        </Modal>

      </div>
    )
  }

}
export default PopupModal;