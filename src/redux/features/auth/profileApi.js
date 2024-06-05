import apiSlice from "../api/apiSlice";
import { getAuthToken } from "./authToken";

const profileApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createOrUpdateProfile: builder.mutation({
            query: (data) => {
                const formData = new FormData();
                formData.append("user_name", data.user_name);
                formData.append("bio", data.bio);
                formData.append("birthday", data.birthday);
                formData.append("file", data.file);

                return {
                    method: 'POST',
                    url: "/profile",
                    headers: {
                        Authorization: `Bearer ${getAuthToken()}`,
                    },
                    body: formData,
                };
            },
            invalidatesTags: ["Profile"],
        }),
        getProfile: builder.query({
            query: () => ({
                url: "/profile",
                headers: {
                    Authorization: `Bearer ${getAuthToken()}`,
                },
            }),
            providesTags: ["Profile"],
        }),
    })
});

export const { useCreateOrUpdateProfileMutation, useGetProfileQuery } = profileApi;
export default profileApi;
