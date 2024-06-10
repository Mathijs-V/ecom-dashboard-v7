import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axios';
import { useNavigate, useParams } from 'react-router-dom';
// MUI v5 imports
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';

const useStyles = styled((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function EditPost() {
  const navigate = useNavigate();
  const { id } = useParams();
  const initialFormData = Object.freeze({
    id: '',
    title: '',
    slug: '',
    excerpt: '',
    content: '',
  });

  const [formData, updateFormData] = useState(initialFormData);

  useEffect(() => {
    axiosInstance.get('blog/admin/edit/postdetail/' + id).then((res) => {
      updateFormData({
        ...formData,
        title: res.data.title,
        excerpt: res.data.excerpt,
        slug: res.data.slug,
        content: res.data.content,
      });
    });
  }, [id]); // Include id in the dependency array

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosInstance.put('blog/admin/edit/' + id + '/', {
      title: formData.title,
      slug: formData.slug,
      author: 1,
      excerpt: formData.excerpt,
      content: formData.content,
    }).then(() => {
      navigate('/admin/');
      window.location.reload();
    });
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div css={useStyles.paper}>
        <Typography component="h1" variant="h5">
          Edit Post
        </Typography>
        <form css={useStyles.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="title"
                label="Post Title"
                name="title"
                autoComplete="title"
                value={formData.title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="excerpt"
                label="Post Excerpt"
                name="excerpt"
                autoComplete="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                multiline
                rows={8}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="slug"
                label="Slug"
                name="slug"
                autoComplete="slug"
                value={formData.slug}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="content"
                label="Content"
                name="content"
                autoComplete="content"
                value={formData.content}
                onChange={handleChange}
                multiline
                rows={8}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            css={useStyles.submit}
          >
            Update Post
          </Button>
        </form>
      </div>
    </Container>
  );
}
