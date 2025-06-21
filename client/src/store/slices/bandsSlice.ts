import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BandMember {
  id: string;
  userId: string;
  bandId: string;
  role: 'admin' | 'member' | 'substitute';
  instrument: string;
  joinDate: string;
}

interface Band {
  id: string;
  name: string;
  description: string;
  logoUrl?: string;
  createdBy: string;
  members: BandMember[];
}

interface BandsState {
  bands: Band[];
  currentBand: Band | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: BandsState = {
  bands: [],
  currentBand: null,
  isLoading: false,
  error: null,
};

const bandsSlice = createSlice({
  name: 'bands',
  initialState,
  reducers: {
    fetchBandsStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchBandsSuccess(state, action: PayloadAction<Band[]>) {
      state.isLoading = false;
      state.bands = action.payload;
    },
    fetchBandsFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    setCurrentBand(state, action: PayloadAction<Band>) {
      state.currentBand = action.payload;
    },
    addBand(state, action: PayloadAction<Band>) {
      state.bands.push(action.payload);
    },
    updateBand(state, action: PayloadAction<Band>) {
      const index = state.bands.findIndex(band => band.id === action.payload.id);
      if (index !== -1) {
        state.bands[index] = action.payload;
      }
      if (state.currentBand?.id === action.payload.id) {
        state.currentBand = action.payload;
      }
    },
    deleteBand(state, action: PayloadAction<string>) {
      state.bands = state.bands.filter(band => band.id !== action.payload);
      if (state.currentBand?.id === action.payload) {
        state.currentBand = state.bands[0] || null;
      }
    },
  },
});

export const {
  fetchBandsStart,
  fetchBandsSuccess,
  fetchBandsFailure,
  setCurrentBand,
  addBand,
  updateBand,
  deleteBand,
} = bandsSlice.actions;

export default bandsSlice.reducer;
