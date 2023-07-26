import { DispatchWithoutAction } from "react";
import { ChatMessage } from "../interfaces/ChatMessage";

export function chatsReducer(publicChats: Array<ChatMessage>, action:ChatMessage) {
    switch (action.status) {
        case "MESSAGE":
            return [...publicChats, action];

        default: {
            throw Error(`Unknown action: ${action.status}`);
        }
    }
}
