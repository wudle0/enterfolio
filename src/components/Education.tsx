import { Box, Stack, Typography } from "@mui/material";
import { site } from "../data/content";

export function Education() {
	const { education: ed } = site;
	return (
		<Box component="section" id="education" aria-labelledby="edu-heading" className="education">
			<Typography id="edu-heading" component="h2" className="education-title">
				{ed.title}
			</Typography>
			<Stack spacing={4}>
				{ed.schools.map((block) => (
					<Box key={block.when} component="article" className="education-entry">
						<Typography className="education-when">* {block.when}</Typography>
						<Box className="education-panel">
							<Typography className="education-school">{block.school}</Typography>
							<Typography className="education-major">{block.major}</Typography>
							<Box component="ul" className="education-bullets">
								{block.bullets.map((group, gi) => (
									<Box component="li" key={gi} className="education-bullet-group">
										{group.map((line) => (
											<Typography key={line} component="span" className="education-bullet-line">
												{line}
											</Typography>
										))}
									</Box>
								))}
							</Box>
						</Box>
					</Box>
				))}
				{ed.scores.map((s) => (
					<Box key={`${s.when}-${s.label}`} component="article" className="education-entry">
						<Typography className="education-when">* {s.when}</Typography>
						<Box className="education-panel">
							<Typography className="education-score-label">{s.label}</Typography>
							<Typography className="education-score-value">{s.value}</Typography>
						</Box>
					</Box>
				))}
			</Stack>
		</Box>
	);
}
