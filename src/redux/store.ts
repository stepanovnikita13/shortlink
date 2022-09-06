import { configureStore } from '@reduxjs/toolkit'
import auth from './slices/authSlice'
import stats from './slices/statsSlice'
import main from './slices/mainSlice'

export const store = configureStore({
	reducer: { auth, stats, main }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch