import { Button } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import { formatDate } from '../utils/helpers';

const Question = (props) => {
  const { question } = props;

  return (
    <div className="question" style={{  border: '1px solid grey', padding: '10px', margin: '10px' }}>
      <h2 style={{ color: 'blue' }}>{question.author}</h2>
      <p style={{ fontStyle: 'italic' }}>{formatDate(question.timestamp)}</p>
      <Button style={{ backgroundColor: 'green', color: 'white', padding: '5px 10px', border: 'none' }}>Show</Button>
    </div>
  );
};

const mapStateToProps = ({questions}, { id }) => {
  const question = questions[id];

  return {
    question
  };
};

export default connect(mapStateToProps)(Question);
