import { GlobalStyles as Styles } from '@mui/material';

export interface IGlobalStylesProps {
}

const GlobalStyles: React.FC<IGlobalStylesProps> = () => {
	return (
		<Styles styles={{
			body: {
				margin: 0,
				fontFamily: `Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
			  Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
			  sansSeri: 'f'`,
				WebkitFontSmoothing: 'antialiased',
				MozOsxFontSmoothing: 'grayscale',
			},
			code: {
				fontFamily: `source-code-pro, Menlo, Monaco, Consolas, Courier New,
		monospace`
			}
		}
		} />
	)
}

export default GlobalStyles