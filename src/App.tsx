import { useEffect } from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { Container } from "@mui/material";
import { type Role, getSite } from "./data/content";
import { Hero } from "./components/Hero";
import { SiteNav } from "./components/SiteNav";
import { Features } from "./components/Features";
import { SkillStack } from "./components/SkillStack";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Footer } from "./components/Footer";

function Portfolio() {
	const { role } = useParams<{ role: string }>();
	const validRoles: Role[] = ["frontend", "publisher"];
	const resolvedRole: Role = validRoles.includes(role as Role) ? (role as Role) : "frontend";
	const site = getSite(resolvedRole);

	useEffect(() => {
		document.title = site.title;
	}, [site.title]);

	return (
		<Container component="main" maxWidth={false} disableGutters className="pf-main">
			<Hero site={site} />
			<SiteNav site={site} />
			<Features site={site} />
			<SkillStack site={site} />
			<Experience site={site} />
			<Education site={site} />
			<Footer site={site} />
		</Container>
	);
}

export default function App() {
	return (
		<Routes>
			<Route path="/:role" element={<Portfolio />} />
			<Route path="/" element={<Navigate to="/frontend" replace />} />
		</Routes>
	);
}
