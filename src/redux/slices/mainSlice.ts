import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mainAPI } from "../../api/main-api";
import { ILinkStatistics, TOrder } from "../../types/types";

export const initialState = {
	statistics: [] as Array<ILinkStatistics | null>,
	currentPage: 0,
	pageSize: 10,
	error: null as string | null
}

export const mainSlice = createSlice({
	name: 'main',
	initialState,
	reducers: {
		setCurrentPage: (state, action: PayloadAction<number>) => {
			state.currentPage = action.payload
		},
		setPageSize: (state, action: PayloadAction<number>) => {
			state.pageSize = action.payload
		}
	},
	extraReducers: builder => {
		builder
			.addCase(requestStats.fulfilled, (state, action: PayloadAction<Array<ILinkStatistics>>) => {
				state.statistics = action.payload
			})
	}
})

export const requestStats = createAsyncThunk(
	'main/requireStats',
	async (payload: { order?: TOrder, currentPage: number, pageSize: number }, { dispatch, rejectWithValue }) => {
		const { order, currentPage, pageSize } = payload
		const res = await mainAPI.getStatistics(currentPage, pageSize, order)
		if (res?.status === 200) {
			return res.data
		} else {
			return rejectWithValue(res?.statusText)
		}
	}
)

export const { setCurrentPage, setPageSize } = mainSlice.actions

export default mainSlice.reducer