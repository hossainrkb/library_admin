import React, { Component } from 'react';
import { SearchStd } from "../store/actions/studentActions";
import { connect } from "react-redux";
import { NavLink,withRouter } from "react-router-dom";
const initialState = {
  search:"",
  error: {},
  holaboi: "",
  success: "",
  searched_std:"",
  ishola:0
};
export class home extends Component {
         state = initialState;
         static getDerivedStateFromProps(nextProps, prevState) {
           if (
             JSON.stringify(nextProps.std.error) !==
             JSON.stringify(prevState.error)
           ) {
             return {
               error: nextProps.std.error
             };
           } else if (
             JSON.stringify(nextProps.std.search_std) !==
             JSON.stringify(prevState.search_std)
           ) {
             return {
               searched_std: nextProps.std.search_std
             };
           } 

           return null;
         }
         componentDidUpdate() {
           setTimeout(() => this.setState({ error: {} }), 0);
           setTimeout(() => this.setState({ searched_std: "" }), 20);
           setTimeout(() => this.setState({ holaboi: this.props.std_hola }), 0);
         }
         takeValueFromInput = e => {
           this.setState({
             [e.target.name]: e.target.value
           });
           if ([e.target.name] !== null) {
             this.setState({ ishola: true });
           }
         };

         holaOnSubmit = e => {
           e.preventDefault();
           let { search } = this.state;
           this.props.SearchStd({ search }, this.props.history);
         };
         render() {
           let { search, error, searched_std, ishola } = this.state;

           return (
             <div className="container">
               <div className="row ml-4 mt-4 ">
                 <div className="col-md-12 offset-md-1">
                   <div
                     className="card"
                     style={{ backgroundColor: "rgba(50, 115, 200, 0.1)" }}
                   >
                     <div className="card-header text-center text-white bg-info">
                       <h2>SEARCH STUDENT</h2>
                     </div>
                     <div className="card-body">
                       {this.state.holaboi && (
                         <p className="text-danger text-center ml-3">
                           {this.state.holaboi}
                         </p>
                       )}
                       <div className="row">
                         <div className="col-md-4 text-right mt-2">
                           <b>STUDENT ID / CONTACT NO </b>
                         </div>

                         <div className="col-md-8">
                           <form onSubmit={this.holaOnSubmit}>
                             <div className="input-group">
                               <div className="input-group-prepend">
                                 <span className="input-group-text" id="">
                                   <i className="fas fa-search"></i>
                                 </span>
                               </div>
                               <input
                                 type="text"
                                 className={
                                   error.search_student
                                     ? "form-control is-invalid"
                                     : "form-control"
                                 }
                                 name="search"
                                 value={search}
                                 onChange={this.takeValueFromInput}
                               />

                               <button className="btn btn-sm btn-outline-info float-right">
                                 Registration
                               </button>
                               {error.search_student && (
                                 <div className="invalid-feedback ml-5">
                                   {error.search_student}
                                 </div>
                               )}
                             </div>
                           </form>
                         </div>
                       </div>

                       {this.state.searched_std.s_roll && (
                         <div className="row mt-3">
                           <div className="col-md-12">
                             <table className="table table-bordered table-hover table-condensed table-striped">
                               <tbody>
                                 <tr>
                                   <td>STUDENT ID</td>
                                   <td>NAME</td>
                                   <td>CONTACT</td>
                                   <td>ACTION</td>
                                 </tr>
                                 <tr>
                                   <td>{searched_std.s_roll}</td>
                                   <td>{searched_std.s_name}</td>
                                   <td>{searched_std.s_contact}</td>
                                   <td><NavLink to={`/std/${searched_std.s_id}`}>Details</NavLink></td>
                                 </tr>
                                 
                               </tbody>
                             </table>
                           </div>
                         </div>
                       )}
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           );
         }
       }
const mapStateToProps = state => ({
  std: state.std,
  std_hola: state.std.no_std,
  
});

export default connect(mapStateToProps,{SearchStd})(home);
