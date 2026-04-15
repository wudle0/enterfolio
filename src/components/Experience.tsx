import { useState } from "react";
import { Box, Button, Stack, Tooltip, Typography } from "@mui/material";
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
									상세 업무 내용은 원본 포트폴리오를 참고하거나, 이 영역에 직접 작성하면 됩니다.
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
