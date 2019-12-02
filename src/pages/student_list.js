import React, { Component } from 'react';
import {student_list} from '../store/actions/studentActions'
import {connect} from 'react-redux'
import ReactTable from "react-table";
import "react-table/react-table.css";
export class Student_list extends Component {
         state = {
         };
         componentDidMount() {
           this.props.student_list();
         }
         render() {
           const columns = [
             {
               Header: "STUDENT ID",
               accessor: "s_roll",
               filterable: true,
               style: {
                 textAlign: "center"
               }
             },
             {
               Header: " NAME",
               accessor: "s_name",
               style: {
                 textAlign: "center"
               }
             },
             {
               Header: " CONTACT",
               accessor: "s_contact",
               style: {
                 textAlign: "center"
               }
             },
             {
               Header: "EMAIL",
               accessor: "s_email",
               style: {
                 textAlign: "center"
               }
             },
             {
               Header: " ACTIONS",
               style: {
                 textAlign: "center"
               },
               Cell: props => {
                 return (
                   <button className="btn btn-xs btn-danger">Delete</button>
                 );
               }
             }
           ];

           return (
             <div className="container">
               <div className="row">
                 <div className="col-md-12 offset-md-1">
                   <div className="text-center">STUDENT LIST</div>
                   <ReactTable
                     columns={columns}
                     data={this.props.std}
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
  std: state.each_list
});

export default connect(mapStateToProps,{student_list})(Student_list);
