import React from 'react';
import { UserBtn, ManagerBtn, SignUpBtn } from '../components/LoginBtn';
import UserField from '../components/LoginField';
import { Link } from "react-router-dom";
//import SignUp from './SignUp';


function Login() {
    return (
        <div>
            <UserField />

            <Link to={"/managerhome"}>
                <ManagerBtn />
            </Link>
            <Link to={"/userhome"}>
                <UserBtn />
            </Link>
            <Link to={"/signup"}>
                <SignUpBtn />
            </Link>
        </div>
    )
}

export default Login