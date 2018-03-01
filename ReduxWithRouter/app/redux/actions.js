import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from './constants'
import getPeople from './api'


export function getData() {
  return {
    type: FETCHING_DATA
  }
}

export function getDataSuccess(data) {
  return {
    type: FETCHING_DATA_SUCCESS,
    data,
  }
}

export function getDataFailure() {
  return {
    type: FETCHING_DATA_FAILURE
  }
}

export function fetchData(passData) {
  console.log("Inside fetchData(DATA)","Received : "+passData);
  return (dispatch) => {
    dispatch(getData())
      setTimeout(() => {
        getPeople()
          .then((data) => {
            dispatch(getDataSuccess(data))
          })
          .catch((err) => console.log('err:', err))
      },5000);
  }
}

export function fetchData_0() {
  console.log("Inside fetchData(--)","STARTS : ");
  return (dispatch) => {
    dispatch(getData())
      setTimeout(() => {
        getPeople()
          .then((data) => {
            dispatch(getDataSuccess(data))
          })
          .catch((err) => console.log('err:', err))
      },3000);
  }
}
