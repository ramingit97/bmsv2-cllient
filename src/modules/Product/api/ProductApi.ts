import { createApi } from '@reduxjs/toolkit/query/react'
import {baseQueryWithReauth} from "../../../common/store/axios";
import {IUserResponse} from "../../../common/types/users.types";
import {setUser} from "../../Auth/api/reducers/AuthSlice";

export const productApi = createApi({
  baseQuery: baseQueryWithReauth,
  reducerPath:"products",
  endpoints: (build) => ({
    getProducts: build.query<any, any>({
      query() {
        return {
          url: 'product/all',
          credentials: 'include',
          // params:{
          // _limit:10
          // }
        };
      },
    }),
    productAdd: build.mutation<any, any>({
      query(data) {
        const bodyFormData = new FormData();
        console.log('data.file.file',data.file.fileList);
        data.file.fileList.map((file)=>{
          bodyFormData.append('files', file.originFileObj);
        })
        delete data.file;
        for ( let key in data ) {
          bodyFormData.append(key, data[key]);
        }
        return {
          url: 'product/add',
          credentials: 'include',
          method: 'POST',
          body:bodyFormData
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const data  = await queryFulfilled;
          console.log('data',data);
          // dispatch(setUser(data.data.user));

        } catch (error) {}
      },
    }),
  }),
})

export const { 
  useProductAddMutation,
  useGetProductsQuery
 } = productApi