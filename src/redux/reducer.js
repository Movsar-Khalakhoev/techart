import {applyMiddleware, createStore} from 'redux'
import ReduxThunk from 'redux-thunk'
import {
  GET_RESULT_FETCH_ERROR,
  GET_RESULT_FETCH_START,
  GET_RESULT_FETCH_SUCCESS, RESET_CALCULATOR,
  SET_BUILDING,
  SET_HEIGHT,
  SET_MATERIAL,
  SET_SIZEX,
  SET_SIZEY
} from './actionTypes'

const initialState = {
  props: {
    building: null,
    height: null,
    material: null,
    sizex: null,
    sizey: null
  },
  result: null,
  loading: false,
  propsIsOk: true
}

function calculatorReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BUILDING:
      return {
        ...state,
        props: {
          ...state.props,
          building: action.building
        }
      }
    case SET_HEIGHT:
      return {
        ...state,
        props: {
          ...state.props,
          height: action.height
        }
      }
    case SET_MATERIAL:
      return {
        ...state,
        props: {
          ...state.props,
          material: action.material
        }
      }
    case SET_SIZEX:
      return {
        ...state,
        props: {
          ...state.props,
          sizex: action.sizex
        }
      }
    case SET_SIZEY:
      return {
        ...state,
        props: {
          ...state.props,
          sizey: action.sizey
        }
      }

    case GET_RESULT_FETCH_START:
      return {
        ...state,
        loading: true
      }
    case GET_RESULT_FETCH_SUCCESS:
      return {
        ...state,
        result: action.result,
        loading: false,
        propsIsOk: true
      }
    case GET_RESULT_FETCH_ERROR:
      return {
        ...state,
        result: action.error,
        loading: false,
        propsIsOk: false
      }

    case RESET_CALCULATOR:
      return {
        ...state,
        props: {
          building: null,
          height: null,
          material: null,
          sizex: null,
          sizey: null
        },
        result: null,
        propsIsOk: true
      }
    default:
      return state
  }
}

const state = createStore(calculatorReducer, applyMiddleware(ReduxThunk))

export default state
