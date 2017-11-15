/* eslint-disable */
import * as userActions from '../actions/userActions';

const DEFAULT_STATE = {
    isLoading: false,
    accounts: [],
    currentUsername: '',
    currentPassword: '',
    currentUser: ''
};

export default function users(state = DEFAULT_STATE, action){
    switch (action.type){
        case userActions.LOAD_ALL_USERS:
            return Object.assign({}, state, {
                isLoading: true    
            });
        case userActions.LOAD_ALL_USERS_SUCCESS:
            return Object.assign({}, state, {
                accounts: action.accounts
            })
        case userActions.LOAD_ALL_USERS_FAILURE:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error,
            })

        case userActions.HANDLE_CHANGE_ON_FIELD:
            return Object.assign({}, state,{
                [action.name]: action.value
            })

        case userActions.LOGIN:
            let currentAccount = state.accounts.filter(account => account.username === state.currentUsername && account.password === state.currentPassword)
            if(currentAccount.length === 1){
                currentAccount = currentAccount[0].username
            }
            else{
                currentAccount = ''
            }
            return Object.assign({}, state,{
                currentUser: currentAccount,
                currentPassword: ''
            })
        default:
            return state;
    }
}