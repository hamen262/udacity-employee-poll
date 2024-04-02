import { Button } from 'antd';
import React from 'react';
import { connect } from 'react-redux';

const QuestionDetail = (props) => {
    const { question } = props;

    return (
        <div className="new-question">
            <div className="header-question">
                <h1>Would you rather?</h1>
                <p>Create Your Own Poll</p>
            </div>
            <div className="body-question">
            <div className="question-name">
            <div>A</div>
            <Button type="primary" htmlType="submit">click</Button>
            </div>
            <div className="question-name">
            <div>B</div>
            <Button type="primary" htmlType="submit">click</Button></div>
            </div>

        </div>
    );
};

const mapStateToProps = ({ questions }, { id }) => {
    const question = questions[id];

    return {
        question
    };
};

export default connect(mapStateToProps)(QuestionDetail);
