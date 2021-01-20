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

export function setBuilding(building) {
  return {
    type: SET_BUILDING,
    building
  }
}

export function setHeight(height) {
  return {
    type: SET_HEIGHT,
    height
  }
}

export function setMaterial(material) {
  return {
    type: SET_MATERIAL,
    material
  }
}

export function setSizex(sizex) {
  return {
    type: SET_SIZEX,
    sizex
  }
}

export function setSizey(sizey) {
  return {
    type: SET_SIZEY,
    sizey
  }
}


export function getResult(props) {
  return async dispatch => {
    dispatch(getResultFetchStart())
    try {
      let link = `https://data.techart.ru/lab/json/?`
      Object.keys(props).forEach(prop => link += `${prop}=${props[prop]}&`)

      fetch(link, {method: 'get'})
        .then(res => res.json())
        .then(res => {
          if (res.result === 'error') {
            return dispatch(getResultFetchError(res.message))
          }
          dispatch(getResultFetchSuccess(res.message))
        })
        .catch(() => dispatch(getResultFetchError('Что-то пошло не так...')))
    } catch (e) {}
  }
}

function getResultFetchStart() {
  return {
    type: GET_RESULT_FETCH_START
  }
}

function getResultFetchSuccess(result) {
  return {
    type: GET_RESULT_FETCH_SUCCESS,
    result
  }
}

function getResultFetchError(error) {
  return {
    type: GET_RESULT_FETCH_ERROR,
    error
  }
}


export function resetCalculator() {
  return {
    type: RESET_CALCULATOR
  }
}
