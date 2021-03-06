/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { Nav, NavDropdown, MenuItem } from "react-bootstrap";
import Modal from "components/Modal/Modal.jsx";

class AdminNavbarLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
  }

  FavoriteRef = ({handleShow}) => {
    this.showModal = handleShow;
 }
 
 onFavoriteClick = () => {
   this.showModal();
 }
render() {
  return (
    <div>
      <Nav pullRight>
        <NavDropdown
          eventKey={2}
          title="Options"
          id="basic-nav-dropdown-right"
        >
          <MenuItem onClick={this.onFavoriteClick} eventKey={2.1}>Show Favorites</MenuItem>
          <Modal ref={this.FavoriteRef}></Modal>
        </NavDropdown>
      </Nav>
    </div>
  );
}
}

export default AdminNavbarLinks;
