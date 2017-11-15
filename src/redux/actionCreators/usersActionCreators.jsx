/* eslint-disable */
import axios from 'axios';
import * as userActions from '../actions/userActions';


export function loadAllUsers(currentUser){
    return (dispatch) => {
        dispatch({
            type: userActions.LOAD_ALL_USERS
        });
        axios
            .get('http://localhost:3000/accounts')
            .then(response => {
                dispatch({
                    type: userActions.LOAD_ALL_USERS_SUCCESS,
                    accounts: response.data,
                });
            })
            .catch(error => {
                dispatch({
                    type: userActions.LOAD_ALL_USERS_FAILURE,
                    error,
                });
            })
    }
}

export function handleChangeOnField(value, name){
    return (dispatch) => {
        dispatch({
            type: userActions.HANDLE_CHANGE_ON_FIELD,
            value,
            name
        })
    }
}

export function login(){
    return (dispatch) => {
        dispatch({
            type: userActions.LOGIN
        })
    }
}
