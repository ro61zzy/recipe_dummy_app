// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import { mealApi } from './server'; // Import your API slice

export const store = configureStore({
  reducer: {
    [mealApi.reducerPath]: mealApi.reducer,
    // Add other reducers here if needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mealApi.middleware),
});
