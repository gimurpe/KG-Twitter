import { connect } from 'react-redux';
import Home from '../components/home/Home';
import {
  loadAllTwits,
  handleChangeOnTwitField,
  submitNewTwit,
  handleChangeOnField,
  submitNewComment,
} from '../redux/actionCreators/twitsActionCreators';

const mapDispatchToProps = dispatch => ({
  fetchAllTwits: currentUser => {
    dispatch(loadAllTwits(currentUser));
  },
  handleChangeOnTweetField: (value, name) => {
    dispatch(handleChangeOnTwitField(value, name));
  },
  handleOnChange: (value, name) => {
    dispatch(handleChangeOnField(value, name));
  },
  createNewTwit: currentUser => {
    dispatch(submitNewTwit(currentUser));
  },
  createNewComment: (currentUser, twitId) => {
    dispatch(submitNewComment(currentUser, twitId));
  },
});

const mapStateToProps = ({ users, twits }) => ({
  currentUser: users.currentUser,
  allTwits: twits.twits,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
