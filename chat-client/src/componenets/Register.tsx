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
        if ((user.name !== "", user.email !== "")) {
            setUser({ ...user, connected: true });
            socketConnect();
        }
    };

    return (
        <form className='connect-form' onSubmit={(e) => handleSubmit(e)}>
            <label className='connect-label' htmlFor=''>
                Name
                <input
                    className='connect-input'
                    type='text'
                    name='name'
                    value={user.name}
                    onChange={(e) => handleChange(e)}
                />
            </label>
            <label className='connect-label' htmlFor=''>
                Email
                <input
                    className='connect-input'
                    type='text'
                    name='email'
                    value={user.email}
                    onChange={(e) => handleChange(e)}
                />
            </label>
            <input className='connect-button' type='submit' value='Connect' />
        </form>
    );
};
export default Register;
