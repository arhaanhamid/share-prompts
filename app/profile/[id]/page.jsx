"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
  const [posts, setPosts] = useState([]);
  const { data: session } = useSession();
  const [userName, setUserName] = useState();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();

      setPosts(data);
      setUserName(data[0].creator.username);
    };

    if (params?.id) fetchPosts();
  }, []);

  return (
    <Profile
      name={session.user.id === params.id ? "My" : userName}
      desc={`Welcome to ${
        session.user.id === params.id ? "your" : userName + "'s"
      } personalized profile...`}
      data={posts}
    />
  );
};

export default UserProfile;
