import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { setAuthToken } from "../../api/api"
import { authAPI } from "../../api/auth-api"

const initialState = {
	isAuth: false,
	initialized: false,
	username: undefined as string | undefined,
	error: null as string | null | unknown
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth: (state, action: PayloadAction<boolean>) => {
			state.isAuth = action.payload
		},
		initialize: state => {
			state.initialized = true
		}
	},
	extraReducers: builder => {
		builder
			.addCase(login.fulfilled, (state, action) => {
				state.username = action.payload
			})
			.addCase(login.rejected, (state, action) => {
				if (action.payload) {
					state.error = action.payload
				} else {
					state.error = action.error
				}
			})
			.addCase(authMe.fulfilled, state => {
				state.initialized = true
			})
	}
})

export const login = createAsyncThunk(
	'auth/login',
	async (payload: { username: string, password: string }, { dispatch, rejectWithValue }) => {
		const res = await authAPI.login(payload.username, payload.password)
		if (res?.status === 200) {
			const token = res.data.access_token as string
			localStorage.setItem('accessToken', token)
			dispatch(setAuth(true))
			return payload.username
		} else {
			return rejectWithValue(res.data.detail)
		}
	}
)

export const logout = createAsyncThunk(
	'auth/logout',
	(_, { dispatch, rejectWithValue }) => {
		const token = localStorage.getItem('accessToken')
		if (token) {
			localStorage.removeItem('accessToken')
			dispatch(setAuth(false))
		} else {
			return rejectWithValue('You are not autorized!')
		}
	}
)

export const register = createAsyncThunk(
	'auth/register',
	async (payload: { username: string, password: string }, { dispatch, rejectWithValue }) => {
		const { username, password } = payload
		const res = await authAPI.register(username, password)
		if (res?.status === 200) {
			dispatch(login(payload))
		} else {
			return rejectWithValue(res?.data.detail)
		}
	}
)

export const authMe = createAsyncThunk(
	'auth/me',
	(_, { dispatch }) => {
		const token = localStorage.getItem('accessToken')
		if (token) {
			dispatch(setAuth(true))
			setAuthToken(token)
		}
	}
)

export const { setAuth, initialize } = authSlice.actions
export default authSlice.reducer