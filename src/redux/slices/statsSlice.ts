import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { statsAPI } from "../../api/stats-api";
import { ILinkStatistics, TOrder } from "../../types/types";

export const initialState = {
	statistics: [] as Array<ILinkStatistics>,
	currentPage: 0,
	pageSize: 10,
	order: 'asc_target' as TOrder,
	totalCount: -1 as number,
	isFetching: false,
	error: null as string | null
}

export const statsSlice = createSlice({
	name: 'stats',
	initialState,
	reducers: {
		setCurrentPage: (state, action: PayloadAction<number>) => {
			state.currentPage = action.payload
		},
		setPageSize: (state, action: PayloadAction<number>) => {
			state.pageSize = action.payload
		},
		setIsFetching: (state, action: PayloadAction<boolean>) => {
			state.isFetching = action.payload
		},
		setOrder: (state, action: PayloadAction<TOrder>) => {
			state.order = action.payload
		},
	},
	extraReducers: builder => {
		builder
			.addCase(requestStats.fulfilled, (state, action: PayloadAction<Array<ILinkStatistics>>) => {
				state.statistics = action.payload
			})
			.addCase(getTotalCount.fulfilled, (state, action: PayloadAction<number>) => {
				state.totalCount = action.payload
			})
	}
})

export const requestStats = createAsyncThunk(
	'stats/requireStats',
	async (payload: { currentPage: number, pageSize: number, order?: TOrder }, { dispatch, rejectWithValue }) => {
		const { order, currentPage, pageSize } = payload
		const offset = currentPage * pageSize
		dispatch(setIsFetching(true))
		const res = await statsAPI.getStatistics(offset, pageSize, order)
		//dispatch(getTotalCount()) ---------------very long
		dispatch(setIsFetching(false))
		if (res?.status === 200) {
			return res.data
		} else {
			return rejectWithValue(res?.statusText)
		}
	}
)

export const getTotalCount = createAsyncThunk(
	'main/getTotalCount',
	async (_, { dispatch }) => {
		const res = await statsAPI.getStatistics()
		dispatch(setIsFetching(false))
		if (res?.status === 200) {
			return res.data.length
		} else {
			return -1
		}
	}
)

export const { setCurrentPage, setPageSize, setIsFetching, setOrder } = statsSlice.actions

export default statsSlice.reducer