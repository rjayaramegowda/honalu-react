import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Profile } from "../../models/profile.model";

export const profilesApi = createApi({
  reducerPath: "profilesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004/" }),
  tagTypes: ["Profile"],
  endpoints: (builder) => ({
    profiles: builder.query<Profile[], void>({
      query: () => "/profiles",
      providesTags: ["Profile"],
    }),
    // profile: builder.query<Profile, number>({
    //   query: (id) => `/profiles/${id}`,
    // }),
    // deleteProfile: builder.mutation<void, number>({
    //   query(id) {
    //     return {
    //       url: `profiles/${id}`,
    //       method: "DELETE",
    //     };
    //   },
    //   invalidatesTags: ["Profile"],
    // }),
    // addProfile: builder.mutation<void, Profile>({
    //   query(profile) {
    //     return {
    //       url: `profiles`,
    //       method: "POST",
    //       body: profile,
    //     };
    //   },
    //   invalidatesTags: ["Profile"],
    // }),
  }),
});

export const {
  useProfilesQuery,
  // useProfileQuery,
  // useDeleteProfileMutation,
  // useAddProfileMutation,
} = profilesApi;
