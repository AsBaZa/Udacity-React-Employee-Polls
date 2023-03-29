import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "./_DATA";

describe("_saveQuestion", () => {
  it("will return the saved question if correctly formatted data is passed to the function", async () => {
    const optionOneText = "optionOneText";
    const optionTwoText = "optionTwoText";
    const author = "author";

    const result = await _saveQuestion({
      optionOneText,
      optionTwoText,
      author,
    });

    expect(result.hasOwnProperty("id")).toEqual(true);
    expect(result.hasOwnProperty("timestamp")).toEqual(true);
    expect(result.hasOwnProperty("author")).toEqual(true);
    expect(result.hasOwnProperty("optionOne")).toEqual(true);
    expect(result.hasOwnProperty("optionTwo")).toEqual(true);
  });

  it("will return an error if incorrectly formatted data is passed to the function", async () => {
    const author = "author";
    await expect(_saveQuestion({ author })).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

describe("_saveQuestionAnswer", () => {
  it("will return the saved question answer if correctly formatted data is passed to the function", async () => {
    const authedUser = "tylermcginnis";
    const qid = "8xf0y6ziyjabvozdd253nd";
    const answer = "optionOne";

    const result = await _saveQuestionAnswer({ authedUser, qid, answer });

    expect(result).toEqual(true);
  });

  it("will return an error if incorrectly formatted data is passed to the function", async () => {
    const authedUser = "authedUser";
    await expect(_saveQuestionAnswer({ authedUser })).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });
});
