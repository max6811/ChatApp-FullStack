import { User } from "./User";

export interface ChatMessage {
    senderName: string;
    text?: string;
    isOwner?: boolean;
    user?: User;
    date?: Date;
    status: string;
}
