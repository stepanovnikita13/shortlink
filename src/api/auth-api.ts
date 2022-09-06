import { catchAxios, instance, setAuthToken } from "./api"
import { ILoginData, IRegisterData } from "./api-types"

export const authAPI = {
	async register(username: string, password: string) {
		try {
			const res = await instance.post<IRegisterData>(`register?username=${username}&password=${password}`)
			return res
		} catch (err) {
			const errData = catchAxios<IRegisterData>(err)
			return {
				...errData,
				data: {
					...errData?.data,
					username: null
				}
			}
		}
	},
	async login(username: string, password: string) {
		try {
			const res = await instance.post<ILoginData>(`login`, new URLSearchParams({ username, password }))
			const token = res.data.access_token as string
			setAuthToken(token)
			return res
		} catch (err) {
			const errData = catchAxios<ILoginData>(err)
			return {
				...errData,
				data: {
					...errData?.data,
					access_token: null,
					token_type: null,
				}
			}
		}
	}
}