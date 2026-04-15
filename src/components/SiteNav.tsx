import { Box, Link, Stack } from "@mui/material";
import { site } from "../data/content";

export function SiteNav() {
	return (
		<Box component="nav" aria-label="섹션 이동" className="site-nav">
			<Link href="#top" aria-label="맨 위로" underline="none" className="site-nav-logo">
				<Box className="site-nav-emoji" aria-hidden>
					🖲️
				</Box>
				<Box className="site-nav-emoji" aria-hidden>
					📄
				</Box>
				<Box className="site-nav-emoji" aria-hidden>
					⛏️
				</Box>
			</Link>
			<Stack
				component="ul"
				direction="row"
				flexWrap="wrap"
				spacing={2.5}
				useFlexGap
				className="site-nav-list">
				{site.nav.map((item) => (
					<Box component="li" key={item.href}>
						<Link href={item.href} underline="none" className="site-nav-link">
							{item.label}
						</Link>
					</Box>
				))}
			</Stack>
		</Box>
	);
}
