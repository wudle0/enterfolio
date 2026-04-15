export const site = {
	title: "우성민 | 퍼블리셔",
	hero: {
		line1: "안녕하세요,",
		line2Prefix: "프론트엔드 개발자 ",
		highlight: "우성민",
		line2Suffix: "입니다.",
		intro: ["프론트엔드 기술을 바탕으로 UI를 개발합니다."],
	},
	nav: [
		{ href: "#skill", label: "기술" },
		{ href: "#experience", label: "경력" },
		{ href: "#education", label: "학력 및 자격증" },
	],
	features: {
		kicker: "핵심 역량",
		title: "창의적인 아이디에이션과 명료한 시스템 구축",
		items: [
			{
				title: "모던 프론트엔드 개발",
				body: [
					"React.js/Vue.js를 이용한 프론트엔드 개발경험이 있으며, Javascript(ES6), typescript에 능숙합니다.",
					"또한 MUI, antd 등의 UI 라이브러리 사용 경험이 있습니다.",
				],
			},
			{
				title: "차트 시각화 및 디자인 시스템",
				body: [
					"데이터 시각화를 위한 chart.js, echarts 등의 라이브러리 사용이 능숙합니다.",
					"또한 컴포넌트 중심의 디자인 시스템 구축 경험이 있습니다.",
				],
			},
			{
				title: "커뮤니케이션 및 협업",
				body: [
					"Github,GitLab 등을 이용한 DVCS 경험과 Jira, Slack, Notion 등의 커뮤니케이션 툴 사용 경험을 통해 원활한 협업을 이룹니다.",
				],
			},
		],
	},
	skills: {
		title: "기술 스택 및 도구",
		subtitle: "아래의 기술을 사용할 수 있습니다.",
		tabs: ["프론트엔드", "라이브러리", "환경 및 배포", "디자인"] as const,
		byTab: {
			프론트엔드: ["HTML5", "CSS3", "Javascript", "typescript", "React.js", "Vue.js", "Scss"],
			라이브러리: [
				"Redux",
				"Recoil",
				"Vuex",
				"Pinia",
				"MUI",
				"ant-design",
				"jQuery",
				"Chart.js",
				"Echarts",
				"Lottie",
			],
			"환경 및 배포": ["Webpack", "GitHub", "GitLab", "CloudFlare", "Vite"],
			디자인: ["Figma", "XD", "Zeplin", "Photoshop", "Illustrator"],
		},
	},
	experience: {
		title: "경력 사항",
		lead: ["다양한 업무와 프로젝트를 통해 경험과 노하우를 쌓고 있습니다."],
		workLabel: "업무 경험",
		projectLabel: "프로젝트",
		work: [
			{
				id: "w1",
				period: "2024 - 2025",
				org: "오케스트로 주식회사",
				role: ["솔루션 전략 본부"],
				stack: [
					"React.js",
					"Vue.js",
					"Javascript",
					"typescript",
					"Webpack",
					"MUI",
					"ant-design",
					"confluence",
				],
			},
			{
				id: "w2",
				period: "2022 - 2024",
				org: "케어네이션 주식회사",
				role: ["개발팀"],
				stack: ["React.js", "Redux", "Vue.js", "Pinia", "Javascript", "typescript", "GitLab"],
			},
			{
				id: "w3",
				period: "2021 - 2022",
				org: "비엔시스템",
				role: ["개발팀"],
				stack: ["HTML5", "CSS3", "Javascript", "XD"],
			},
		],
		projects: [
			{
				id: "p1",
				period: "2025 - 2026",
				org: "우리집은 어디에",
				role: ["자취방 체크리스트 기록 프로젝트"],
				stack: ["React.js", "typescript", "Vite", "Figma"],
			},
			{
				id: "p2",
				period: "2023",
				org: "EUROVENT",
				role: ["건축자재 브랜드 웹사이트 개발"],
				stack: ["Vue.js", "Javascript", "Google Analytics"],
			},
			{
				id: "p3",
				period: "- 2022",
				org: "심리테스트 프로젝트",
				role: ["https://presenttest.netlify.app/,https://homehobby.netlify.app/"],
				stack: ["HTML5", "CSS3", "Javascript"],
			},
		],
	},
	education: {
		title: "교육 및 자격증",
		schools: [
			{
				when: "2014 - 2018",
				school: "한양대학교",
				major: "문화인류학 전공",
				bullets: [] as string[][],
			},
		],
		scores: [
			{ when: "2020.12.31", label: "컴퓨터그래픽스 운용", value: "기능사" },
			{ when: "2020.12.24", label: "웹디자인", value: "기능사" },
			{ when: "2020.10.16", label: "GTQ(Photoshop)", value: "1급" },
			{ when: "2020.10.16", label: "GTQ(Illustrator)", value: "1급" },
		],
	},
	footer: {
		lines: ["감사합니다.", " 더 궁금한 점이 있다면", " 편하게 연락주세요."],
		emailLabel: "이메일",
		email: "wudle.001@gmail.com",
		ghLabel: "Github",
		ghUser: "@",
		ghHref: "https://github.com/MeganMagic",
	},
};
