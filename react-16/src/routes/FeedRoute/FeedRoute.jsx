import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';

const FeedRoute = () => {
  const [stories, setStories] = useState([]);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [usersFetched, setUsersFetched] = useState(0);

  const getUserPostById = (postUserId) => users.find(user => postUserId === user.id);

  useEffect(() => {
    let getUsers = "https://5e7d0266a917d70016684219.mockapi.io/api/v1/users";
    fetch(getUsers).then((res) => res.json()).then((data) => setUsers(data))
    console.log(setUsers())
  }, []);

  useEffect(() => {
    let getStories = "https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories";
    fetch(getStories).then((res) => res.json()).then((data) => setStories(data))
    console.log(setStories())
  }, [users]);

  useEffect(() => {
    if (usersFetched === users.length) {
      return;
    }

    let getPosts = `https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${users[usersFetched].id}/posts`
    fetch(getPosts).then((res) => res.json()).then(data => {
        setPosts([...posts, ...data]);
        setUsersFetched(usersFetched + 1);
      });

  }, [posts, usersFetched, users]);

  return (
    <div data-testid="feed-route">
      {(users.length > 0 && stories.length > 0) && (
        <Stories
          stories={stories}
          getUserHandler={getUserPostById}
        />
      )}

      {users.length !== usersFetched
        ? (<Loading />)
        : (
          <Posts
            posts={posts}
            getUserHandler={getUserPostById}
          />)
      }
    </div>
  );
};

export default FeedRoute;
