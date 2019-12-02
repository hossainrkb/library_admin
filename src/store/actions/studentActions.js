import * as Types from "./types";
import Axios from "axios";


export const s_register = (student, history) => dispatch => {

  Axios.post("/student/create", student)
    .then(res => {
      dispatch({
        type: Types.STUDENT_ERROR,
        payload: {
          error: {},
          hola_success: res.data.message,
          success: res.data.success_message
        }
      });

      history.push("/addStudent");
      console.log(res.data.success_message);
    })
    .catch(error => {
      dispatch({
        type: Types.STUDENT_ERROR,
        payload: {
          error: error.response.data,
          hola_success: "",
          success: ""
        }
      });
    });
};

export const student_list = ()=>dispatch =>{
  Axios.get("/student/")
  .then((res) =>{
    dispatch({
      type:Types.STUDENT_LIST,
      payload:{
        student_list:res.data,
        
      }
    })
  })
  .catch((error) =>{
    dispatch({
      type:Types.STUDENT_ERROR,
      payload:{
        error:error
      }
    })
  })
}

export const getStudentByID = id => dispatch => {
  Axios.get(`/student/${id}`)
    .then(response => {
      dispatch({ type: Types.GET_STD_BY_ID, payload: { student: response.data } });
    })
    .catch(error => {
      console.log(error);
    });
};
export const SearchStd = (std,history) => dispatch => {
  console.log(std)
   Axios.post("/student/std/search", std)
     .then(response => {
       dispatch({
         type: Types.SEARCH_STD,
         payload: { search_student: response.data, error: {}, no_std:response.data.message }
       });
        history.push("/");
     })
    
     .catch(error => {
       dispatch({
         type: Types.STUDENT_ERROR,
         payload: {
           error: error.response.data
         }
       });
     });
};
