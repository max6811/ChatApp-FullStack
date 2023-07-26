import type { FC } from "react";

import { ChatMessage } from "../interfaces/ChatMessage";

import "./ChatSide.css";

interface ChatSideProps {
    privateChats?: Map<string, Array<ChatMessage>>;
    listUser: Array<string>;
}

const ChatSide: FC<ChatSideProps> = ({ listUser }) => {
    const renderUserList = (users: Array<string>) => {
        return users.map((user) => {
            return (
                <div className='user-item' key={user}>
                    {/* <img src='' alt={user.nickName} /> */}
                    <label htmlFor=''>{user}</label>
                </div>
            );
        });
    };
    return <aside className='chat-aside'>{renderUserList(listUser)}</aside>;
};
export default ChatSide;
