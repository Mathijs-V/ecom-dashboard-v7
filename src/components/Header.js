import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import { NavLink, useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const PREFIX = 'Header';
const classes = {
  appBar: `${PREFIX}-appBar`,
  link: `${PREFIX}-link`,
  toolbarTitle: `${PREFIX}-toolbarTitle`,
  searchInput: `${PREFIX}-searchInput`
};

const Root = styled('div')(({ theme }) => ({
  [`& .${classes.appBar}`]: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  [`& .${classes.link}`]: {
    margin: theme.spacing(1, 1.5),
  },
  [`& .${classes.toolbarTitle}`]: {
    flexGrow: 1,
  },
  [`& .${classes.searchInput}`]: {
    marginRight: theme.spacing(2),
    width: '30%',
  },
}));

function Header() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const goSearch = () => {
    navigate(`/search/?search=${search}`);
  };

  return (
    <Root>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            <Link
              component={NavLink}
              to="/"
              underline="none"
              color="textPrimary"
            >
              Blog
            </Link>
          </Typography>

          <TextField
            className={classes.searchInput}
            variant="outlined"
            size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            InputProps={{
              endAdornment: (
                <IconButton onClick={goSearch}>
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />

          <nav>
            <Link
              color="textPrimary"
              className={classes.link}
              component={NavLink}
              to="/register"
            >
              Register
            </Link>
          </nav>
          <Button
            color="primary"
            variant="outlined"
            className={classes.link}
            component={NavLink}
            to="/login"
          >
            Login
          </Button>
          <Button
            color="primary"
            variant="outlined"
            className={classes.link}
            component={NavLink}
            to="/logout"
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Root>
  );
}

export default Header;
