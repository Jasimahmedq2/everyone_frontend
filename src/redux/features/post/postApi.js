import apiSlice from "../api/apiSlice";

const postApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createPost: builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          url: "/post",
          headers: {
            Authorization: `${data?.token}`,
          },
          body: data?.info,
        };
      },
      invalidatesTags: ["Posts"],
    }),
    updatePullVote: builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          url: `/post/pull?post_id=${data?.post_id}&pull_id=${data?.pull_id}`,
          headers: {
            Authorization: `${data?.token}`,
          },
          body: data?.info,
        };
      },
      invalidatesTags: ["Posts"],
    }),
    getAllFeedPosts: builder.query({
      query: (token) => ({
        url: "/post",
        headers: {
          Authorization: `${token}`,
        },
      }),
      providesTags: ["Posts"],
    }),
  }),
});

export const { useCreatePostMutation, useGetAllFeedPostsQuery, useUpdatePullVoteMutation } = postApi;
export default postApi;
