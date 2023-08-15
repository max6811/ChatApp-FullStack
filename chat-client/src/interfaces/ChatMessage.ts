import { User } from "./User";

export interface ChatMessage {
    sender: string;
    text?: string;
    isOwner?: boolean;
    user?: User;
    date?: Date;
    status: string;
}
