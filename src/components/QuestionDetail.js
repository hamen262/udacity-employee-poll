import { Button } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Form, Input } from 'antd';

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

const addAnswer = (option) => {
    console.log('addAnswer');

};
    return (
        <div className="new-question">
            <div className="header-question">
                <h1>Would you rather</h1>
            </div>
            <div className="body-question">
            <div className="question-name">
            <div>{props.question.optionOne.text}</div>
            <Button type="primary" onClick={addAnswer(1)}>click</Button>
            </div>
            <div className="question-name">
            <div>{props.question.optionTwo.text}</div>
            <Button type="primary"   onClick={addAnswer(2)}>click</Button></div>
            </div>

            <div >Percentage of the option: {props.percentage}</div>

      
        </div>
    );
};

const mapStateToProps = ({ questions },props) => {
const id= props.router.params.id;
const question =  questions[id];

console.log('question',question);
    return {
       question,
       percentage: question.optionOne.votes.length/(question.optionOne.votes.length+question.optionTwo.votes.length) 
    };
};

export default  withRouter(connect(mapStateToProps)(QuestionDetail));
