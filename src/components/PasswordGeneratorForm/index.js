import { useState } from "react";
import Modal from "@mui/material/Modal";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";

import { passwordGenerator } from "../../utils/passwordGenerator";

export const PasswordGeneratorForm = ({ title }) => {
	const [passwordLength, setPasswordLength] = useState("");
	const [isLowercase, setIsLowercase] = useState(false);
	const [isUppercase, setIsUppercase] = useState(false);
	const [isNumeric, setIsNumeric] = useState(false);
	const [isSpecial, setIsSpecial] = useState(false);
	const [errorMessage, setErrorMessage] = useState();
	const [password, setPassword] = useState();
	const [open, setOpen] = useState(false);

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

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

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
			setPassword(generatedPassword);
			handleOpen();
		} catch (error) {
			setErrorMessage(error.message);
		}
	};

	return (
		<Container
			maxWidth="md"
			sx={{
				py: "40px",
				backgroundColor: "#84DCC6",
				color: "#000000",
				borderRadius: "4px",
			}}
		>
			<Modal open={open} onClose={handleClose}>
				<Box
					sx={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						width: 400,
						bgcolor: "background.paper",
						border: "2px solid #000",
						boxShadow: 24,
						p: 4,
					}}
				>
					<Typography variant="h6" component="h2">
						Your Secure Password
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						{password}
					</Typography>
				</Box>
			</Modal>
			<Typography variant="h4" component="h2" gutterBottom align="center">
				{title}
			</Typography>
			<Divider />
			<Container maxWidth="sm" sx={{ my: "20px" }}>
				<form onSubmit={handleFormSubmit}>
					<Box>
						<TextField
							fullWidth
							id="password-length"
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
							<FormLabel component="legend">Select 2 or more</FormLabel>
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
							startIcon={password && open ? <LockIcon /> : <LockOpenIcon />}
						>
							Generate Password
						</Button>
					</Box>
					{errorMessage && (
						<Box sx={{ my: "20px" }}>
							<FormHelperText sx={{ textAlign: "center", color: "#FF686B" }}>
								{errorMessage}
							</FormHelperText>
						</Box>
					)}
				</form>
			</Container>
		</Container>
	);
};
