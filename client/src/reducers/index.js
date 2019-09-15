import { 
    REQUEST_SUCCESS,
    REQUEST_FAILED,
    START_LOADER,
    STOP_LOADER
} from '../actions';

const initialState = {
  error: true,
  success: null,
  urlDetails: {},
  redirectUrl: null,
  loader : false
};

export default function userReducers(state = initialState, action) {
  switch (action.type) {
    case REQUEST_SUCCESS:
      return {
        ...state,
        success: true,
        error: false,
        urlDetails: action.payload,
        redirectUrl: action.payload
      };
    case REQUEST_FAILED:
      return {
          ...state,
          success: false,
          error: true
      };
    case START_LOADER:
      return {
        ...state,
        loader: true
      };

    case STOP_LOADER:
      return {
        ...state,
        loader: false
      }
    // case GET_LONG_URL:
    //   return {
    //     ...state,
    //     time: action.payload
    //   }
    // case SET_PROJECT: {
    //   return {
    //     ...state,
    //     project: action.payload
    //   }
    // }
    default:
      return state;
  }
}