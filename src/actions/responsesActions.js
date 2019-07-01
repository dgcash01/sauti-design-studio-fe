import { axiosInstance } from 'helpers'
import store from 'src/store'

export const FETCH_RESPONSES_START = 'FETCH_RESPONSES_START'
export const FETCH_RESPONSES_SUCCESS = 'FETCH_RESPONSES_SUCCESS'
export const FETCH_RESPONSES_FAILURE = 'FETCH_RESPONSES_FAILURE'
export const FETCHED_FLAT_ARRAY = 'FETCHED_FLAT_ARRAY'

export const fetchResponses = workflow => dispatch => {
  dispatch({ type: FETCH_RESPONSES_START })

  axiosInstance
    .get(`/responses/${workflow}`)
    .then(res => dispatch({ type: FETCH_RESPONSES_SUCCESS, payload: res.data }))
    .catch(err =>
      dispatch({
        type: FETCH_RESPONSES_FAILURE,
        msg: err.message,
      })
    )
}

export const UPDATE_ARRAY = 'UPDATE_ARRAY'
export const updateArray = array => dispatch => {
  dispatch({ type: UPDATE_ARRAY, payload: array })
}

export const CLICKED_RESPONSE = 'CLICKED_RESPONSE'
export const clickedResponse = id => dispatch => {
  let activeItem = id
  if (store.getState().responses.activeItem === id) activeItem = null
  dispatch({
    type: CLICKED_RESPONSE,
    payload: activeItem,
  })
}

export const TOGGLE_RES_MODAL = 'TOGGLE_RES_MODAL'

export const toggleResModal = bool => dispatch => {
  dispatch({ type: TOGGLE_RES_MODAL, payload: bool })
}

export const TOGGLE_DELETE_MODAL = 'TOGGLE_DELETE_MODAL'

export const toggleDeleteModal = bool => dispatch =>
  dispatch({ type: TOGGLE_DELETE_MODAL, payload: bool })

export const SET_ACTIVE_RES = 'SET_ACTIVE_RES'
export const setActiveRes = response => dispatch =>
  dispatch({ type: SET_ACTIVE_RES, payload: response })

export const SAVE_TREE_START = 'SAVE_TREE_START'
export const SAVE_TREE_EQUAL = 'SAVE_TREE_EQUAL'
export const SAVE_TREE_SUCCESS = 'SAVE_TREE_SUCCESS'
export const SAVE_TREE_FAILURE = 'SAVE_TREE_FAILURE'

export const saveTree = rows => dispatch => {
  console.log('TCL: added', rows.added)
  // console.log('TCL: changed', changed)
  console.log('TCL: rows', store.getState().workflow.id)
  if (rows.changed.length > 0) {
    dispatch({ type: SAVE_TREE_START })
    axiosInstance
      .put(`/responses/${store.getState().workflow.id}/save`, rows)
      .then(res => {
        dispatch({ type: SAVE_TREE_SUCCESS })
      })
      .catch(err =>
        dispatch({
          type: SAVE_TREE_FAILURE,
          msg: err.message,
        })
      )
  }
  if (rows.added.length > 0) {
    dispatch({ type: SAVE_TREE_START })
    axiosInstance
      .post(`/responses/${store.getState().workflow.id}/save`, rows)
      .then(res => {
        dispatch({ type: SAVE_TREE_SUCCESS })
      })
      .catch(err =>
        dispatch({
          type: SAVE_TREE_FAILURE,
          msg: err.message,
        })
      )
  } else {
    dispatch({
      type: SAVE_TREE_EQUAL,
      payload: 'States are equal',
    })
  }
}

export const DELETE_RES_START = 'DELETE_RES_START'
export const DELETE_RES_SUCCESS = 'DELETE_RES_SUCCESS'
export const DELETE_RES_FAILURE = 'DELETE_RES_FAILURE'

export const deleteResponse = () => dispatch => {
  dispatch({ type: DELETE_RES_START })

  axiosInstance
    .delete(`/responses/${store.getState().responses.modal.id}`)
    .then(res => {
      dispatch({ type: DELETE_RES_SUCCESS, payload: res.data })
    })
    .catch(err =>
      dispatch({
        type: DELETE_RES_FAILURE,
        msg: err.message,
      })
    )
}
