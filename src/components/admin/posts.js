import React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';

const PREFIX = 'Posts';
const classes = {
  cardMedia: `${PREFIX}-cardMedia`,
  link: `${PREFIX}-link`,
  cardHeader: `${PREFIX}-cardHeader`,
  postTitle: `${PREFIX}-postTitle`,
  postText: `${PREFIX}-postText`,
  root: `${PREFIX}-root`,
  container: `${PREFIX}-container`,
};

const Root = styled('div')(({ theme }) => ({
  [`& .${classes.cardMedia}`]: {
    paddingTop: '56.25%', // 16:9
  },
  [`& .${classes.link}`]: {
    margin: theme.spacing(1, 1.5),
  },
  [`& .${classes.cardHeader}`]: {
    backgroundColor:
      theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
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
  },
  [`& .${classes.root}`]: {
    width: '100%',
    overflowX: 'auto',
  },
  [`& .${classes.container}`]: {
    maxHeight: 440,
  },
}));

const Posts = (props) => {
  const { posts } = props;
  if (!posts || posts.length === 0) return <p>Can not find any posts, sorry</p>;
  return (
    <Root>
      <Container maxWidth="md" component="main">
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell align="left">Category</TableCell>
                  <TableCell align="left">Title</TableCell>
                  <TableCell align="left">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {posts.map((post) => (
                  <TableRow key={post.id}>
                    <TableCell component="th" scope="row">
                      {post.id}
                    </TableCell>
                    <TableCell align="left">{post.category}</TableCell>
                    <TableCell align="left">
                      <Link
                        color="textPrimary"
                        href={'/post/' + post.slug}
                        className={classes.link}
                      >
                        {post.title}
                      </Link>
                    </TableCell>
                    <TableCell align="left">
                      <Link
                        color="textPrimary"
                        href={'/admin/edit/' + post.id}
                        className={classes.link}
                      >
                        <EditIcon />
                      </Link>
                      <Link
                        color="textPrimary"
                        href={'/admin/delete/' + post.id}
                        className={classes.link}
                      >
                        <DeleteForeverIcon />
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={4} align="right">
                    <Button
                      href={'/admin/create'}
                      variant="contained"
                      color="primary"
                    >
                      New Post
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </Root>
  );
};

export default Posts;
