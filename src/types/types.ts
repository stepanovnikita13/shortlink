export type FormInputs = {
	username: string
	password: string
}

export interface ILinkStatistics {
	id: number
	short: string
	target: string
	counter: number
}

export type TOrder = 'asc_short' | 'asc_target' | 'asc_counter' |
	'desc' | 'desc_target' | 'desc_counter'

export type TOrderType = 'asc' | 'desc'

export type TOrderBy = 'short' | 'target' | 'counter'