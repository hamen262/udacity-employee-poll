import { saveQuestion, saveQuestionAnswer } from "../utils/api";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWER = "ADD_ANSWER";
export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}
export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(question) {
  return (dispatch) => {
    var { author, optionOneText, optionTwoText } = question;
    return saveQuestion({ author, optionOneText, optionTwoText })
      .then((question) => { 
        dispatch(addQuestion(question))})     
    }
}
 export function addAnwer({ authedUser, qid, answer }) {
  return {
    type: ADD_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

export function handleAddQuestionAnwser({ qid, answer }) {
  return (dispatch,getState) => {
    const authedUser = getState().authedUser.id;
    return saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      dispatch(addAnwer({ authedUser, qid, answer }));
    });

  }
}