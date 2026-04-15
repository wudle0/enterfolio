import { createTheme } from "@mui/material/styles";

/** MUI 컴포넌트 색·글꼴·모양값. ThemeProvider에 필수이며 CssBaseline이 body에도 반영합니다. */
export const theme = createTheme({
	palette: {
		primary: { main: "#2563eb" },
		text: {
			primary: "#222222",
			secondary: "#666666",
		},
		background: {
			default: "#ffffff",
			paper: "#fafafa",
		},
	},
	typography: {
		/* 나눔스퀘어 네오: index.html pstatic CDN과 동일한 @font-face 패밀리명 */
		fontFamily:
			'"NanumSquareNeoVariable", "NanumSquareNeo", -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Malgun Gothic", sans-serif',
		fontSize: 14,
		htmlFontSize: 16,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 700,
		h1: { fontWeight: 800 },
		h2: { fontWeight: 700 },
		h3: { fontWeight: 700 },
	},
	shape: {
		borderRadius: 12,
	},
	components: {
		MuiLink: {
			defaultProps: { underline: "hover" },
		},
	},
});

export const layoutMaxWidth = 1024;
