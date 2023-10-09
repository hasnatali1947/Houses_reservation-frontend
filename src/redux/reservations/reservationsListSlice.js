import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const baseUrl = (house_id) => `https://houses-reservation-backend.onrender.com/api/v1/houses/${house_id}/reservations`;

const initialState = {
  reserved: [],
  isLoading: false,
  error: null,
};

export const fetchReservations = createAsyncThunk(
  'reservations/fetchReservations',
  async (house_id) => {
    const response = await fetch(baseUrl(house_id));
    const data = await response.json();
    return data;
  },
);

const reservationsListSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    setReservations(state, action) {
      return { ...state, reserved: [...action.payload] };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchReservations.fulfilled, (state, action) => ({
        ...state,
        reservations: action.payload,
        isLoading: false,
      }));
  },
});

export const { setReservations } = reservationsListSlice.actions;
export default reservationsListSlice.reducer;
