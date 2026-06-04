import { useEffect, useState } from "react";

function Body(){

  const [Profile, setProfile] = useState([]);
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");

  async function searchProfile(username){
    if (!username) {
      setMessage("Please enter a GitHub username to search.");
      setProfile([]);
      return;
    }

    const resp = await fetch(`https://api.github.com/search/users?q=${encodeURIComponent(username)}&per_page=10`);
    const data = await resp.json();

    if (data.items && data.items.length > 0) {
      setProfile(data.items);
      setMessage("");
    } else {
      setProfile([]);
      setMessage("No users found. Try a different username.");
    }
  }

  useEffect(()=>{
    searchProfile("octocat");
  },[])

  return(
    <div className="but">
      <input
        className="inpu"
        type="text"
        placeholder="Search GitHub username"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={() => searchProfile(query)}>Search profile</button>

      {message && <p>{message}</p>}

      <div className="profile">
        {Profile.map((value) => {
          return (
            <div key={value.id} className="cards">
              <img src={value.avatar_url} alt={value.login} />
              <h2>{value.login}</h2>
              <a href={value.html_url} target="_blank" rel="noreferrer">Profile</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Body;