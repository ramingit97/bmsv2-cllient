import { FC, ReactNode, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { userApi } from '../modules/User/api/UserApi';
import { routePath } from '../router';

interface BaseLayoutProps {
    children?: ReactNode;
}

const AuthLayout:FC<BaseLayoutProps> = ({children}) => {
    let token = localStorage.getItem('token');
    const { isLoading, isFetching,data } = userApi.endpoints.getMe.useQuery(null, {
        skip: !token,
        refetchOnMountOrArgChange: true,
    });

    const loading = isLoading || isFetching;

    const user = userApi.endpoints.getMe.useQueryState(null, {
        selectFromResult: ({ data }) => data,
    });

    const navigate = useNavigate();
    useEffect(()=>{
      if(!token || !data) return;
      if(!loading && user){
        navigate(routePath.HOME)
      }
    },[user,loading])


    return (
        children || <Outlet />
    );
};

export default AuthLayout;