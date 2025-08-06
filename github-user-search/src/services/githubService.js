// src/services/githubService.js
import axios from "axios";

export const fetchUsersData = async ({ username, location, minRepos }) => {
  let query = "";

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>${minRepos}`;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(
    query
  )}`;

  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY || ""}`,
    },
  });

  return response.data.items;
};
