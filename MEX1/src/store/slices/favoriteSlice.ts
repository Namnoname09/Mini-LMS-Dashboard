import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoriteState {
  courseIds: string[];
}

const STORAGE_KEY = "lms_favorites";

function loadInitialState(): FavoriteState {
  const stored = localStorage.getItem(STORAGE_KEY);
  return { courseIds: stored ? JSON.parse(stored) : [] };
}

function persist(courseIds: string[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(courseIds));
}

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: loadInitialState(),
  reducers: {
    addFavorite: (state, action: PayloadAction<string>) => {
      if (!state.courseIds.includes(action.payload)) {
        state.courseIds.push(action.payload);
        persist(state.courseIds);
      }
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.courseIds = state.courseIds.filter((id) => id !== action.payload);
      persist(state.courseIds);
    },
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const exists = state.courseIds.includes(action.payload);
      state.courseIds = exists
        ? state.courseIds.filter((id) => id !== action.payload)
        : [...state.courseIds, action.payload];
      persist(state.courseIds);
    },
  },
});

export const { addFavorite, removeFavorite, toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
