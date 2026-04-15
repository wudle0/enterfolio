/** devicon SVG (jsDelivr) — https://github.com/devicons/devicon */
const D = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

/** `folder/file.svg` */
function di(folder: string, file: string): string {
	return `${D}/${folder}/${file}`;
}

/** 프로젝트 카드 장식용(이전 shape SVG 대체) */
export const shapes = {
	v0: di("react", "react-original.svg"),
	v1: di("nextjs", "nextjs-original.svg"),
	v3: di("tailwindcss", "tailwindcss-original.svg"),
	v4: di("storybook", "storybook-plain.svg"),
	v5: di("webpack", "webpack-original.svg"),
	v6: di("vite", "vite-original.svg"),
} as const;

/**
 * `TechIcon` / 경력·프로젝트 스택 — 키는 `content.ts` 문자열과 동일해야 함
 * devicon에 없는 항목은 의미상 가까운 아이콘으로 대체
 */
export const skillSrc: Record<string, string> = {
	HTML5: di("html5", "html5-original.svg"),
	CSS3: di("css3", "css3-original.svg"),
	Javascript: di("javascript", "javascript-original.svg"),
	typescript: di("typescript", "typescript-original.svg"),
	"React.js": di("react", "react-original.svg"),
	"Vue.js": di("vuejs", "vuejs-original.svg"),
	Scss: di("sass", "sass-original.svg"),

	Redux: di("redux", "redux-original.svg"),
	Recoil: di("react", "react-original.svg"),
	Vuex: di("vuejs", "vuejs-original.svg"),
	// Pinia devicon CDN 경로는 현재 403이라 Vue 아이콘으로 대체
	Pinia: di("vuejs", "vuejs-original.svg"),
	MUI: di("materialui", "materialui-original.svg"),
	"ant-design": di("antdesign", "antdesign-plain.svg"),
	jQuery: di("jquery", "jquery-original.svg"),
	"Chart.js": di("chartjs", "chartjs-original.svg"),
	Echarts: di("javascript", "javascript-original.svg"),
	Lottie: di("react", "react-original.svg"),

	Webpack: di("webpack", "webpack-original.svg"),
	GitHub: di("github", "github-original.svg"),
	GitLab: di("gitlab", "gitlab-original.svg"),
	CloudFlare: di("cloudflare", "cloudflare-original.svg"),
	"Google Analytics": di("google", "google-original.svg"),
	Vite: di("vite", "vite-original.svg"),

	Figma: di("figma", "figma-original.svg"),
	XD: di("xd", "xd-plain.svg"),
	Zeplin: di("figma", "figma-original.svg"),
	Photoshop: di("photoshop", "photoshop-plain.svg"),
	Illustrator: di("illustrator", "illustrator-plain.svg"),

	"Next.js": di("nextjs", "nextjs-original.svg"),
	"React-hook-form": di("react", "react-original.svg"),
	"Styled-components": di("styledcomponents", "styledcomponents-plain.svg"),
	"Chakra-UI": di("chakraui", "chakraui-plain.svg"),
	Jest: di("jest", "jest-plain.svg"),
	"React-testing-library": di("jest", "jest-plain.svg"),
	Storybook: di("storybook", "storybook-plain.svg"),
	Zustand: di("redux", "redux-original.svg"),
	"Tanstack-query": di("react", "react-original.svg"),
	Antd: di("antdesign", "antdesign-plain.svg"),
	"tailwind css": di("tailwindcss", "tailwindcss-original.svg"),
	"AWS Amplify": di("amazonwebservices", "amazonwebservices-plain-wordmark.svg"),
	"Github, Github workflow": di("github", "github-original.svg"),
};

/** Features 카드 썸네일 — devicon 조합 */
export const features = {
	f1: di("react", "react-original.svg"),
	f2: di("chartjs", "chartjs-original.svg"),
	f3: di("github", "github-original.svg"),
};

/** 블로그 카드 썸네일 — 글 주제에 맞는 devicon */
export const blogThumbs = {
	ts: di("typescript", "typescript-original.svg"),
	antd: di("antdesign", "antdesign-plain.svg"),
	msw: di("jest", "jest-plain.svg"),
};
