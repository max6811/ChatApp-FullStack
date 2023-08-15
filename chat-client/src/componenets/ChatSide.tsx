import type { FC } from "react";

import { ChatMessage } from "../interfaces/ChatMessage";
import { User } from "../interfaces/User";

import "./ChatSide.css";

interface ChatSideProps {
    privateChats?: Map<string, Array<ChatMessage>>;
    listUser: Array<User>;
}

const ChatSide: FC<ChatSideProps> = ({ listUser }) => {
    const renderUserList = (users: Array<User>) => {
        return users.map((user) => {
            return (
                <div className='user-item' key={user.name}>
                    {/* <img src='' alt={user.name} /> */}
                    <label htmlFor=''>{user.name}</label>
                </div>
            );
        });
    };
    return <aside className='chat-aside'>{renderUserList(listUser)}</aside>;
};
export default ChatSide;
