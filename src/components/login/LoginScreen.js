import { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";




export const LoginScreen = ({ history })=>{

    const {  dispatch } = useContext(AuthContext);

    const lastPath = localStorage.getItem('lastPath') || '/';

    const handleLogin = (  )=>{
        //history.push('/marvel');
        //  history.replace('/')

        const action = {
            type: types.login,
            payload: {
                name:'Cesar'
            }
        }

        dispatch(action);
        history.replace(lastPath);
    }

    return (

        <div className="container mt-5">

            <h1>Login</h1>
            <hr />

            <button     onClick= { handleLogin }
                        className="btn btn-primary">
                Login

            </button>

        </div>

    )

}