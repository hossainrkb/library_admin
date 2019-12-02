import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { logout } from "../store/actions/adminAction";
import { connect } from "react-redux";
const css = {
  position: "fixed",
  width: "200px",
  height:"650px",
  backgroundColor: "#004e92",
 
  
};
const logo_css = {
 fontFamily:"fantasy",
 color:"white",
  letterSpacing: "10px"
  
};
const active_logo_css = {
 fontFamily:"fantasy",
 color:"yellow",
  letterSpacing: "10px"
  
};
const in_css = {
  color: "#DDDDDD",
  
};
const activeCss = {
  color: "pink",
  fontFamily: 'monospace',
  marginLeft:"15px",

};
class Nav extends Component {
  render() {
    return (
     <div style={css}  className="list-group-item">
      <NavLink  to="/" activeStyle={active_logo_css} exact className="" style={logo_css}>Lib Admin</NavLink> <br/>
      <NavLink activeStyle={activeCss} to="/addStudent" className="" style={in_css}>Add Student</NavLink> <br/>
      <NavLink activeStyle={activeCss} to="/studentList" className="" style={in_css}>Student List</NavLink> <br/>
      <NavLink activeStyle={activeCss} to="/addBook" className="" style={in_css}>Add Book</NavLink> <br/>
      <NavLink activeStyle={activeCss} to="/bookList" className="" style={in_css}>Book List</NavLink> <br/>
      <NavLink activeStyle={activeCss} to="/issueBook" className="" style={in_css}>Issue Book</NavLink> <br/>
      <NavLink activeStyle={activeCss} to="/returnBook" className="" style={in_css}>Return Book</NavLink> <br/>
      <NavLink activeStyle={activeCss} to="/issueBookList" className="" style={in_css}>Issue Book List</NavLink> <br/>
      {this.props.admn.isAuthenticated ? (
        <button
          className="badge btn-outline-info"
          onClick={() => this.props.logout(this.props.history)}
        >
          Logout
        </button>
      ) : (
        "maal"
      )}
    
    </div>
    );
  }
}
const mapStateToProps = state => ({
  admn: state.admin
});
export default connect(mapStateToProps,{logout})(withRouter(Nav));
