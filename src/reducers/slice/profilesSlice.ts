import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import { Profile } from "../../models/profile.model"
import { profilesApi } from "../api/profilesApi";
import { CasteList, CityList } from "../../models/fileters.model";
import { Authuser } from "../../models/authuser.model";

export interface ProfileSliceState {
  dasboardActivePage: "Recieved" | "Sent" | "Declined" | "Accepted" | "Connect",
  resultData: Profile[];
  filteredData: Profile[];
  dashboardData: Profile[];
  activeProfile: any;
  status: string,
  casteListAll: CasteList[],
  cityListAll: CityList[],
  maritalStatusList: any,
  countryList: any,
  religionList: any,  
  motherTongueList: any
  authuser:any
}

const initialState: ProfileSliceState = {
  dasboardActivePage: "Sent",
  activeProfile: null,
  resultData: [],
  filteredData: [],
  dashboardData: [],
  status:'idle',
  casteListAll: [],
  cityListAll:[],
  maritalStatusList:[],
  countryList: [],
  religionList: [],  
  motherTongueList: [],
  authuser: null
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
    setAuthuser: create.reducer(
      (state, action: PayloadAction<Authuser>) => {
        state.authuser = action.payload
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
      })
      .addMatcher(profilesApi.endpoints.filters.matchFulfilled, (state, action) => {        
        state.casteListAll = action.payload.casteList;        
        state.cityListAll = action.payload.cityList;        
        state.maritalStatusList = action.payload.maritalStatus;
        state.countryList = action.payload.country;        
        state.religionList = action.payload.religion;        
        state.motherTongueList = action.payload.motherTongueList;
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
    selectCasteListAll: profile => profile.casteListAll,
    selectCityListAll: profile => profile.cityListAll,
    selectMaritalStatusList: profile => profile.maritalStatusList,
    selectCountryList: profile => profile.countryList,
    selectReligionList: profile => profile.religionList,
    selectMotherTongueList: profile => profile.motherTongueList,
    selectAuthuser: profile => profile.authuser
  },
})

// Action creators are generated for each case reducer function.
export const { sortByAge, updateResultData, filterDashbaordData, setDasboardActivePage, setActiveProfile, setAuthuser } =
  profileSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectDasboardActivePage, selectResultData, selectFilteredData, selectDashboardData, selectActiveProfile, selectCasteListAll, selectCityListAll, selectMaritalStatusList, selectCountryList, selectReligionList, selectMotherTongueList, selectAuthuser   } = profileSlice.selectors
