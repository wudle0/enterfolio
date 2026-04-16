import { useState } from "react";
import { Box, Button, Link, Stack, Tooltip, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { site } from "../data/content";
import { TechIcon } from "./TechIcon";

type Entry = {
	id: string;
	period: string;
	org: string;
	role: string[];
	stack: string[];
};

const detailByEntryId: Record<string, string[]> = {
	w1: [
		"디자인시스템 구성 및 정립 [70%]",
		"목업 환경 구축 [100%]",
		"IaaS, PaaS 제품 웹 UI 개발 [75%]",
		"ai 기반 신규 서비스 (LLM) UI 개발 [100%]",
		"* 현업 보안 유지 및 트래픽 관리 이슈로 인해 페이지 바로가기는 제공하지 않습니다.",
	],
	w2: [
		"웹앱 마크업 및 프론트 개발 [70%]",
		"백오피스 프론트 개발 [100%]",
		"자사 홈페이지 개발 [100%]",
		"* 현업 보안 유지 및 트래픽 관리 이슈로 인해 페이지 바로가기는 제공하지 않습니다.",
	],
	w3: [
		"논문 플랫폼 검색 모듈",
		"세무사무소 신고 자동화 플랫폼",
		"가구사 이벤트 페이지",
		"공기관 PC 메신저",
		"공기관 정책 테스트",
		"* 현업 보안 유지 및 트래픽 관리 이슈로 인해 페이지 바로가기는 제공하지 않습니다.",
	],
	p1: ["기획 및 정책 제작 [40%]", "웹 개발 [100%]", "웹뷰 앱 제작 [100%]", "* homewhere.pages.dev"],
	p2: [
		"기획 및 정책 제작 [100%]",
		"웹 개발 [100%]",
		"* 보안 유지 및 트래픽 관리 이슈로 인해 페이지 바로가기는 제공하지 않습니다.",
	],
	p3: [
		"기획 및 정책 제작 [100%]",
		"웹 개발 [100%]",
		"* https://presenttest.netlify.app/",
		"* https://homehobby.netlify.app/",
	],
};

function TimelineBlock({ entries }: { entries: Entry[] }) {
	const [openId, setOpenId] = useState<string | null>(null);

	return (
		<Stack spacing={4}>
			{entries.map((e) => {
				const open = openId === e.id;
				return (
					<Box key={e.id} component="article" className="experience-entry">
						<Stack
							direction={{ xs: "row", sm: "column" }}
							alignItems={{ xs: "center", sm: "flex-start" }}
							spacing={1}
							className="experience-meta">
							<Box aria-hidden className="experience-dot" />
							<Typography component="time" className="experience-period">
								{e.period}
							</Typography>
						</Stack>
						<Box className="experience-panel">
							<Typography className="experience-org">{e.org}</Typography>
							{e.role.map((line) => (
								<Typography key={line} className="experience-role">
									{line}
								</Typography>
							))}
							<Stack direction="row" flexWrap="wrap" gap={0.5} className="experience-stack">
								{e.stack.map((name) => (
									<Tooltip key={name} title={name} arrow enterDelay={150}>
										<Box component="span" sx={{ display: "inline-flex" }}>
											<TechIcon name={name} size={36} />
										</Box>
									</Tooltip>
								))}
							</Stack>
							<Button
								type="button"
								onClick={() => setOpenId(open ? null : e.id)}
								aria-expanded={open}
								className="experience-detail-btn"
								startIcon={
									<ExpandMoreIcon
										className={
											open
												? "experience-expand-icon experience-expand-icon--open"
												: "experience-expand-icon"
										}
									/>
								}>
								주요 업무 내용 보기
							</Button>
							{open ? (
								<Typography className="experience-detail">
									{(
										detailByEntryId[e.id] ?? [
											"상세 업무 내용은 원본 포트폴리오를 참고하거나, 이 영역에 직접 작성하면 됩니다.",
										]
									).map((line) => {
										const isStarLine = line.startsWith("* ");
										const text = isStarLine ? line.slice(2) : line;
										const isUrlLike = /^(https?:\/\/)?[a-z0-9.-]+\.[a-z]{2,}(\/\S*)?$/i.test(text);
										const href = isUrlLike && !text.startsWith("http") ? `https://${text}` : text;

										return (
											<Box
												key={line}
												component="span"
												display="block"
												sx={isStarLine ? { mt: "12px" } : undefined}>
												{isStarLine && isUrlLike ? (
													<Link href={href} target="_blank" rel="noopener noreferrer">
														{text}
													</Link>
												) : isStarLine ? (
													line
												) : (
													`- ${line}`
												)}
											</Box>
										);
									})}
								</Typography>
							) : null}
						</Box>
					</Box>
				);
			})}
		</Stack>
	);
}

export function Experience() {
	const { experience: x } = site;
	return (
		<Box component="section" id="experience" aria-labelledby="exp-heading" className="experience">
			<Typography id="exp-heading" component="h2" className="experience-title">
				{x.title}
			</Typography>
			<Typography className="experience-subtitle">
				{x.lead.map((line) => (
					<Box component="span" key={line} className="experience-subtitle-line">
						{line}
					</Box>
				))}
			</Typography>
			<Typography className="experience-section-label">{x.workLabel}</Typography>
			<TimelineBlock entries={x.work} />
			<Typography className="experience-section-label experience-section-label--spaced">
				{x.projectLabel}
			</Typography>
			<TimelineBlock entries={x.projects} />
		</Box>
	);
}
