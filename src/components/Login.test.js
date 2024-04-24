jest.mock('antd', () => {
    const antd = jest.requireActual('antd');
    return {
      ...antd
    };
  });

  describe('Login', () => {
    it('should render correctly', () => {
      const { Form, Input, Button } = require('antd');
      const { useState } = require('react');
      const { setAuthedUser } = require('../actions/authedUser');
      const { Login } = require('../components/Login');
  
      const props = {
        users: {
          'user1': {
            id: 'user1',
            password: 'password1'
          }
        },
        dispatch: jest.fn()
      };
  
      const wrapper = shallow(<Login {...props} />);
      expect(wrapper.find(Form)).toHaveLength(1);
      expect(wrapper.find(Input)).toHaveLength(2);
      expect(wrapper.find(Button)).toHaveLength(1);
    });
  
    it('should call setAuthedUser when form is submitted', () => {
      const { Form } = require('antd');
      const { setAuthedUser } = require('../actions/authedUser');
      const { Login } = require('../components/Login');
  
      const props = {
        users: {
          'user1': {
            id: 'user1',
            password: 'password1'
          }
        },
        dispatch: jest.fn()
      };
  
      const wrapper = shallow(<Login {...props} />);
      wrapper.find(Form).simulate('finish', { username: 'user1', password: 'password1' });
      expect(setAuthedUser).toHaveBeenCalledWith({ id: 'user1', password: 'password1' });
    });
  
    it('should show error message when login fails', () => {
      const { Form } = require('antd');
      const { Login } = require('../components/Login');
  
      const props = {
        users: {
          'user1': {
            id: 'user1',
            password: 'password1'
          }
        },
        dispatch: jest.fn()
      };
  
      const wrapper = shallow(<Login {...props} />);
      wrapper.find(Form).simulate('finish', { username: 'user1', password: 'wrongpassword' });
      expect(wrapper.find('.error')).toHaveLength(1);
    });
  });