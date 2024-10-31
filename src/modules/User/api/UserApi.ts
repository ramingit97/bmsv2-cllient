import { createApi } from '@reduxjs/toolkit/query/react'
import {baseQueryWithReauth} from "../../../common/store/axios";
import {IUserResponse} from "../../../common/types/users.types";
import {setUser} from "../../Auth/api/reducers/AuthSlice";

export const userApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    // getUsers: build.query<IUser[], number>({
    //   query: (limit:number=5) => ({
    //     url: 'users',
    //     params:{
    //         _limit:limit
    //     }
    // }),
    // }),
    getMe: build.query<IUserResponse, null>({
      query() {
        return {
          url: 'users/me',
          credentials: 'include',
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const data  = await queryFulfilled;
          dispatch(setUser(data.data.user));
        } catch (error) {}
      },
    }),
  }),
})

// export const { useGetUsersQuery } = userApi