import { useEffect, useRef, useState } from "react";
import { Box, Link, Stack } from "@mui/material";
import { site } from "../data/content";

const ORBIT_EMOJIS = ["⭐", "✨", "🚀"] as const;

export function SiteNav() {
	const navRef = useRef<HTMLElement | null>(null);
	const [isStuck, setIsStuck] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			const nav = navRef.current;
			if (!nav) return;
			setIsStuck(window.scrollY > 0 && nav.getBoundingClientRect().top <= 8);
		};

		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<Box
			ref={navRef}
			component="nav"
			aria-label="섹션 이동"
			className={isStuck ? "site-nav site-nav--stuck" : "site-nav"}>
			{isStuck ? (
				<Box className="site-nav-train" aria-hidden>
					<Box className="site-nav-train-group">
						{ORBIT_EMOJIS.map((emoji, i) => (
							<Box
								key={emoji}
								component="span"
								className="site-nav-train-car"
								style={{ "--bob-delay": `${i * 0.22}s` } as React.CSSProperties}>
								{emoji}
							</Box>
						))}
					</Box>
				</Box>
			) : null}
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
