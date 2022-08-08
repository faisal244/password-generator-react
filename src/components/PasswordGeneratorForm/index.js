import { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
// import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
// import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { passwordGenerator } from "../../utils/passwordGenerator";

export const PasswordGeneratorForm = ({ title }) => {
	const [passwordLength, setPasswordLength] = useState("");
	const [isLowercase, setIsLowercase] = useState(false);
	const [isUppercase, setIsUppercase] = useState(false);
	const [isNumeric, setIsNumeric] = useState(false);
	const [isSpecial, setIsSpecial] = useState(false);
	const [errorMessage, setErrorMessage] = useState();

	const handlePasswordLengthChange = (event) => {
		const value = event.target.value;
		setPasswordLength(value);
	};

	const handleChangeIsLowercase = () => {
		setIsLowercase(!isLowercase);
	};

	const handleChangeIsUppercase = () => {
		setIsUppercase(!isUppercase);
	};

	const handleChangeIsNumeric = () => {
		setIsNumeric(!isNumeric);
	};

	const handleChangeIsSpecial = () => {
		setIsSpecial(!isSpecial);
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();

		try {
			const generatedPassword = passwordGenerator({
				passwordLength,
				isLowercase,
				isUppercase,
				isNumeric,
				isSpecial,
			});
			setErrorMessage();
			console.log(generatedPassword);
		} catch (error) {
			setErrorMessage(error.message);
		}
	};
	return (
		<Container
			maxWidth="md"
			disableGutters
			sx={{
				border: "1px solid white",
				py: "40px",
				// padding: "20px",
				backgroundColor: "#84DCC6",
				color: "#000000",
				borderRadius: "4px",
				// boxShadow: "0px 0px 30px #ffffff",
			}}
		>
			<Typography variant="h4" component="h2" gutterBottom align="center">
				{title}
			</Typography>

			<Divider />
			<Container maxWidth="sm" sx={{ my: "20px" }}>
				<form onSubmit={handleFormSubmit}>
					<Box>
						<TextField
							fullWidth
							id="outlined-basic"
							label="Password Length"
							variant="outlined"
							value={passwordLength}
							onChange={handlePasswordLengthChange}
						/>
					</Box>
					<Box>
						<FormControl
							required
							error={false}
							component="fieldset"
							sx={{ m: 3 }}
							variant="standard"
						>
							<FormLabel component="legend">Please select 2 or more:</FormLabel>
							<FormGroup>
								<FormControlLabel
									control={
										<Checkbox
											checked={isLowercase}
											onChange={handleChangeIsLowercase}
										/>
									}
									label="Contains lowercase"
								/>
								<FormControlLabel
									control={
										<Checkbox
											checked={isUppercase}
											onChange={handleChangeIsUppercase}
										/>
									}
									label="Contains uppercase"
								/>
								<FormControlLabel
									control={
										<Checkbox
											checked={isNumeric}
											onChange={handleChangeIsNumeric}
										/>
									}
									label="Contains numbers"
								/>
								<FormControlLabel
									control={
										<Checkbox
											checked={isSpecial}
											onChange={handleChangeIsSpecial}
										/>
									}
									label="Contains special characters"
								/>
							</FormGroup>
						</FormControl>
					</Box>
					<Box sx={{ textAlign: "center" }}>
						<Button
							type="submit"
							variant="contained"
							startIcon={<LockOpenIcon />}
						>
							Generate Password
						</Button>
					</Box>
					{errorMessage && (
						<Box>
							<FormHelperText sx={{ textAlign: "center", color: "red" }}>
								{errorMessage}
							</FormHelperText>
						</Box>
					)}
				</form>
			</Container>
		</Container>
	);
};
