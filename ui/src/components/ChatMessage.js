import React from 'react';
import { Comment, Avatar } from 'antd';

const ChatMessage  = (props) => {
    return (
        <div>
            <Comment
                author={<a>{props.message.user}</a>}
                avatar={
                <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"
                />
                }
                content={
                <p>
                    {props.message.message}.
                </p>
                }
            >
            </Comment>
        </div>
    );
}

export default ChatMessage;