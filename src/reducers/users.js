import { ADD_CREATED_QUESTIONS, RECEIVE_USERS } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_CREATED_QUESTIONS:
      let questions = {
        [action.author]: {
          ...state[action.author],
          questions: state[action.author].questions.concat([action.poll.id]),
        },
      };
      return {
        ...state,
        ...questions,
      };
    default:
      return state;
  }
}
