import React, { useEffect, useState } from 'react';
import Posts from './components/Posts';
import PostLoadingComponent from './components/postLoading';
import axiosInstance from './axios';

function Home() {
    const PostLoading = PostLoadingComponent(Posts);
    const [appState, setAppState] = useState({
        loading: true,
        posts: null,
        error: null,
    });

    useEffect(() => {
        const accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            setAppState({ loading: false, posts: null, error: 'You are not authorized to view this content.' });
        } else {
            axiosInstance.get('blog/')
                .then((res) => {
                    const allPosts = res.data;
                    setAppState({ loading: false, posts: allPosts, error: null });
                })
                .catch((error) => {
                    if (error.response && error.response.status === 401) {
                        setAppState({ loading: false, posts: null, error: 'You are not authorized to view this content.' });
                    } else {
                        setAppState({ loading: false, posts: null, error: 'An error occurred while fetching data.' });
                    }
                });
        }
    }, [setAppState]);

    return (
        <div className='App'>
            <h1>Latest orders</h1>
            {appState.error ? (
                <div>{appState.error}</div>
            ) : (
                <PostLoading isLoading={appState.loading} posts={appState.posts} />
            )}
        </div>
    );
}

export default Home;
