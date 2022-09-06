import { ILinkStatistics } from "../types/types"
import { catchAxios, instance } from "./api"

export const mainAPI = {
	async squeeze(link: string) {
		try {
			const res = await instance.post<ILinkStatistics>(`squeeze?link=${link}`)
			return res
		} catch (err) {
			const errData = catchAxios(err)
			console.log(errData)
		}
	}
}