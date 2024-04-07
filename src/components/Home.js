import React from 'react';
import { connect } from 'react-redux';
import Question from './Question';
const Home = (props) => {
    return (

        <div className="list-questions-content">

            <div className="question-section">
                <h2 className="question-type">New Questions</h2>

                <ol className="question-grid">
                {
                    props.questionIdsNew.map((id) => (
                        <li key={id}>
                           <Question id={id} />
                        </li>
                    ))
                }
                </ol>

            </div>
            <br />
            <div className="question-section">
                <h2 className="question-type">Done</h2>

                <ol className="question-grid">
                {
                    props.questionIdsDone.map((id) => (
                        <li key={id}>
                           <Question id={id} />
                        </li>
                    ))
                }
                </ol>

            </div>
        </div>

    );


};
const mapStateToProps = ({ questions, authedUser, users }) => {

     var questionIdDone = Object.keys(users[authedUser.id].answers);

    return {
        questionIdsDone: Object.keys(questions).filter((id) => questionIdDone.includes(id)).sort((a, b) => questions[b].timestamp - questions[a].timestamp),
        questionIdsNew: Object.keys(questions).filter((id) => !questionIdDone.includes(id)).sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    };
};

export default connect(mapStateToProps)(Home);