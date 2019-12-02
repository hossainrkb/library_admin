import React, { Component } from 'react';
import { connect } from "react-redux";
import { s_register } from "../store/actions/studentActions";
const initialState = {
  s_name: "",
  s_email: "",
  s_roll: "",
  s_address: "",
  s_contact: "",
  isSubmitted: true,
  error: {},
  holaboi: "",
  success:""
};

export class add_student extends Component {
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
             JSON.stringify(nextProps.std.hola_success) !==
             JSON.stringify(prevState.hola_success)
           ) {
             return {
               holaboi: nextProps.std.hola_success
             };
           } else if (
             JSON.stringify(nextProps.std.success) !==
             JSON.stringify(prevState.success)
           ) {
             return {
               success: nextProps.std.success
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
           let { s_name, s_email, s_roll, s_address, s_contact } = this.state;
           this.props.s_register(
             { s_name, s_email, s_roll, s_address, s_contact },
             this.props.history
           );
         };
         componentDidUpdate() {
           setTimeout(() => this.setState({ success: "" }), 3000);
           setTimeout(() => this.setState({ holaboi: "" }), 3000);
         }
       
         render() {
           let {
             s_name,
             s_email,
             s_roll,
             s_address,
             s_contact,
             error
           } = this.state;
           return (
             <div className="container">
               <div className="row">
                 <div className="col-md-12 offset-md-1">
                   <h1 className="text-center">Student Registration Form</h1>
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
                     <table className="table ">
                       <tbody>
                         <tr>
                           <td>
                             <label style={{ marginLeft: "80px" }} htmlFor="id">
                               <b>ID no:</b>{" "}
                             </label>
                           </td>
                           <td>
                             <input
                               type="text"
                               className={
                                 error.id
                                   ? "form-control is-invalid"
                                   : "form-control"
                               }
                               name="s_roll"
                               id="id"
                               value={s_roll}
                               onChange={this.takeValueFromInput}
                             />
                             {error.id && (
                               <div className="invalid-feedback">
                                 {error.id}
                               </div>
                             )}
                           </td>
                           <td>
                             <label
                               style={{ marginLeft: "80px" }}
                               htmlFor="name"
                             >
                               <b>Name:</b>{" "}
                             </label>
                           </td>
                           <td>
                             <input
                               type="text"
                               className={
                                 error.name
                                   ? "form-control is-invalid"
                                   : "form-control"
                               }
                               name="s_name"
                               id="name"
                               value={s_name}
                               onChange={this.takeValueFromInput}
                             />{" "}
                             {error.name && (
                               <div className="invalid-feedback">
                                 {error.name}
                               </div>
                             )}
                           </td>
                         </tr>

                         <tr>
                           <td>
                             <label
                               style={{ marginLeft: "80px" }}
                               htmlFor="email"
                             >
                               <b>Email:</b>{" "}
                             </label>
                           </td>
                           <td>
                             <input
                               type="email"
                               className={
                                 error.email
                                   ? "form-control is-invalid"
                                   : "form-control"
                               }
                               name="s_email"
                               id="email"
                               value={s_email}
                               onChange={this.takeValueFromInput}
                             />{" "}
                             {error.email && (
                               <div className="invalid-feedback">
                                 {error.email}
                               </div>
                             )}
                           </td>
                           <td>
                             <label htmlFor="contact">
                               <b>Contact Number:</b>
                             </label>
                           </td>
                           <td>
                             <input
                               type="text"
                               className={
                                 error.contact
                                   ? "form-control is-invalid"
                                   : "form-control"
                               }
                               name="s_contact"
                               id="contact"
                               value={s_contact}
                               onChange={this.takeValueFromInput}
                             />{" "}
                             {error.contact && (
                               <div className="invalid-feedback">
                                 {error.contact}
                               </div>
                             )}
                           </td>
                         </tr>

                         <tr>
                           <td>
                             <label
                               style={{ marginLeft: "80px" }}
                               htmlFor="address"
                             >
                               <b>Address:</b>
                             </label>
                           </td>
                           <td>
                             <textarea
                               className={
                                 error.address
                                   ? "form-control is-invalid"
                                   : "form-control"
                               }
                               name="s_address"
                               id="address"
                               value={s_address}
                               onChange={this.takeValueFromInput}
                             ></textarea>
                             {error.address && (
                               <div className="invalid-feedback">
                                 {error.address}
                               </div>
                             )}
                           </td>
                         </tr>
                         <tr>
                           <td></td>

                           <td>
                             <button className="btn btn-sm btn-outline-info float-right">
                               Registration
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
  std: state.std
});

export default connect(mapStateToProps,{s_register})(add_student);

