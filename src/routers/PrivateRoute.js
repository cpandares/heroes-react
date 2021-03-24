import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types';


export const PrivateRoute = ({
    isAuth,
    component:Componet,
    ...rest
})=>{

    

    localStorage.setItem('lastPath',rest.location.pathname);

    return (

        <Route  { ...rest } 
                component = { (props) => (
                    (isAuth)
                    ? (<Componet {...props} />)
                    : <Redirect to="/login" />

                )}
                />

    )
}

PrivateRoute.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}