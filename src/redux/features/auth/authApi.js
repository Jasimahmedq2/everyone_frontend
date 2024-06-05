import apiSlice from "../api/apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/auth/registration",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/auth/login",
        body: data,
      }),
    }),
    authVerify: builder.mutation({
      query: (verifyToken) => ({
        method: "POST",
        url: `/auth/verify/${verifyToken}`,
        body: "",
      }),
    }),
  }),
});

export const { useRegisterMutation, useAuthVerifyMutation, useLoginMutation } =
  authApi;
