import { useState } from "react";
import { Box, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import type { SiteData } from "../data/content";
import { TechIcon } from "./TechIcon";

type Tab = SiteData["skills"]["tabs"][number];

export function SkillStack({ site }: { site: SiteData }) {
	const { skills } = site;
	const [tab, setTab] = useState<Tab>("프론트엔드");
	const list = skills.byTab[tab];

	return (
		<Box component="section" id="skill" aria-labelledby="skill-heading" className="skill">
			<Typography id="skill-heading" component="h2" className="skill-title">
				{skills.title}
			</Typography>
			<Typography className="skill-subtitle">{skills.subtitle}</Typography>
			<Box className="skill-toggle-wrap">
				<ToggleButtonGroup
					className="skill-toggle"
					exclusive
					value={tab}
					onChange={(_, v: Tab | null) => v && setTab(v)}
					aria-label="기술 분류">
					{skills.tabs.map((t) => (
						<ToggleButton key={t} value={t}>
							{t}
						</ToggleButton>
					))}
				</ToggleButtonGroup>
			</Box>
			<Grid container spacing={2.5} role="tabpanel" justifyContent="center">
				{list.map((name) => (
					<Grid key={name} size={{ xs: 4, sm: 3, md: 2 }}>
						<Box className="skill-cell">
							<TechIcon name={name} size={48} />
							<Typography variant="caption" className="skill-label">
								{name}
							</Typography>
						</Box>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
