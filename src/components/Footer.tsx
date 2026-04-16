import { Box, Typography } from "@mui/material";
import type { SiteData } from "../data/content";

export function Footer({ site }: { site: SiteData }) {
	const { footer: f } = site;
	return (
		<Box component="footer" className="footer">
			<Typography className="footer-lines">
				{f.lines.map((line) => (
					<Box component="span" key={line} className="footer-line">
						{line}
						<br />
					</Box>
				))}
			</Typography>
			<Box className="footer-grid">
				<Typography variant="caption" className="footer-label">
					{f.emailLabel}
				</Typography>
				<Typography className="footer-email">{f.email}</Typography>
			</Box>
		</Box>
	);
}
