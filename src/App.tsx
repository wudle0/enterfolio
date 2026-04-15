import { Container } from "@mui/material";
import { Hero } from "./components/Hero";
import { SiteNav } from "./components/SiteNav";
import { Features } from "./components/Features";
import { SkillStack } from "./components/SkillStack";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Footer } from "./components/Footer";

function App() {
	return (
		<Container component="main" maxWidth={false} disableGutters className="pf-main">
			<Hero />
			<SiteNav />
			<Features />
			<SkillStack />
			<Experience />
			<Education />
			<Footer />
		</Container>
	);
}

export default App;
