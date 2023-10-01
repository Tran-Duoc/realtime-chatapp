import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  state: boolean;
}

const initialState: CounterState = {
  state: true,
};
export const stateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    changeState: (state, action) => {
      state.state = action.payload;
    },
  },
});

export const { changeState } = stateSlice.actions;
export default stateSlice.reducer;
