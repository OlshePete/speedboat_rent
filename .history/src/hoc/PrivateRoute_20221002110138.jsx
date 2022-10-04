import { useSelector } from 'react-redux';
import { Navigate, Route, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    let location = useLocation();

    const { isAuth, loading } = useSelector(state => state.speedboat);

    if (loading) {
        return <>Checking authenticaton..< />
    }

    if (!isAuth) {
        return <Navigate to="/login" state = {{ from: location }
    } />;
}

return children;
};

export default PrivateRoute;