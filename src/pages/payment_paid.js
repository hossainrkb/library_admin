import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import { payment_paid } from "../../store/actions/transactionActions";
const initialState = {
  amount: 0,
  type: "",
  note: ""
};
const customStyles = {
  content: {
    top: "40%",
    left: "80%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "300px"
  }
};
class CreateTrans extends Component {
  constructor() {
    super();
    this.myForm = React.createRef();
  }
  state = initialState;

  takeValueFromInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  holaOnSubmit = e => {
    e.preventDefault();
    let { amount, type, note } = this.state;

    this.props.create({ amount, type, note });
  };

  render() {
    let { amount, type, note } = this.state;
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.close}
        style={customStyles}
        ariaHideApp={false}
      >
        <h3>Create New Transaction</h3>
        <form ref={this.myForm} onSubmit={this.holaOnSubmit}>
          <div className="form-group">
            <label htmlFor="amount">Enter Your Amount</label>
            <input
              type="text"
              className="form-control"
              name="amount"
              id="amount"
              value={amount}
              onChange={this.takeValueFromInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="type">Select Type</label>
            <select
              className="form-control"
              name="type"
              id="type"
              onChange={this.takeValueFromInput}
            >
              <option value="">Select Type</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="note">Note</label>
            <textarea
              className="form-control"
              name="note"
              id="note"
              value={note}
              onChange={this.takeValueFromInput}
            ></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-sm btn-outline-info">
              ADD TRANSACTION
            </button>
          </div>
        </form>
      </Modal>
    );
  }
}
//connect korsi props er sathe asha error ke with error object
//const mapStateToProps = state => ({
//auth: state.auth
//});

export default connect(
  null,
  { create }
)(CreateTrans);
