import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export const Banner = ({ title, subTitle }) => {
	return (
		<Container
			maxWidth="md"
			disableGutters
			sx={{
				border: "1px solid white",
				py: "40px",
				// padding: "20px",
				backgroundColor: "#84DCC6",
				// color: "#ffffff",
				borderRadius: "4px",
				boxShadow: "0px 0px 30px #ffffff",
			}}
		>
			<Typography variant="h2" component="h1" gutterBottom align="center">
				{title}
			</Typography>

			<Typography variant="h5" component="h2" gutterBottom align="center">
				{subTitle}
			</Typography>
		</Container>
	);
};
