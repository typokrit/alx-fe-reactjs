// src/components/Search.jsx
import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await fetchUserData(query);
      setUser(data);
    } catch (error) {
      setError("Looks like we can't find the user");
      console.error(error); // optional: logs real error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: "10px", width: "100%" }}
        />
        <button type="submit" style={{ marginTop: "10px", padding: "10px" }}>
          Search
        </button>
      </form>

      <div style={{ marginTop: "20px" }}>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {user && (
          <div>
            <img src={user.avatar_url} alt="avatar" width={100} />
            <h2>{user.name || user.login}</h2>
            <a href={user.html_url} target="_blank" rel="noreferrer">
              Visit GitHub Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
