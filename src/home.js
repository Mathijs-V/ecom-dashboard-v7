import React, { useEffect, useState } from 'react';
import Posts from './components/Posts';
import PostLoadingComponent from './components/postLoading';

function Home() {
    const PostLoading = PostLoadingComponent(Posts);
    const [appState, setAppState] = useState({
        loading: false,
        posts: null,
    });

    useEffect(() => {
        setAppState({ loading: true });
        const apiUrl = 'http://127.0.0.1:8000/api/';
        fetch(apiUrl)
            .then((response) => response.json())
            .then((posts) => {
                setAppState({ loading: false, posts: posts });
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setAppState({ loading: false, posts: null });
            });
    }, []);

    return (
        <div className='App'>
            <h1>Latest orders</h1>
            <PostLoading isLoading={appState.loading} posts={appState.posts} />
        </div>
    );
}

export default Home;
