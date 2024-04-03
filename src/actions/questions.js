import { saveQuestion } from "../utils/api";
import { addQuestionToUser } from "./users";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export const ADD_QUESTION = "ADD_QUESTION";
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