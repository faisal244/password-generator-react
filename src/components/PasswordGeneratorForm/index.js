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

export const PasswordGeneratorForm = ({ title }) => {
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
				<form>
					<Box>
						<TextField
							fullWidth
							id="outlined-basic"
							label="Password Length"
							variant="outlined"
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
											checked={false}
											onChange={() => {}}
											name="gilad"
										/>
									}
									label="Contains lowercase"
								/>
								<FormControlLabel
									control={
										<Checkbox
											checked={false}
											onChange={() => {}}
											name="jason"
										/>
									}
									label="Contains uppercase"
								/>
								<FormControlLabel
									control={
										<Checkbox
											checked={false}
											onChange={() => {}}
											name="antoine"
										/>
									}
									label="Contains numbers"
								/>
								<FormControlLabel
									control={
										<Checkbox
											checked={false}
											onChange={() => {}}
											name="antoine"
										/>
									}
									label="Contains special characters"
								/>
							</FormGroup>
							<FormHelperText>
								Please select a minimum of 2 options
							</FormHelperText>
						</FormControl>
					</Box>
					<Box sx={{ textAlign: "center" }}>
						<Button variant="contained" startIcon={<LockOpenIcon />}>
							Generate Password
						</Button>
					</Box>
				</form>
			</Container>
		</Container>
	);
};

// stopped watching video at 01:23:23
