import "@testing-library/jest-dom";
import { _getQuestions, _getUsers } from "./_DATA";
import { getInitialData } from "./api";
jest.mock("./_DATA");

describe("get init data users and questions", () => {
    it('will return users and questions', async () => {
        const users = {
            id: 'sarahedo',
            name: 'Sarah Edo',
            avatarURL: 'sarahedo.png',
            answers: {
                "8xf0y6ziyjabvozdd253nd": "optionOne",
                "6ni6ok3ym7mf1p33lnez": "optionOne",
                "am8ehyc8byjqgar0jgpub9": "optionTwo",
                "loxhs1bqm25b708cmbf3g": "optionTwo"
            },
            questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"]
        };
        const questions = {
            "xj352vofupe1dqz9emx13r": {
                id: 'xj352vofupe1dqz9emx13r',
                author: 'johndoe',
                timestamp: 1493579767190,
                optionOne: {
                  votes: ['johndoe'],
                  text: 'write JavaScript',
                },
                optionTwo: {
                  votes: ['tylermcginnis'],
                  text: 'write Swift'
                }
              }
        }
        _getQuestions.mockResolvedValue(questions);
        _getUsers.mockResolvedValue(users);

        const initData = await getInitialData();
        expect(initData).toEqual({users, questions});
        
    });

   
  
});
