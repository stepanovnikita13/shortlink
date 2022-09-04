import { TOrder } from "../types/types"
import { catchAxios, instance } from "./api"
import { IStatisticsData } from "./api-types"

export const mainAPI = {
	async getStatistics(offset: number = 0, limit: number = 0, order: TOrder = 'asc_target') {
		try {
			const res = await instance.get<IStatisticsData>(`statistics?order=${order}&offset=${offset}&limit=${limit}`)
			return res
		} catch (err) {
			const errData = catchAxios(err)
			console.log(errData)
		}
	}
}