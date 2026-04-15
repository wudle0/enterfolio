import { Box, Link, Typography } from "@mui/material";
import { site } from "../data/content";

export function Footer() {
	const { footer: f } = site;
	return (
		<Box component="footer" className="footer">
			<Typography className="footer-lines">
				{f.lines.map((line) => (
					<Box component="span" key={line} className="footer-line">
						{line}
					</Box>
				))}
			</Typography>
			<Box className="footer-grid">
				<Typography variant="caption" className="footer-label">
					{f.emailLabel}
				</Typography>
				<Typography className="footer-email">{f.email}</Typography>
				<Typography variant="caption" className="footer-label footer-label--spaced">
					{f.ghLabel}
				</Typography>
				<Link href={f.ghHref} target="_blank" rel="noopener noreferrer" className="footer-link">
					{f.ghUser}
				</Link>
			</Box>
		</Box>
	);
}
