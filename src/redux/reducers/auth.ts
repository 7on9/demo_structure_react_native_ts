import { AuthProps } from '../../@types/reducer'

import {
  LOGIN_REQUEST,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOG_OUT,
  RESET_ERROR,
  VERIFY,
} from '../actions/types'

const initialState = {
  isAuthenticated: false,
  isFetching: false,
  token: null,
  user: null,
  errorMessage: null,
  isValidToken: false,
  isNetworkConnected: true,
}

export default (state = initialState, action: AuthProps) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isAuthenticated: false,
        isFetching: true,
        isValidToken: false,
        errorMessage: null,
      })
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        token: action.token,
        user: action.user,
        isValidToken: true,
        errorMessage: null,
      })
    case VERIFY:
      return Object.assign({}, state, {
        isAuthenticated: action.token ? true : false,
        token: action.token,
        user: action.user,
        isValidToken: action.token ? true : false,
        errorMessage: action.token ? false : 'Lỗi xác thực.',
      })
    case LOGIN_FAILED:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.error.error.message,
      })
    case RESET_ERROR:
      return Object.assign({}, state, {
        errorMessage: null,
      })
    case LOG_OUT:
      return Object.assign({}, state, {
        isAuthenticated: false,
        isFetching: false,
        token: null,
        user: null,
        errorMessage: null,
      })
    default:
      return state
  }
}
