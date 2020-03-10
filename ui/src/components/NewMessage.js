import React, { Component } from 'react';
import { Comment, Avatar, Form, Button, Input } from 'antd';
const { TextArea } = Input;

const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <div>
      <Form.Item>
        <TextArea rows={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
          Send
        </Button>
      </Form.Item>
    </div>
  );

class NewMessage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            submitting: false,
            value: 'sandip',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
   
    handleSubmit = () => {
        if (!this.state.value) {
          return;
        }

        this.setState({
            submitting: true,
        });
      
        console.log('New comment', this.state.value);
        setTimeout(() => {
            this.setState({
                submitting: false,
                value: ''
            })
        }, 1000)
    }    


    handleChange = e => {
        this.setState({
          value: e.target.value,
        });
      };
      
    render() {
        return (
            <Comment
                avatar={
                    <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"
                    />
                }
                content={
                    <Editor
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    submitting={this.state.submitting}
                    value={this.state.value}
                    />
                }
                />
        );
    }
}

export default NewMessage;