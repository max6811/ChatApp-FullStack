import { useContext, type FC } from "react";

import useChatScroll from "../hooks/useChatScroll";
import { PublicChatsContext } from "../contexts/ChatsContext";
import { ChatMessage } from "../interfaces/ChatMessage";
import { User } from "../interfaces/User";

import "./ChatBody.css";

interface ChatBodyProps {
    user: User;
    handleClose: () => void;
}

const ChatBody: FC<ChatBodyProps> = ({ user, handleClose }) => {
    const chats = useContext(PublicChatsContext);
    const renderChats = (messagesList: Array<ChatMessage>) => {
        return messagesList.map((chat: ChatMessage, index: number) => {
            return (
                <div
                    key={index}
                    className='chat-box'
                    style={
                        chat.senderName !== user.nickName
                            ? { justifyContent: "start" }
                            : { justifyContent: "end" }
                    }
                >
                    <div
                        className='chat-message'
                        style={
                            chat.senderName !== user.nickName
                                ? {
                                      justifyContent: "start",
                                      backgroundColor: "#8c9ea8",
                                  }
                                : {
                                      justifyContent: "end",
                                      backgroundColor: "#9FCCD3",
                                  }
                        }
                    >
                        <span className='user'>{chat.senderName}</span>
                        <p className='message'>{chat.text}</p>
                        <span className='date'>{chat.date?.toString()}</span>
                    </div>
                </div>
            );
        });
    };

    const refScroll = useChatScroll(chats);
    return (
        <div className='chat-section'>
            <button className='chat-close' onClick={handleClose}>
                close
            </button>
            <div ref={refScroll} className='chat-body sidescroll'>
                {renderChats(chats)}
            </div>
        </div>
    );
};
export default ChatBody;
