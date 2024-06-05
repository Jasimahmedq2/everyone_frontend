import apiSlice from "../api/apiSlice";
import { getAuthToken } from "../auth/authToken";

const followApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFollowStatus: builder.query({
      query: (info) => ({
        url: `/following/isFollow/${info.userId}`,
        headers: {
          Authorization: `${info?.token}`,
        },
      }),
      providesTags: ["Follow"],
    }),
    followUser: builder.mutation({
      query: (info) => ({
        method: "POST",
        url: `/following/follow?id=${info?.userId}`,
        headers: {
          Authorization: `${info?.token}`,
        },
      }),
      invalidatesTags: ["Follow"],
    }),
    unfollowUser: builder.mutation({
      query: (info) => ({
        method: "POST",
        url: `/following/unfollow?id=${info?.userId}`,
        headers: {
          Authorization: `${info?.token}`,
        },
      }),
      invalidatesTags: ["Follow"],
    }),
    getAllFollowers: builder.query({
      query: () => ({
        url: "/following/followers",
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
        },
      }),
      providesTags: ["Follow"],
    }),
    getAllFollowing: builder.query({
      query: () => ({
        url: "/following/following",
        headers: {
          Authorization: `${getAuthToken()}`,
        },
      }),
      providesTags: ["Follow"],
    }),
  }),
});

export const {
  useGetFollowStatusQuery,
  useFollowUserMutation,
  useUnfollowUserMutation,
  useGetAllFollowersQuery,
  useGetAllFollowingQuery,
} = followApi;
