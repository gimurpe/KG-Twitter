import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Login from '../components/login/Login';
import {
  loadAllUsers,
  handleChangeOnField,
  login,
} from '../redux/actionCreators/usersActionCreators';

const mapDispatchToProps = dispatch => ({
  loadAllAccounts: () => {
    dispatch(loadAllUsers());
  },
  handleOnChange: (value, name) => {
    dispatch(handleChangeOnField(value, name));
  },
  signIn: () => {
    dispatch(login());
  },
  loadHome: currentUser => {
    if (currentUser.trim().length > 0) {
      dispatch(push('/home'));
    }
  },
});

const mapStateToProps = ({ users }) => ({
  allAccounts: users.accounts,
  currentUser: users.currentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
