import { _saveQuestion,_saveQuestionAnswer } from "./_DATA"


describe("add question", () => {
    it('will add question', async () => {
       const question ={ optionOneText: 'A', optionTwoText: 'B', author:'johndoe' }
       const result = await _saveQuestion(question);
       expect(result.author).toEqual('johndoe');
       expect(result.optionOne.text).toEqual('A');
         expect(result.optionTwo.text).toEqual('B');
    });

    it('should throw an error if author is not provided', async () => {
      const question = {
        optionOneText: 'Option One',
        optionTwoText: 'Option Two'
      };
  
      await expect(_saveQuestion(question)).rejects.toEqual('Author is required');
    });
})

describe("add question answer", () => {
    it('will add question answer', async () => {
       const question ={ authedUser: 'johndoe', qid: '6ni6ok3ym7mf1p33lnez', answer: 'optionOne' }
         const result = await _saveQuestionAnswer(question);
            expect(result).toEqual('save success');
    });

    it('should throw an error if user already answered the question', async () => {
      const question = {
        authedUser: 'johndoe',
        qid: 'xj352vofupe1dqz9emx13r',
        answer: 'optionOne'
      };
      await expect(_saveQuestionAnswer(question)).rejects.toEqual('You already answered this question');
    });

})