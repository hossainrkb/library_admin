import React, { Component } from "react";
import { issue_book_list } from "../store/actions/bookActions";
import { getStudentByID } from "../store/actions/studentActions";
import { connect } from "react-redux";
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from 'axios';
import { NavLink } from "react-router-dom";
import Axios from "axios";
import moment from 'moment'

export class Issue_book_list extends Component {
         state = {
           std: [],
           s_student:[],
           posts:[]
         };
    
         componentDidMount() {
        
          this.props.issue_book_list()
         
   
  
         }
         render() {
          
          
            const columns = [
              {
                Header: "SL",
                Cell: row => {
                  return <div>{row.index + 1}</div>;
                },
                style: {
                  textAlign: "center"
                }
              },
              {
                Header: "STUDENT ID",
                id: "i_student_id",
                accessor: d => {
                  return <NavLink to={`/std/${d.s_id}`}>{d.s_roll}</NavLink>;
                },
                filterable: true,
                style: {
                  textAlign: "center"
                }
              },
              {
                Header: "BOOK CODE",
                id: "i_book_id",
                accessor: d => {
                  return (
                    <NavLink to={`/bookList/${d.b_id}`}>{d.b_code}</NavLink>
                  );
                },
                filterable: true,
                style: {
                  textAlign: "center"
                }
              },

              {
                Header: " ISSUE DATE",
                id: "iss_date",
                accessor: d => moment(d.i_date).format("YYYY-MM-DD"),
                style: {
                  textAlign: "center"
                }
              },

              {
                Header: "RETURN DATE",
                id: "i_r_date",
                accessor: d => moment(d.i_r_date).format("YYYY-MM-DD"),
                style: {
                  textAlign: "center"
                }
              },

              {
                Header: " Fine",
                id: "fine",
                accessor: d => {
                  var current = moment().format("YYYY-MM-DD");
                  var return_date = moment(d.i_r_date);
                  var duration = moment.duration(return_date.diff(current));
                  var days = duration.asDays();
                  var fine_count = 1;
                  var t_fine = 0;
                  if (days < 0) {
                    t_fine = Math.abs(days) * fine_count;
                  }
                  return t_fine;
                },
                style: {
                  textAlign: "center"
                }
              }
            ];

           return (
             <div className="container">
               <div className="row mt-2">
                 <div className="col-md-12 offset-md-1">
                   <div className="text-center">ISSUE BOOK LIST</div>
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
  book: state.each_list,
  std: state.std.d
});

export default connect(
  mapStateToProps,
  { issue_book_list, getStudentByID }
)(Issue_book_list);
