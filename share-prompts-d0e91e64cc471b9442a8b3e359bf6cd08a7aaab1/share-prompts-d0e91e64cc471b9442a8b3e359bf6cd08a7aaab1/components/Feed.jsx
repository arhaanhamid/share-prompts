"use client";

import { useState, useEffect } from "react";

import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleTagChange = (e) => {
    setSearchText(e);
  };

  const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();
    setPosts(data);
  };

  // useEffect for fetching all posts
  useEffect(() => {
    fetchPosts();
  }, []);

  // useEffect for Searching tag/username/email/prompt
  useEffect(() => {
    const searchedPosts = posts.filter((post) => {
      const fullPost =
        post.creator.email + post.creator.username + post.prompt + post.tag;
      const regex = new RegExp(searchText, "i");
      return regex.test(fullPost);
    });

    setFilteredPosts(searchedPosts);
  }, [searchText]);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Seach for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList
        data={searchText === "" ? posts : filteredPosts}
        handleTagClick={handleTagChange}
      />
    </section>
  );
};

export default Feed;
