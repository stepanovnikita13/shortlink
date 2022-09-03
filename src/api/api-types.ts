import { ILinkStatistics } from "../types/types"

export type LoginError = string
export type StatisticsError = {
	loc: Array<string>
	msg: string
	type: string
}

export type ServerError<E> = {
	detail: E
}
export interface ILoginData extends ServerError<LoginError> {
	access_token: string | null
	token_type: string | null
}

export interface IRegisterData extends ServerError<LoginError> {
	username: string | null
}

export type IStatisticsData = Array<ILinkStatistics>