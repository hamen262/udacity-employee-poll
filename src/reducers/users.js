import { RECEIVE_USERS } from "../actions/users";
import { ADD_QUESTION } from "../actions/questions";
import { ADD_ANSWER } from "../actions/users";


export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_QUESTION:
      const { question } = action;
      const author = question.author;
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat([question.id]),
        },
      };
    case ADD_ANSWER:
      const { authedUser, qid, answer } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer,
          },
        },
      };

    default:
      return state;
  }
}
