import React, { Component } from "react";
import { connect } from "react-redux";
import { admin_login } from "../store/actions/adminAction";
import { Redirect } from "react-router-dom";
const initialState = {
  a_contact: "",
  a_password: "",
  isSubmitted: true,
  error: {},
  holaboi: "",
  success: ""
};

export class ad_login extends Component {
  state = initialState;
  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      JSON.stringify(nextProps.admn.error) !== JSON.stringify(prevState.error)
    ) {
      return {
        error: nextProps.admn.error
      };
    } else if (
      JSON.stringify(nextProps.admn.hola_success) !==
      JSON.stringify(prevState.hola_success)
    ) {
      return {
        holaboi: nextProps.admn.hola_success
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
    let { a_contact, a_password} = this.state;
    this.props.admin_login({ a_contact, a_password }, this.props.history);
  };
  componentDidUpdate() {
    setTimeout(() => this.setState({ holaboi: "" }), 3000);
  }

  render() {
    if (this.props.admn.isAuthenticated) return <Redirect to="/" />;
    let { a_contact, a_password, error } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-2">
            <h1 className="text-center">ADMIN LOGIN</h1>
            {this.state.holaboi && (
              <p className="text-danger text-center">{this.state.holaboi}</p>
            )}

            <form onSubmit={this.holaOnSubmit}>
              <table className="table ">
                <tbody>
                  <tr>
                    <td>
                      <label style={{ marginLeft: "150px" }} htmlFor="id">
                        <b>ADMIN CONTACT:</b>{" "}
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
                        name="a_contact"
                        id="id"
                        value={a_contact}
                        onChange={this.takeValueFromInput}
                      />
                      {error.contact && (
                        <div className="invalid-feedback">{error.contact}</div>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label style={{ marginLeft: "195px" }} htmlFor="name">
                        <b>PASSWORD:</b>{" "}
                      </label>
                    </td>
                    <td>
                      <input
                        type="text"
                        className={
                          error.password
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        name="a_password"
                        id="name"
                        value={a_password}
                        onChange={this.takeValueFromInput}
                      />{" "}
                      {error.password && (
                        <div className="invalid-feedback">{error.password}</div>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td></td>

                    <td>
                      <button className="btn btn-sm btn-outline-info float-right">
                        ADMIN LOGIN
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
  admn: state.admin
});

export default connect(
  mapStateToProps,
  { admin_login }
)(ad_login);
