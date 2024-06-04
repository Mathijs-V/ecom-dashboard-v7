import React, { useState, useEffect } from 'react';
import axiosInstance from '../axios';
import { useParams } from 'react-router-dom';
// Material-UI
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';

const Paper = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const HeroContent = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

export default function Post() {
  const { slug } = useParams();
  const theme = useTheme();

  const [data, setData] = useState({ posts: [] });

  useEffect(() => {
    axiosInstance.get(slug).then((res) => {
      setData({ posts: res.data });
      console.log(res.data);
    });
  }, [slug]);

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Paper theme={theme}></Paper>
      <HeroContent theme={theme} maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          {data.posts.title}
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          paragraph
        >
          {data.posts.excerpt}
        </Typography>
      </HeroContent>
    </Container>
  );
}
