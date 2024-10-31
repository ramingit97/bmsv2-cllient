import { createApi } from '@reduxjs/toolkit/query/react';
import {baseQueryWithReauth} from "../../../common/store/axios";
import {IRegisterInput,ILoginInput} from "../models";
import {IServerError} from "../../../common/types/api.types";
import {userApi} from "../../User/api/UserApi";
// import { userApi } from '../UserApi';
// import {IServerError} from "src/models/IError";
// import { setUser } from 'src/store/reducers/UserSlice';

export interface ILoginResponse {
    access_token :string;
}


export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({


    getOrders: builder.query<any, any>({
      query() {
        return {
          url: 'tcp',
          // credentials: 'include',
          // params:{
          // _limit:10
          // }
        };
      },
    }),

    registerUser: builder.mutation<any, IRegisterInput>({
      query(data) {
        return {
          url: 'users/register',
          method: 'POST',
          body: data,
        };
      }
    }),
    loginUser: builder.mutation<
        ILoginResponse | IServerError,
        ILoginInput
    >({
      query(data:ILoginInput) {
        return {
          url: 'users/login',
          method: 'POST',
          body: data,
          credentials: 'include',
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          const loginResponse = result.data as ILoginResponse;
          const accessToken = loginResponse.access_token;
          localStorage.setItem('token', accessToken);
          await dispatch(userApi.endpoints.getMe.initiate(null));
        } catch (error) {
          console.error('Login error:', error);
          return error;
        }
      },
    }),
    // logoutUser: builder.mutation<void, void>({
    //   query() {
    //     return {
    //       url: 'auth/logout',
    //       credentials: 'include',
    //       method: 'POST',
    //     };
    //   },
    //   async onQueryStarted(args, { dispatch, queryFulfilled }) {
    //     try {
    //       const result = await queryFulfilled;
    //       localStorage.removeItem('token');
    //       await dispatch(setUser());
    //     } catch (error) {
    //       console.error('Login error:', error);
    //       return error;
    //     }
    //   },
    // }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  // useLogoutUserMutation,
} = authApi;

