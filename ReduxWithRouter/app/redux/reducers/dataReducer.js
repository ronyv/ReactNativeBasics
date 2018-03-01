import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../constants';
import { ActionConst } from 'react-native-router-flux';

const DEFAULT_STATE  = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false,
  scene: {dummyData:"Welocme to redux!!!"}
}

export default function dataReducer (state = DEFAULT_STATE , action) {
  switch (action.type) {
    case ActionConst.FOCUS:
      return {
        ...state,
        scene,
      }
    case FETCHING_DATA:
      return {
        ...state,
        data: [],
        isFetching: true
      }
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data
      }
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}
