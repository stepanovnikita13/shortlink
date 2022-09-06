import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { mainAPI } from "../../api/main-api"

export interface ISetLinkDataPayload {
	shortLink: string
	targetLink: string
}
export interface IInitialState {
	shortLink: string | null
	targetLink: string | null
	error: string | null
}

export const initialState: IInitialState = {
	shortLink: null,
	targetLink: null,
	error: null
}

export const mainSlice = createSlice({
	name: 'main',
	initialState,
	reducers: {
		setLinkData: (state, action: PayloadAction<ISetLinkDataPayload>) => {
			state.shortLink = action.payload.shortLink
			state.targetLink = action.payload.targetLink
		}
	}
})

export const getShortLink = createAsyncThunk(
	'main/getShortLink',
	async (payload: string, { dispatch, rejectWithValue }) => {
		const res = await mainAPI.squeeze(payload)
		if (res?.status === 200) {
			dispatch(setLinkData({ shortLink: res.data.short, targetLink: res.data.target }))
		} else {
			return rejectWithValue(res?.statusText)
		}
	}
)

export const { setLinkData } = mainSlice.actions

export default mainSlice.reducer