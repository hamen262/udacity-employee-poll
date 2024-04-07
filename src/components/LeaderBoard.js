import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
const LeaderBoard = (props) => {
  const {leaderboard} = props;
  const dataSource =props.leaderboard;
  
  const columns = [
    {      
      title: 'Users',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: 'Answered',
      dataIndex: 'answered',
      key: 'answered',
    },
    {
      title: 'Created',
      dataIndex: 'created',
      key: 'created',
    },
  ];
  
  return (
   <div className="leaderboard">
    <Table dataSource={dataSource} columns={columns} />;
   </div>
  );
};

const mapStateToProps = ({users}) => {
  const leaderboard = Object.values(users).map((user,index) => {
    return {
      key: index,
      user: user.id,
      answered: Object.keys(user.answers).length,
      created: user.questions.length,
    };
  });

  return  {
    leaderboard};
};

export default connect(mapStateToProps)(LeaderBoard);
