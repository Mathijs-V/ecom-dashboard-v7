import React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const theme = createTheme();

const CardMediaStyled = styled(CardMedia)(({ theme }) => ({
  paddingTop: '56.25%',
}));

const CardHeaderStyled = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
}));

const PostTitle = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  textAlign: 'left',
}));

const PostText = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'baseline',
  fontSize: '12px',
  textAlign: 'left',
  marginBottom: theme.spacing(2),
}));

const Posts = (props) => {
  const { posts } = props;
  if (!posts || posts.length === 0) return <p>Can not find any posts, sorry</p>;
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {posts.map((post) => (
            <Grid item key={post.id} xs={12} md={4}>
              <Card>
                <CardHeaderStyled />
                <CardMediaStyled
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent>
                  <PostTitle gutterBottom variant="h6" component="h2">
                    {post.title.substr(0, 50)}...
                  </PostTitle>
                  <PostText>
                    <Typography variant="body2" color="textSecondary">
                      {post.excerpt.substr(0, 60)}...
                    </Typography>
                  </PostText>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Posts;
