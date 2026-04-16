import { Box, Typography } from "@mui/material";
import type { SiteData } from "../data/content";

const ORBIT_EMOJIS = ["🌏", "🌟", "💫"] as const;

export function Hero({ site }: { site: SiteData }) {
	const { hero } = site;
	return (
		<Box component="header" id="top" className="hero">
			<Box component="div" className="hero-brand">
				<Box component="div" className="hero-brand-orbit" aria-hidden>
					{ORBIT_EMOJIS.map((emoji) => (
						<Box key={emoji} component="span" className="hero-brand-orbit-node">
							{emoji}
						</Box>
					))}
				</Box>
			</Box>
			<Typography component="h1" className="hero-title">
				<Box component="span" className="hero-title-line">
					{hero.line1}
				</Box>
				<Box component="span" className="hero-title-line">
					{hero.line2Prefix}
					<br />
					<Box component="span" className="hero-highlight">
						{hero.highlight}
					</Box>
					{hero.line2Suffix}
				</Box>
			</Typography>
			<Typography component="p" className="hero-intro">
				{hero.intro.map((line) => (
					<Box component="span" key={line} className="hero-intro-line">
						{line}
					</Box>
				))}
			</Typography>
		</Box>
	);
}
