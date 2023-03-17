import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { handleAddCreatedQuestions } from "../actions/users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_QUESTION_ANSWER = "ADD_QUESTION_ANSWER";

const addQuestion = (poll) => {
  return {
    type: ADD_QUESTION,
    poll,
  };
};

export const handleAddQuestion = (optionOneText, optionTwoText) => {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    })
      .then((poll) => {
        dispatch(addQuestion(poll));
        dispatch(handleAddCreatedQuestions(poll));
      })
      .then(() => dispatch(hideLoading()));
  };
};

const addQuestionAnswer = ({authedUser, qid, answer}) => {
  return {
    type: ADD_QUESTION_ANSWER,
    authedUser,
    qid,
    answer
  };
};

export const handleAddQuestionAnswer = (id, option) => {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(addQuestionAnswer({ authedUser, qid: id, answer: option }));
    
    return saveQuestionAnswer({ authedUser, qid: id, answer: option }).catch((e) => {
      console.warn("Error in handleToggleTweet: ", e);
      dispatch(addQuestionAnswer({ authedUser, qid: id, answer: option }));
      alert("There was an error liking the tweet. Try again.");
    });
  };
};

export const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
};
