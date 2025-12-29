import {createApi} from "@reduxjs/toolkit/query/react";
import baseQuery from "./baseQuery";


export const authApi = createApi({
    reducerPath : 'authApi',
    baseQuery,
    endpoints: (builder) => ({
        register :  builder.mutation({
            query:(body) => ({
                url : "/auth/register",
                method : "post",
                body,
            })
        }),
        login : builder.mutation({
            query : (body) => ({
                url : "/auth/login",
                method : "post",
                body,
            })
        }),
        me : builder.query({
            query: () => '/auth/me',
        }),
    })
})
export const { useRegisterMutation  , useMeQuery , useLoginMutation } = authApi