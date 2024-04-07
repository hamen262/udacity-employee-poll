import React from 'react';
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

const Login = (props) => {
    const onFinish = (values) => {
        Object.entries(props.users).map(([key, value]) => {
            if (key === values.username && value.password === values.password) {
                return props.dispatch(setAuthedUser(value));
            }
        });
        
    }

    return (
        <div style={{ marginLeft: '50px', textAlign: 'center', marginRight: '50px' }}>
            <h1>Login</h1>
            <Form onFinish={onFinish}
                layout='vertical'
            >
                <Form.Item
                    label="User"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

const mapStateToProps = ({ users }) => {
    return {
        users,
    };
};

export default connect(mapStateToProps)(Login);