import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import { Profile } from "../../models/profile.model"
import { profilesApi } from "../api/profilesApi";

export interface ProfileSliceState {
  dasboardActivePage: "Recieved" | "Sent" | "Declined" | "Accepted" | "Connect",
  resultData: Profile[];
  filteredData: Profile[];
  dashboardData: Profile[];
  activeProfile: any;
  status: string
}

const initialState: ProfileSliceState = {
  dasboardActivePage: "Sent",
  activeProfile: null,
  resultData: [],
  filteredData: [],
  dashboardData: [],
  status:'idle'
}

// If you are not using async thunks you can use the standalone `createSlice`.
export const profileSlice = createAppSlice({
  name: "profile",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: create => ({
    sortByAge: create.reducer(
      (state, action: PayloadAction<Profile[]>) => {
        state.filteredData = [...action.payload]
      },
    )    ,
    filterDashbaordData: create.reducer(
      (state, action: PayloadAction<Profile[]>) => {
        state.dashboardData = [...action.payload]
      },
    ),
    updateResultData: create.reducer(
      (state, action: PayloadAction<Profile[]>) => {
        console.log(action.payload)
        state.resultData = [...action.payload]
      },
    ),
    setDasboardActivePage: create.reducer(
      (state, action: any) => {
        state.dasboardActivePage = action.payload
      },
    ),
    setActiveProfile: create.reducer(
      (state, action: PayloadAction<Profile>) => {
        state.activeProfile = action.payload
      },
    ),


  }),
  //API
  extraReducers: (builder) => {
    builder
      //add Matches for profiles
      .addMatcher(profilesApi.endpoints.profiles.matchFulfilled, (state, action) => {        
        state.resultData = action.payload;
        state.filteredData = action.payload;
        state.dashboardData = action.payload;
        state.status = "idle";
      })
      .addMatcher(profilesApi.endpoints.profiles.matchPending, (state, action) => {
        state.status = "loading";
      })
      .addMatcher(profilesApi.endpoints.profiles.matchRejected, (state, action) => {
        state.resultData = [];
        state.filteredData = [];
        state.dashboardData = [];
        state.status = "failed";
      });
  },
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectDasboardActivePage: profile => profile.dasboardActivePage,
    selectResultData: profile => profile.resultData,
    selectFilteredData: profile => profile.filteredData,
    selectDashboardData: profile => profile.dashboardData,
    selectActiveProfile: profile => profile.activeProfile,
  },
})

// Action creators are generated for each case reducer function.
export const { sortByAge, updateResultData, filterDashbaordData, setDasboardActivePage, setActiveProfile } =
  profileSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectDasboardActivePage, selectResultData, selectFilteredData, selectDashboardData, selectActiveProfile } = profileSlice.selectors
