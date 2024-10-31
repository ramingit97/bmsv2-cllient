import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router";
import { userApi } from "../modules/User/api/UserApi";
import { routePath } from "../router";

type IAuthMiddleware = {
    children: React.ReactElement;
  };

const AuthMiddleware: React.FC<IAuthMiddleware> = ({ children }) => {
    let token = localStorage.getItem('token')
    const { isLoading, isFetching } = userApi.endpoints.getMe.useQuery(null, {
      skip: !token,
      refetchOnMountOrArgChange: true,
    });
  
    const loading = isLoading || isFetching;
  
    const user = userApi.endpoints.getMe.useQueryState(null, {
      selectFromResult: ({ data }) => data,
    });

    const navigate = useNavigate();
    useEffect(()=>{
      if(!loading && !user){
        navigate(routePath.LOGIN)
      }
    },[user,loading])
  
  
    if (loading) {
      return <p>Loading</p>;
    }

    return children
  };
  
  export default AuthMiddleware;