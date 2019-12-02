import moment from "moment";
import React, { Component } from "react";
import { connect } from "react-redux";
import { i_book } from "../store/actions/bookActions";
const initialState = {
  b_code: "",
  s_roll: "",
  i_r_date:moment().add(5,"days").format("YYYY-MM-DD"),
  i_date:moment().format("YYYY-MM-DD"),
  isSubmitted: true,
  error: {},
  holaboi: "",
  success: ""
};

export class issue_book extends Component {
         state = initialState;
         static getDerivedStateFromProps(nextProps, prevState) {
          
           if (
             JSON.stringify(nextProps.bk.error) !==
             JSON.stringify(prevState.error)
           ) {
             return {
               error: nextProps.bk.error
             };
           } else if (
             JSON.stringify(nextProps.bk.hola_success) !==
             JSON.stringify(prevState.hola_success)
           ) {
             return {
               holaboi: nextProps.bk.hola_success
             };
           } else if (
             JSON.stringify(nextProps.bk.success) !==
             JSON.stringify(prevState.success)
           ) {
             return {
               success: nextProps.bk.success
             };
           }

           return null;
         }
         takeValueFromInput = e => {
           this.setState({
             [e.target.name]: e.target.value
           });
         };

         holaOnSubmit = e => {
           e.preventDefault();
           let { b_code, s_roll, i_date, i_r_date } = this.state;
           this.props.i_book(
             { b_code, s_roll, i_date, i_r_date },
             this.props.history
           );
         };
         componentDidUpdate() {
           setTimeout(() => this.setState({ success: "" }), 3000);
           setTimeout(() => this.setState({ holaboi: "" }), 3000);
         }

         render() {
           let { b_code, s_roll,i_date,i_r_date, error } = this.state;
           return (
             <div className="container">
               <div className="row">
                 <div className="col-md-12 offset-md-1">
                   <h1 className="text-center">BOOK ISSUE FORM</h1>
                   {this.state.holaboi && (
                     <p className="text-danger text-center">
                       {this.state.holaboi}
                     </p>
                   )}
                   {this.state.success && (
                     <p className="text-success text-center" id="bro">
                       {this.state.success}
                     </p>
                   )}
                   <form onSubmit={this.holaOnSubmit}>
                     <input
                       type="hidden"
                       name="i_date"
                       value={i_date}
                       onChange={this.takeValueFromInput}
                     />
                     <input
                       type="hidden"
                       name="i_r_date"
                       value={i_r_date}
                       onChange={this.takeValueFromInput}
                     />
                     <table className="table ">
                       <tbody>
                         <tr>
                           <td>
                             <label
                               style={{ marginLeft: "50px" }}
                               htmlFor="code"
                             >
                               <b>BOOK CODE:</b>{" "}
                             </label>
                           </td>
                           <td>
                             <input
                               type="text"
                               className={
                                 error.code
                                   ? "form-control is-invalid"
                                   : "form-control"
                               }
                               name="b_code"
                               id="code"
                               value={b_code}
                               onChange={this.takeValueFromInput}
                             />
                             {error.code && (
                               <div className="invalid-feedback">
                                 {error.code}
                               </div>
                             )}
                           </td>
                           <td>
                             <label style={{ marginLeft: "50px" }} htmlFor="id">
                               <b>STUDENT ID:</b>{" "}
                             </label>
                           </td>
                           <td>
                             <input
                               type="text"
                               className={
                                 error.roll
                                   ? "form-control is-invalid"
                                   : "form-control"
                               }
                               name="s_roll"
                               id="id"
                               value={s_roll}
                               onChange={this.takeValueFromInput}
                             />{" "}
                             {error.roll && (
                               <div className="invalid-feedback">
                                 {error.roll}
                               </div>
                             )}
                           </td>
                         </tr>

                         <tr>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td>
                             <button className="btn btn-sm btn-outline-info float-right">
                               ISSUE BOOK
                             </button>
                           </td>
                         </tr>
                       </tbody>
                     </table>
                   </form>
                 </div>
               </div>
             </div>
           );
         }
       }

const mapStateToProps = state => ({
  bk: state.bk
});

export default connect(
  mapStateToProps,
  { i_book }
)(issue_book);

