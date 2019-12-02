import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from '../pages/nav'
import Add_book from '../pages/add_book'
import Add_student from '../pages/add_student'
import Book_list from '../pages/book_list'
import Student_list from '../pages/student_list'
import Issue_book from '../pages/issue_book'
import Return_book from '../pages/return_book'
import Issue_book_list from '../pages/issue_book_list'
import DetailsStudent from "../pages/detail_student";
import Home from "../pages/home";
import Admin_login from "../pages/admin_login";
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="row bg-info " style={{ marginRight: "1px" }}>
          <div
            className="col-md-12 text-center text-white"
            style={{
              fontFamily: "cursive",
              fontSize: "50px",
              letterSpacing: "20px",
              lineHeight: "50px",
              fontWeight: "bold"
            }}
          >
            LIBRARY ADMIN
          </div>
        </div>
        <Route path="/adminLogin" exact component={Admin_login} />
        {this.props.admn.isAuthenticated ? <Nav /> : ""}

        <div className="container">
          <div className="row">
            <div className="col-md-10">
              {this.props.admn.isAuthenticated ? (
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/addBook" exact component={Add_book} />
                  <Route path="/addStudent" exact component={Add_student} />
                  <Route path="/bookList" exact component={Book_list} />
                  <Route path="/studentList" exact component={Student_list} />
                  <Route path="/issueBook" exact component={Issue_book} />
                  <Route path="/returnBook" exact component={Return_book} />
                  <Route
                    path="/issueBookList"
                    exact
                    component={Issue_book_list}
                  />
                  <Route path="/std/:sid" exact component={DetailsStudent} />
                </Switch>
              ) : (
                <Redirect to="/adminlogin" />
              )}
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps =(state) =>({
  admn : state.admin
})

export default connect(mapStateToProps, null)(App)
