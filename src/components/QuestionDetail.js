import { Button } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { handleAddQuestionAnwser } from '../actions/questions';
import { useState, useEffect } from 'react';
const withRouter = (Component) => {
    const ComponentWithRouterProp = (props) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props} router={{ location, navigate, params }} />;
    };

    return ComponentWithRouterProp;
};


const QuestionDetail = (props) => {
    const [percentage, setPercentage] = useState(0);
    const [display, setDisplay] = useState(false);
    const [option, setOption] = useState(1);
    const [message, setMessage] = useState(null);

    const addAnswer = (option) => {
        setMessage(null);
        if (option === 1) {
          
            props.dispatch(handleAddQuestionAnwser({ qid: props.question.id, answer: 'optionOne' })).then(() => {
                setOption(1);                
            }).catch(() => {
                setMessage('You already voted for this question');
            })
        } else {
            props.dispatch(handleAddQuestionAnwser({ qid: props.question.id, answer: 'optionTwo' })).then(() => {
                setOption(2);                
            }).catch(() => {
                setMessage('You already voted for this question');
            })
        }
    };

    useEffect(() => {
        if (props.question) {
          const optionOne = props.question.optionOne.votes.length;
          const optionTwo = props.question.optionTwo.votes.length;
          const totalVotes = optionOne + optionTwo;
          const newPercentage = totalVotes === 0 ? 0 : option===1 ? (optionOne / totalVotes) * 100: (optionTwo / totalVotes) * 100;
    
          setPercentage(newPercentage);
          setDisplay(true);
        }
      }, [props.question, option]);
    return (
        <div className="new-question">
            <div className="header-question">
                <h1>Would you rather</h1>
            </div>
            <div className="body-question">
                <div className="question-name">
                    <div>{props.question.optionOne.text}</div>
                    <Button type="primary" onClick={() => addAnswer(1)}>click</Button>
                </div>
                <div className="question-name">
                    <div>{props.question.optionTwo.text}</div>
                    <Button type="primary" onClick={() => addAnswer(2)}>click</Button></div>
            </div>

            {display && (<div className='percentage'>Pergentage of your choice: {percentage}</div>)}
            {message && (<div className='message-error'>{message}</div>)}
        </div>
    );
};

const mapStateToProps = ({ questions }, props) => {
    const id = props.router.params.id;
    const question = questions[id];
    return {
        question
    };
};


export default withRouter(connect(mapStateToProps)(QuestionDetail));
