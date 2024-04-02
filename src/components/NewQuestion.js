import React from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const NewQuestion = (props) => {
    const navigate = useNavigate();
    const { questions } = props;
    const onFinish = (values) => {
        console.log('Received values:', values);
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

const mapStateToProps = ({ questions,authedUser }) => {

    return {
        questions
    };
};

export default connect(mapStateToProps)(NewQuestion);
