import Stack from "@mui/material/Stack";
import { Banner } from "./components/Banner";

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
			<Banner title="Password Generator" subTitle="Protect ya neck" />
			<div>Main</div>
			<div>Footer</div>
		</Stack>
	);
};
