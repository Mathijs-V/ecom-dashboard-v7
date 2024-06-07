import React, { useState, useEffect } from 'react';
import axiosInstance from '../axios';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MuiLink from '@mui/material/Link';
import { useSearchParams } from 'react-router-dom';

const PREFIX = 'Search';
const classes = {
  cardMedia: `${PREFIX}-cardMedia`,
  link: `${PREFIX}-link`,
  cardHeader: `${PREFIX}-cardHeader`,
  postTitle: `${PREFIX}-postTitle`,
  postText: `${PREFIX}-postText`
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.cardMedia}`]: {
    paddingTop: '56.25%', // 16:9
  },
  [`& .${classes.link}`]: {
    margin: theme.spacing(1, 1.5),
  },
  [`& .${classes.cardHeader}`]: {
    backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  [`& .${classes.postTitle}`]: {
    fontSize: '16px',
    textAlign: 'left',
  },
  [`& .${classes.postText}`]: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'baseline',
    fontSize: '12px',
    textAlign: 'left',
    marginBottom: theme.spacing(2),
  }
}));

const Search = () => {
  const [searchParams] = useSearchParams();
  const [appState, setAppState] = useState({
    posts: [],
  });

  useEffect(() => {
    const query = searchParams.toString();
    axiosInstance.get(`blog/search/?${query}`).then((res) => {
      const allPosts = res.data;
      setAppState({ posts: allPosts });
    });
  }, [searchParams]);

  return (
    <React.Fragment>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {appState.posts.map((post) => (
            <Grid item key={post.id} xs={12} md={4}>
              <Card>
                <MuiLink
                  color="textPrimary"
                  href={`/post/${post.slug}`}
                  className={classes.link}
                >
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                </MuiLink>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                    className={classes.postTitle}
                  >
                    {post.title.substr(0, 50)}...
                  </Typography>
                  <div className={classes.postText}>
                    <Typography color="textSecondary">
                      {post.excerpt.substr(0, 40)}...
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};
export default Search;
