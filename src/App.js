import Stack from "@mui/material/Stack";
import { Banner } from "./components/Banner";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";

import { PasswordGeneratorForm } from "./components/PasswordGeneratorForm";

export const App = () => {
	// const isLoggedIn = false;

	// const getStyles = () => {
	// 	return { backgroundColor: isLoggedIn ? "green" : "red" };
	// };

	return (
		<Stack
			direction="column"
			justifyContent="space-evenly"
			alignItems="stretch"
			spacing={8}
			// sx={getStyles()}
			sx={{
				backgroundColor: "#A5FFD6",
				height: "100vh",
			}}
		>
			<Box>
				<Banner title="Password Generator" subTitle="Protect ya neck" />
			</Box>

			<Box>
				<PasswordGeneratorForm title="Please complete password criteria" />
			</Box>
			<div>Footer</div>
		</Stack>
	);
};
