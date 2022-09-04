const size = {
	mobileXs: '320px',
	mobileS: '360px',
	mobileM: '375px',
	mobileL: '425px',
	tabletS: '768px',
	tabletL: '1024px',
	laptopS: '1280px',
	laptopM: '1366px',
	laptopL: '1440px',
	desktop: '1920px',
}

const device = {
	mobileXs: `(min-width:${size.mobileXs})`,
	mobileS: `(min-width:${size.mobileS})`,
	mobileM: `(min-width:${size.mobileM})`,
	mobileL: `(min-width:${size.mobileL})`,
	tabletS: `(min-width:${size.tabletS})`,
	tabletL: `(min-width:${size.tabletL})`,
	laptopS: `(min-width:${size.laptopS})`,
	laptopM: `(min-width:${size.laptopM})`,
	laptopL: `(min-width:${size.laptopL})`,
	desktop: `(min-width:${size.desktop})`
}

export default device

export type Device = typeof device