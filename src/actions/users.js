import { saveQuestionAnswer } from "../utils/api";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_CREATED_QUESTIONS = "ADD_CREATED_QUESTIONS";
export const ADD_USER_ANSWER = "ADD_USER_ANSWER";

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users,
  };
};

export const addCreatedQuestions = (poll, author) => {
  return {
    type: ADD_CREATED_QUESTIONS,
    poll,
    author,
  };
};

export const handleAddCreatedQuestions = (poll) => {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    return dispatch(addCreatedQuestions(poll, authedUser));
  };
};

const addUserAnswer = ({authedUser, qid, answer}) => {
  return {
    type: ADD_USER_ANSWER,
    authedUser,
    qid,
    answer
  };
};

export const handleAddUserAnswer = (id, option) => {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(addUserAnswer({ authedUser, qid: id, answer: option }));
    
    return saveQuestionAnswer({ authedUser, qid: id, answer: option }).catch((e) => {
      console.warn("Error in handleToggleTweet: ", e);
      dispatch(addUserAnswer({ authedUser, qid: id, answer: option }));
      alert("There was an error liking the tweet. Try again.");
    });
  };
};
