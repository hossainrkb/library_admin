import moment from "moment";
import React, { Component } from "react";
import { connect } from "react-redux";
import { r_book, pay } from "../store/actions/bookActions";
import Modal from "react-modal";
const initialState = {

};


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

export class return_book extends Component {
         // state = initialState;
         constructor() {
           super();

           this.state = {
             modalIsOpen: false,
             b_code: "",
             s_roll: "",
             u_i_r_date: moment().format("YYYY-MM-DD"),
             p_i_r_date: moment().format("YYYY-MM-DD"),
             isSubmitted: true,
             isHola: true,
             error: {},
             holaboi: "",
             success: "",
             book_fine_message: "",
             book_fine: "",
             ck_key: "",
             paid_message: "",
             paid_error: {},
             i_paid: "",
            
            
             equal_paid: ""
           };

           this.openModal = this.openModal.bind(this);
           this.afterOpenModal = this.afterOpenModal.bind(this);
           this.closeModal = this.closeModal.bind(this);
         }

         openModal() {
           this.setState({ modalIsOpen: true });
         }

         afterOpenModal() {
           // references are now sync'd and can be accessed.
           this.subtitle.style.color = "#f00";
         }

         closeModal() {
           this.setState({ modalIsOpen: false });
         }
         takeValueFromInput = e => {
           this.setState({
             [e.target.name]: e.target.value
           });
         };
         takeValueFromInputPaid = e => {
           this.setState({
             [e.target.name]: e.target.value
           });
         };

         holaOnSubmit = e => {
           e.preventDefault();
           let { b_code, s_roll, u_i_r_date } = this.state;
           this.props.r_book(
             { b_code, s_roll, u_i_r_date },
             this.props.history
           );
         };
         paidSubmit = e => {
           e.preventDefault();
           let { i_paid, book_fine, p_i_r_date, ck_key } = this.state;
           this.props.pay({ i_paid, p_i_r_date,book_fine ,ck_key}, this.props.history);
         };
         componentDidUpdate() {
           setTimeout(
             () => this.setState({ success: this.props.book_success }),
             20
           );
           setTimeout(() => this.setState({ holaboi: this.props.book }), 20);
           setTimeout(() => this.setState({ error: this.props.book_er }), 20);
           setTimeout(
             () =>
               this.setState({
                 book_fine_message: this.props.book_fine_message
               }),
             20
           );
           setTimeout(
             () => this.setState({ book_fine: this.props.book_fine }),
             20
           );
           setTimeout(() => this.setState({ ck_key: this.props.ck_key }), 20);
           setTimeout(
             () => this.setState({ paid_message: this.props.paid_message }),
             20
           );
           setTimeout(
             () => this.setState({ paid_error: this.props.paid_error }),
             20
           );
           setTimeout(
             () => this.setState({ equal_paid: this.props.equal_paid }),
             20
           );
         }

         render() {
           let {
             b_code,
             s_roll,
             u_i_r_date,
             error,
             i_paid,
             paid_error,
             p_i_r_date,
             ck_key,
             book_fine
           } = this.state;
           return (
             <div className="container">
               <div className="row">
                 <div className="col-md-12 offset-md-1">
                   <h1 className="text-center">BOOK RETURN FORM</h1>
                   {this.state.book_fine_message && (
                     <p className="text-danger text-center">
                       {this.state.book_fine_message} &nbsp;
                       <button
                         className="btn btn-sm btn-outline-danger"
                         onClick={this.openModal}
                       >
                         Pay
                       </button>
                     </p>
                   )}

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
                       name="u_i_r_date"
                       value={u_i_r_date}
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
                               RETURN BOOK
                             </button>
                           </td>
                         </tr>
                       </tbody>
                     </table>
                   </form>
                   <Modal
                     isOpen={this.state.modalIsOpen}
                     onAfterOpen={this.afterOpenModal}
                     onRequestClose={this.closeModal}
                     style={customStyles}
                     contentLabel="Example Modal"
                   >
                     <h2 ref={subtitle => (this.subtitle = subtitle)}>
                       Pay Fine: {book_fine} Tk.
                     </h2>
                     {this.state.equal_paid && (
                       <p className="text-danger text-center">
                         {this.state.equal_paid}
                       </p>
                     )}
                     {this.state.paid_message && (
                       <p className="text-success text-center">
                         {this.state.paid_message}
                       </p>
                     )}
                     <form onSubmit={this.paidSubmit}>
                       <input
                         type="hidden"
                         name="ck_key"
                         value={ck_key}
                         onChange={this.takeValueFromInputPaid}
                       />
                       <input
                         type="hidden"
                         name="p_i_r_date"
                         id="payment"
                         value={p_i_r_date}
                         onChange={this.takeValueFromInputPaid}
                       />
                       <input
                         type="hidden"
                         name="book_fine"
                         value={book_fine}
                         onChange={this.takeValueFromInputPaid}
                       />
                       <label htmlFor="payment">
                         <b>Payment:</b>{" "}
                       </label>
                       <input
                         type="number"
                         className={
                           paid_error.payment
                             ? "form-control is-invalid"
                             : "form-control"
                         }
                         name="i_paid"
                         id="payment"
                         value={i_paid}
                         onChange={this.takeValueFromInputPaid}
                       />
                       {paid_error.payment && (
                         <div className="invalid-feedback">
                           {paid_error.payment}
                         </div>
                       )}
                       <br></br>
                       <button className="btn btn-sm btn-outline-danger float-right">
                         PAID
                       </button>
                     </form>
                   </Modal>
                 </div>
               </div>
             </div>
           );
         }
       }

const mapStateToProps = state => ({
  book: state.bk.re_hola_success,
  book_er: state.bk.re_error,
  book_success: state.bk.re_success,
  book_fine_message: state.bk.fine_message,
  book_fine: state.bk.fine,
  ck_key: state.bk.ck_key,
  paid_error: state.bk.paid_error,
  paid_message: state.bk.paid_message,
  equal_paid: state.bk.equal_paid
});

export default connect(
  mapStateToProps,
  { r_book,pay }
)(return_book);
