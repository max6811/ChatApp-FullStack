import { useState, FC } from "react";
import { Client } from "stompjs";

import ChatSide from "../componenets/ChatSide";
import ChatBody from "../componenets/ChatBody";
import ChatInput from "../componenets/ChatInput";
import { User } from "../interfaces/User";
import { ChatMessage } from "../interfaces/ChatMessage";

import "./ChatPage.css";

interface ChatPageProps {
    user: User;
    setUser: (user: User) => void;
    listUser: Array<User>;
    stompClient: Client | null;
}

const ChatPage: FC<ChatPageProps> = ({
    user,
    setUser,
    listUser,
    stompClient,
}) => {
    const [message, setMessage] = useState("");

    const handleSendMessage = (text: string) => {
        if (text !== "" && stompClient) {
            const chatMessage: ChatMessage = {
                sender: user.name,
                text: text,
                status: "MESSAGE",
            };
            stompClient?.send(
                "/api/public-chat",
                {},
                JSON.stringify(chatMessage)
            );
            setMessage("");
        }
    };

    const handleClose = () => {
        stompClient?.send("/api/disconnect", {}, JSON.stringify(user));
        stompClient?.disconnect(disconnectHandler, {});
    };

    const disconnectHandler = () => {
        setUser({
            name: "",
            email: "",
            connected: false,
        });
    };

    return (
        <div className='chat-page'>
            <ChatSide listUser={listUser} />
            <div>
                <ChatBody user={user} handleClose={handleClose} />
                <ChatInput
                    message={message}
                    setMessage={setMessage}
                    handleSendMessage={handleSendMessage}
                />
            </div>
        </div>
    );
};
export default ChatPage;
