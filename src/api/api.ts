import axios, { AxiosError } from 'axios'

export const instance = axios.create(
	{
		baseURL: 'http://79.143.31.216/',
	}
)

export const catchAxios = <D>(err: unknown) => {
	if (axios.isAxiosError(err)) {
		const error = err as AxiosError<D>
		return error.response
	} else {
		console.log('Unknown error!')
	}
}

export const setAuthToken = (token: string) => {
	instance.defaults.headers.common['authorization'] = getJWTToken(token)

	function getJWTToken(token: string): string {
		return `Bearer ${token}` ?? ''
	}
}
