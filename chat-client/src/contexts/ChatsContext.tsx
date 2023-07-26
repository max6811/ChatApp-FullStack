import { Dispatch, createContext } from "react";
import { ChatMessage } from "../interfaces/ChatMessage";

export const PublicChatsContext = createContext<Array<ChatMessage>>([]);
export const ChatDispatchContext = createContext< Dispatch<ChatMessage>>(() => null);
