import {
  RECEIVE_QUESTIONS,
  ADD_QUESTION,
  ADD_QUESTION_ANSWER,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.poll.id]: action.poll,
      };
    case ADD_QUESTION_ANSWER:
      const answer = action.answer;
      const oppositeAnswer = answer === "optionOne" ? "optionTwo" : "optionOne";

      let questions = {
        [action.qid]: {
          ...state[action.qid],
          [answer]: {
            ...state[action.qid][answer],
            votes: state[action.qid][answer].votes
              .filter((user) => user != action.authedUser)
              .concat([action.authedUser]),
          },
          [oppositeAnswer]: {
            ...state[action.qid][oppositeAnswer],
            votes: state[action.qid][oppositeAnswer].votes.filter(
              (user) => user != action.authedUser
            ),
          },
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
