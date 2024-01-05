import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface ISearch {
  address: string;
  radius: number;
  activity: string;
}

const initialState: ISearch = {
  address: "",
  radius: 10,
  activity: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    set_address: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    set_radius: (state, action: PayloadAction<number>) => {
      state.radius = action.payload;
    },
    set_activity: (state, action: PayloadAction<string>) => {
      state.activity = action.payload;
    },
  },
});

export const { set_address, set_radius, set_activity } = searchSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAddress = (state: RootState) => state.search.address;
export const selectRadius = (state: RootState) => state.search.radius;
export const selectActivity = (state: RootState) => state.search.activity;

export default searchSlice.reducer;
