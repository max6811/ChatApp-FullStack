import type { FC } from "react";

import SendIcon from "../assets/send.svg";

import "./ChatInput.css";

interface ChatInputProps {
    message: string;
    setMessage: (question: string) => void;
    handleSendMessage: (question: string) => void;
}

const ChatInput: FC<ChatInputProps> = ({
    message,
    setMessage,
    handleSendMessage,
}) => {
    return (
        <div
            className='chat-imput-section'
            id='chat-input-section'
        >
            <input
                type='text'
                placeholder='Input your message'
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                onKeyUp={(e) =>
                    e.key === "Enter" ? handleSendMessage(message) : ""
                }
            />
            <p
                itemType='button'
                onClick={() => handleSendMessage(message)}
            >
                <img src={SendIcon} alt='send' className='w-10 h-8 p-1' />
            </p>
        </div>
    );
};
export default ChatInput;
