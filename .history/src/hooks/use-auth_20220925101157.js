import {useSelector} from 'react-redux';

export function useAuth() {
    const {isAuth, userLogin, userRole, token, id} = useSelector(state => state.user);
  return {
    isAuth,
    userLogin,
    userRole,
    token,
    id
  }
}
