import apiSlice from "../api/apiSlice";

const profileApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateProfileORCreateProfile: builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          url: "/profile",
          headers: {
            Authorization: `${data?.token}`,
          },
          body: data?.info,
        };
      },
      invalidatesTags: ["Profile"],
    }),

    getSinleProfile: builder.query({
      query: (token) => ({
        url: "/profile",
        headers: {
          Authorization: `${token}`,
        },
      }),
      providesTags: ["Profile"],
    }),
  }),
});

export const {
  useUpdateProfileORCreateProfileMutation,
  useGetSinleProfileQuery,
} = profileApi;
export default profileApi;
