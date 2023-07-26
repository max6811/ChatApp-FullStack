import { useReducer } from "react";

import { chatsReducer } from "./reducers/ChatsReducer";
import {
    ChatDispatchContext,
    PublicChatsContext,
} from "./contexts/ChatsContext";
import Routes from "./application/Routes";

import "./App.css";

function App() {
    const [publicChats, dispatch] = useReducer(chatsReducer, []);

    return (
        <PublicChatsContext.Provider value={publicChats}>
            <ChatDispatchContext.Provider value={dispatch}>
                <Routes />
            </ChatDispatchContext.Provider>
        </PublicChatsContext.Provider>
    );
}

export default App;
