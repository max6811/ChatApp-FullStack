import { useContext, useState } from "react";
import SockJS from "sockjs-client";
import { Client, Frame, Message, over } from "stompjs";

import { ChatDispatchContext } from "../contexts/ChatsContext";

import { ChatMessage } from "../interfaces/ChatMessage";
import { User } from "../interfaces/User";

const useSocketClient = (user: User) => {
    const [stompClient, setStompClient] = useState<Client | null>(null);
    const [listUser, setListUser] = useState<Array<User>>([]);
    let client: Client;

    const publicChatDispatch = useContext(ChatDispatchContext);

    const connect = () => {
        const sock: WebSocket = new SockJS("http://localhost:8080/ws");
        client = over(sock);
        client.connect({}, onConnect, onError);
        setStompClient(client);
    };

    const onConnect = () => {
        client.subscribe("/public/messages", onMessageReceived);
        client.subscribe("/public/list-user", onListUserReceived, {});
        userJoin();
    };

    const userJoin = () => {
        const chatMessage: ChatMessage = {
            sender: user.name,
            isOwner: false,
            status: "JOIN",
        };
        client.send("/api/public-chat", {}, JSON.stringify(chatMessage));
        client.send("/api/connect", {}, JSON.stringify(user));
    };

    const onMessageReceived = (payload: Message) => {
        const payloadData: ChatMessage = JSON.parse(
            payload.body
        ) as ChatMessage;
        switch (payloadData.status) {
            case "JOIN":
                console.log("JOIN USER");
                break;
            case "MESSAGE":
                publicChatDispatch(payloadData);
                break;
        }
    };

    const onListUserReceived = (payload: Message) => {
        setListUser(JSON.parse(payload.body) as Array<User>);
    };

    const onError = (err: Frame | string) => {
        console.error(err);
        alert(err);
    };

    return {
        stompClient,
        connect,
        listUser,
    };
};
export default useSocketClient;
