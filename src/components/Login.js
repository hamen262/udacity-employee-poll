import React from 'react';
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import { useState } from 'react';

const Login = (props) => {
    const [error,setError] = useState(null);
    const onFinish = (values) => {
        const user = Object.values(props.users).find(user => user.id === values.username && user.password === values.password);
        if (user) {
            console.log(user.id);
            props.dispatch(setAuthedUser(user));
            setError(null);
        } else {
            setError('Login fail! Please check your username and password!');
        }
        
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
                    data-testid = "username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    data-testid = "password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" data-testid= "submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>

            {error && (<div data-testid="error">{error}</div>)}
        </div>
    );
};

const mapStateToProps = ({ users }) => {
    return {
        users,
    };
};

export default connect(mapStateToProps)(Login);