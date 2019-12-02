import React, { Component } from "react";
import { connect } from "react-redux";
import { b_register } from "../store/actions/bookActions";
const initialState = {
  b_code: "",
  b_name: "",
  b_qty: "",
  b_price: "",
  b_self: "",
  isSubmitted: true,
  error: {},
  holaboi: "",
  success: ""
};

export class Add_book extends Component {
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
           let { b_code, b_name, b_qty, b_self, b_price } = this.state;
           this.props.b_register(
             { b_code, b_name, b_qty, b_self, b_price },
             this.props.history
           );
         };
         componentDidUpdate() {
           setTimeout(() => this.setState({ success: "" }), 3000);
           setTimeout(() => this.setState({ holaboi: "" }), 3000);
         }

         render() {
           let {
             b_name,
             b_code,
            b_qty, b_self, b_price ,
             error
           } = this.state;
        
           return (
             <div className="container">
               <div className="row">
                 <div className="col-md-12 offset-md-1">
                   <h1 className="text-center">Book Add Form</h1>
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
                             <label style={{ marginLeft: "110px" }} htmlFor="code">
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
                             <label
                               style={{ marginLeft: "110px" }}
                               htmlFor="name"
                             >
                               <b>NAME:</b>{" "}
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
                               name="b_name"
                               id="name"
                               value={b_name}
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
                               style={{ marginLeft: "110px" }}
                               htmlFor="qty"
                             >
                               <b>QUANTITY:</b>{" "}
                             </label>
                           </td>
                           <td>
                             <input
                               type="number"
                               className={
                                 error.qty
                                   ? "form-control is-invalid"
                                   : "form-control"
                               }
                               name="b_qty"
                               id="qty"
                               value={b_qty}
                               onChange={this.takeValueFromInput}
                             />{" "}
                             {error.qty && (
                               <div className="invalid-feedback">
                                 {error.qty}
                               </div>
                             )}
                           </td>
                           <td>
                             <label
                               style={{ marginLeft: "110px" }}
                               htmlFor="self"
                             >
                               <b>SELF NO:</b>
                             </label>
                           </td>
                           <td>
                             <input
                               type="number"
                               className={
                                 error.self
                                   ? "form-control is-invalid"
                                   : "form-control"
                               }
                               name="b_self"
                               id="self"
                               value={b_self}
                               onChange={this.takeValueFromInput}
                             />{" "}
                             {error.self && (
                               <div className="invalid-feedback">
                                 {error.self}
                               </div>
                             )}
                           </td>
                         </tr>

                         <tr>
                           <td>
                             <label
                               style={{ marginLeft: "110px" }}
                               htmlFor="price"
                             >
                               <b>PRICE:</b>
                             </label>
                           </td>
                           <td>
                             <input
                               type="number"
                               className={
                                 error.price
                                   ? "form-control is-invalid"
                                   : "form-control"
                               }
                               name="b_price"
                               id="price"
                               value={b_price}
                               onChange={this.takeValueFromInput}
                             />{" "}
                             {error.price && (
                               <div className="invalid-feedback">
                                 {error.price}
                               </div>
                             )}
                           </td>
                         </tr>
                         <tr>
                           <td></td>

                           <td>
                             <button className="btn btn-sm btn-outline-info float-right">
                               BOOK ADD
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
  { b_register }
)(Add_book);
