import { Box, Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { site } from "../data/content";
import featureOneImg from "../assets/image/img_feature_one.png";
import featureTwoImg from "../assets/image/img_feature_two.png";
import featureThreeImg from "../assets/image/img_feature_three.png";

const featImages = [featureOneImg, featureTwoImg, featureThreeImg];

export function Features() {
	const { features: f } = site;
	return (
		<Box component="section" aria-labelledby="features-heading" className="features">
			<Typography className="features-kicker">{f.kicker}</Typography>
			<Typography id="features-heading" component="h2" className="features-title">
				{f.title}
			</Typography>
			<Grid container spacing={3.5}>
				{f.items.map((item, i) => {
					const imageSrc = featImages[i];
					const thumbClassName =
						imageSrc === featureThreeImg ? "features-thumb features-thumb--feature-three" : "features-thumb";

					return (
						<Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.title}>
							<Card elevation={0} className="features-card">
								<CardContent className="features-card-content">
									<Box className={thumbClassName}>
										<Box
											component="img"
											src={imageSrc}
											alt=""
											loading="lazy"
											decoding="async"
											className="features-thumb-img"
										/>
									</Box>
								<Typography component="h3" className="features-item-title">
									{item.title}
								</Typography>
								<Box className="features-body">
									{Array.isArray(item.body) ? (
										item.body.map((para) => (
											<Typography key={para} component="p" className="features-body-p">
												{para}
											</Typography>
										))
									) : (
										<Typography component="p" className="features-body-p">
											{item.body}
										</Typography>
									)}
								</Box>
								</CardContent>
							</Card>
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
}
