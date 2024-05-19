import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

function Header() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledAppBar position="static" color="default" elevation={0}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Orders
          </Typography>
        </Toolbar>
      </StyledAppBar>
    </ThemeProvider>
  );
}

export default Header;
