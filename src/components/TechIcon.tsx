import { Box, type SxProps, type Theme } from "@mui/material";
import { skillSrc } from "../data/assets";

type Props = {
	name: string;
	size?: number;
	sx?: SxProps<Theme>;
};

export function TechIcon({ name, size = 48, sx }: Props) {
	const src = skillSrc[name];
	if (!src) return null;
	return (
		<Box
			component="img"
			src={src}
			alt={name}
			loading="lazy"
			decoding="async"
			className="pf-tech-icon"
			style={{ width: size, height: size }}
			sx={sx}
		/>
	);
}
