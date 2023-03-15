export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_CREATED_QUESTIONS = "ADD_CREATED_QUESTIONS";

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
  
      return dispatch(addCreatedQuestions(poll, authedUser))
    };
  };
