import React from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import {  handleAddQuestion } from '../actions/questions';

const NewQuestion = (props) => {
    const navigate = useNavigate();
    
    const onFinish = (values) => {
    props.dispatch(handleAddQuestion({
            optionOneText: values.optionOne,
            optionTwoText: values.optionTwo,
            author: props.id
        }))

        navigate('/');
     }


    return (
        <div className="new-question">

            <div className="header-question">
                <h1>Would you rather?</h1>
                <p>Create Your Own Poll</p>
            </div>
            <div className="body-question">
                <Form onFinish={onFinish}
                    layout='vertical'                    
                >
                    <Form.Item
                        label="First Option"
                        name="optionOne"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Second Option"
                        name="optionTwo"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item style={{textAlign: 'center'}}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        </div>
    );
};

const mapStateToProps = ({ authedUser }) => {

    return {
        id: authedUser.id
    };
};

export default connect(mapStateToProps)(NewQuestion);
