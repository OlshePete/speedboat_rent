import {useSelector} from 'react-redux';

export function useAuth() {
    const {isAuth, userLogin, token, id} = useSelector(state => state.user);
  return {
    isAuth,
    userLogin,
    token,
    id
  }
}
