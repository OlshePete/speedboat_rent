import { configureStore } from '@reduxjs/toolkit'
import speedboatReducer from "./reducers/appReducer";

export const store = configureStore({
  reducer: {
    speedboat: speedboatReducer,
  },
})