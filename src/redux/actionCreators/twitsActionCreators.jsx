/* eslint-disable */
import axios from 'axios';
import * as twitsActions from '../actions/twitsActions';

export function loadAllTwits(currentUser) {
  return dispatch => {
    dispatch({
      type: twitsActions.LOAD_ALL_TWITS,
    });
    axios
      .get('http://localhost:3000/users')
      .then(response => {
        dispatch({
          type: twitsActions.LOAD_ALL_TWITS_SUCCESS,
          users: response.data,
          currentUser: currentUser,
        });
      })
      .catch(error => {
        dispatch({
          type: twitsActions.LOAD_ALL_TWITS_FAILURE,
          error,
        });
      });
  };
}

export function submitNewTwit(currentUser) {
  return dispatch => {
    dispatch({
      type: twitsActions.SUBMIT_NEW_TWEET,
      currentUser: currentUser,
    });
  };
}

export function submitNewComment(currentUser, twitId, comment) {
  return dispatch => {
    dispatch({
      type: twitsActions.SUBMIT_NEW_COMMENT,
      currentUser,
      twitId,
      comment,
    });
  };
}

export function handleChangeOnTwitField(value, name) {
  return dispatch => {
    dispatch({
      type: twitsActions.HANDLE_CHANGE_ON_TWIT_FIELD,
      value: value,
      name: name,
    });
  };
}

export function handleChangeOnField(value, name) {
  return dispatch => {
    dispatch({
      type: twitsActions.HANDLE_CHANGE_ON_FIELD,
      value,
      name,
    });
  };
}
