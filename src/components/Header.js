import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { NavLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

function Header() {
	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar
				position="static"
				color="default"
				elevation={0}
				sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
			>
				<Toolbar sx={{ flexWrap: 'wrap' }}>
					<Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
						<Link
							component={NavLink}
							to="/"
							underline="none"
							color="textPrimary"
						>
							Blog
						</Link>
					</Typography>
					<nav>
						<Link
							color="textPrimary"
							component={NavLink}
							to="/register"
							sx={{ my: 1, mx: 1.5 }}
						>
							Register
						</Link>
					</nav>
					<Button
						color="primary"
						variant="outlined"
						component={NavLink}
						to="/login"
						sx={{ my: 1, mx: 1.5 }}
					>
						Login
					</Button>
					<Button
						color="primary"
						variant="outlined"
						component={NavLink}
						to="/logout"
						sx={{ my: 1, mx: 1.5 }}
					>
						Logout
					</Button>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}

export default Header;