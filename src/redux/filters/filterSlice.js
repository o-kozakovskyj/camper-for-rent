import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  equipment: [],
  type: '',
  mode : "dark"
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilters(state, { payload }) {
      return payload;
    },
    changeMode(state, { payload }) {
       state.mode = payload
    }
  },
});

const filtersReducer = filtersSlice.reducer;
export default filtersReducer;

const {changeMode: changeModeActions, changeFilters: changeFiltersAction,  } =
  filtersSlice.actions;
export { changeFiltersAction, changeModeActions };