import { Button } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import { formatDate } from '../utils/helpers';
import { Link } from 'react-router-dom';

const Question = (props) => {
  const { ...question } = props;

  return (
    <div className="question" style={{  border: '1px solid grey', padding: '10px', margin: '10px',textAlign: 'center' }}>
      <h2 style={{  fontSize: '20px'}}>{question.author}</h2>
      <p style={{ fontStyle: 'italic',color: 'grey' }}>{formatDate(question.timestamp)}</p>
      <Link to={`/question/${question.id}`} style={{ backgroundColor: 'black', color: 'white', padding: '5px 10px', border: 'none', marginLeft: 'auto' }}>Show</Link>
    </div>
  );
};

const mapStateToProps = ({questions}, { id }) => {
  const question = questions[id];

  return {
   ...question,id
  };
};

export default connect(mapStateToProps)(Question);
