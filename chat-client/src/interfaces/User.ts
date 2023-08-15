import { UUID } from "crypto";

export interface User {
    id?: UUID;
    email: string;
    name: string;
    connected: boolean;
}
