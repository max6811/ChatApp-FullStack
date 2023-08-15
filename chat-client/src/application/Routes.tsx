import { useState, useEffect, FC } from "react";
import { User } from "../interfaces/User";
import useSocketClient from "../hooks/useSocketClient";
import ChatPage from "../pages/ChatPage";
import Register from "../componenets/Register";

const Routes: FC = () => {
    const userStart: User = {
        name: "",
        email: "",
        connected: false,
    };
    const [user, setUser] = useState<User>(userStart);

    const { stompClient, connect, listUser } = useSocketClient(user);

    return (
        <>
            {user?.connected && stompClient?.connected? (
                <ChatPage
                    user={user}
                    setUser={setUser}
                    listUser={listUser}
                    stompClient={stompClient}
                />
            ) : (
                <Register
                    user={user}
                    setUser={setUser}
                    socketConnect={connect}
                />
            )}
        </>
    );
};
export default Routes;
