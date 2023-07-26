import { UUID } from "crypto";

export interface User {
    id?: UUID;
    fullName: string;
    nickName: string;
    connected: boolean;
}
