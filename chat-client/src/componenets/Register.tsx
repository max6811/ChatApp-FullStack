import { FC } from "react";
import { Client } from "stompjs";

import { User } from "../interfaces/User";

import "./Register.css";

interface RegisterProps {
    user: User;
    setUser: (user: User) => void;
    setStompClient?: (stomp: Client | null) => void;
    socketConnect: () => void;
}

const Register: FC<RegisterProps> = ({ user, setUser, socketConnect }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputName = e.target.name;
        setUser({ ...user, [inputName]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if ((user.fullName !== "", user.nickName !== "")) {
            setUser({ ...user, connected: true });
            socketConnect();
        }
    };

    return (
        <form className='connect-form' onSubmit={(e) => handleSubmit(e)}>
            <label className='connect-label' htmlFor=''>
                FullName
                <input
                    className='connect-input'
                    type='text'
                    name='fullName'
                    value={user.fullName}
                    onChange={(e) => handleChange(e)}
                />
            </label>
            <label className='connect-label' htmlFor=''>
                NickName
                <input
                    className='connect-input'
                    type='text'
                    name='nickName'
                    value={user.nickName}
                    onChange={(e) => handleChange(e)}
                />
            </label>
            <input className='connect-button' type='submit' value='Connect' />
        </form>
    );
};
export default Register;
