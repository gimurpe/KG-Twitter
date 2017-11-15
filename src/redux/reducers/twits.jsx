/* eslint-disable */
import * as twitsActions from '../actions/twitsActions';

const DEFAULT_STATE = {
  isLoading: false,
  twits: [],
  newTwit: {
    year: '2017',
    description: '',
    poster: '1.jpg',
    trailer: 'MpEdJ-mmTlY',
    comments: [],
  },
  newComment: '',
};

export default function twits(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case twitsActions.LOAD_ALL_TWITS:
      return Object.assign({}, state, {
        isLoading: true,
      });

    case twitsActions.LOAD_ALL_TWITS_SUCCESS:
      const allTwits = [];
      action.users.forEach(
        user =>
          user.name !== action.currentUser
            ? user.twits.forEach(twit =>
                allTwits.push(Object.assign({}, twit, { user: user.name })),
              )
            : null,
      );
      return Object.assign({}, state, {
        twits: allTwits,
        isLoading: false,
      });

    case twitsActions.LOAD_ALL_TWITS_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error,
      });

    case twitsActions.SUBMIT_NEW_TWEET:
      const newTwits = [...state.twits];
      newTwits.push(
        Object.assign({}, state.newTwit, { user: action.currentUser }),
      );
      return Object.assign({}, state, {
        twits: newTwits,
      });

    case twitsActions.SUBMIT_NEW_COMMENT:
      const theTwitIndex = state.twits.findIndex(
        twit => twit.imdbID === action.twitId,
      );
      const theTwits = [...state.twits];
      theTwits[theTwitIndex].comments.push(
        Object.assign(
          {},
          { name: action.currentUser, value: state.newComment },
        ),
      );

      return Object.assign({}, state, {
        twits: theTwits,
      });

    case twitsActions.HANDLE_CHANGE_ON_TWIT_FIELD:
      return Object.assign({}, state, {
        newTwit: Object.assign({}, state.newTwit, {
          [action.name]: action.value,
        }),
      });

    case twitsActions.HANDLE_CHANGE_ON_FIELD:
      return Object.assign({}, state, {
        [action.name]: action.value,
      });

    default:
      return state;
  }
}
