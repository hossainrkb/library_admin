import React, { Component } from "react";
import { book_list } from "../store/actions/bookActions";
import { connect } from "react-redux";
import ReactTable from "react-table";
import "react-table/react-table.css";
export class Book_list extends Component {
  state = {};
  componentDidMount() {
    this.props.book_list();
  }
  render() {
    const columns = [
      {
        Header: "SL",
           Cell: (row) => {
      return <div>{row.index+1}</div>;
    },
        style: {
          textAlign: "center"
        }
      },
      {
        Header: "BOOK CODE",
        accessor: "b_code",
        filterable: true,
        style: {
          textAlign: "center"
        }
      },
      {
        Header: " NAME",
        accessor: "b_name",
        style: {
          textAlign: "center"
        }
      },
      {
        Header: " PUBLISHER",
        accessor: "b_publishar",
        style: {
          textAlign: "center"
        }
      },
      
      {
        Header: "QUANTITY",
        accessor: "b_qty",
        style: {
          textAlign: "center"
        }
      },
      {
        Header:"BOOK SELF",
        accessor:"b_self",
        style:{
          textAlign:"center"
        }
      },
      {
        Header:"PRICE",
        accessor:"b_price",
        style:{
          textAlign:"center"
        }
      },
      {
        Header: " ACTIONS",
        style: {
          textAlign: "center"
        },
        Cell: props => {
          return <button className="btn btn-sm btn-outline-danger">Delete</button>;
        }
      }
    ];

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 offset-md-1">
            <div className="text-center">BOOK LIST</div>
            <ReactTable
              columns={columns}
              data={this.props.book}
              defaultPageSize={5}
              noDataText={"No data found"}
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  book: state.each_list
});

export default connect(
  mapStateToProps,
  { book_list }
)(Book_list);
