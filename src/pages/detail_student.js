import React, { Component } from 'react';
import { getStudentByID } from "../store/actions/studentActions";
import { getIssueBookBySid } from "../store/actions/bookActions";
import { connect } from "react-redux";
import ReactTable from "react-table";
import moment from "moment";
export class detail_student extends Component {
         state = {
           get_student: {}
         };

         componentDidUpdate() {
           setTimeout(() => this.setState({ get_student: this.props.std }), 20);
         }
         componentDidMount() {
           this.props.getStudentByID(this.props.match.params.sid);
           this.props.getIssueBookBySid(this.props.match.params.sid);
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
                Header: "BOOK CODE",
                id: "i_book_id",
                accessor: d => d.b_code,
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
           let { get_student } = this.state;
           return (
             <div className="container offset-md-1">
               <div className="row ">
                 <div className="col-md-12  text-center">
                   <h1>STUDENT DETAILS</h1>
                 </div>
               </div>
               <div className="row ">
                 <div className="col-md-6">
                   <table className="table table-striped table-hover table-condensed table-bordered">
                     <tbody>
                       <tr>
                         <td>
                           <b>NAME</b>
                         </td>
                         <td>
                           <b>{get_student.s_name}</b>
                         </td>
                       </tr>
                       <tr>
                         <td>
                           <b>ID NO</b>
                         </td>
                         <td>
                           <b>{get_student.s_roll}</b>
                         </td>
                       </tr>
                       <tr>
                         <td>
                           <b>CONTACT NO</b>
                         </td>
                         <td>
                           <b>{get_student.s_contact}</b>
                         </td>
                       </tr>
                       <tr>
                         <td>
                           <b>E-MAIL</b>
                         </td>
                         <td>
                           <b>{get_student.s_email}</b>
                         </td>
                       </tr>
                     </tbody>
                   </table>
                 </div>
                 <div className="col-md-6">
                   <table className="table table-striped table-hover table-condensed table-bordered">
                     <tbody>
                       <tr>
                         <td>
                           <b>SESSION</b>
                         </td>
                         <td>
                           <b>{get_student.sess_name}</b>
                         </td>
                       </tr>
                       <tr>
                         <td>
                           <b>YEAR</b>
                         </td>
                         <td>
                           <b>{get_student.y_year}</b>
                         </td>
                       </tr>
                       <tr>
                         <td>
                           <b>ADDRESS</b>
                         </td>
                         <td>
                           <b>{get_student.s_address}</b>
                         </td>
                       </tr>
                     </tbody>
                   </table>
                 </div>
               </div>
               <div className="row mt-2">
                 <div className="col-md-12">
                   <div className="text-center">ISSUE BOOK LIST</div>
                   <ReactTable
                     columns={columns}
                     data={this.props.bk}
                     defaultPageSize={3}
                     noDataText={"No data found"}
                   />
                 </div>
               </div>
             </div>
           );
         }
       }
const mapStateToProps = state => ({
  std: state.std.student,
  bk: state.bk.book
});
export default connect(mapStateToProps, {getStudentByID,getIssueBookBySid}) (detail_student);
