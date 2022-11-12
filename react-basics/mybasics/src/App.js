import './App.css';
import hotel from "./assets/images/hotel.png";
import link from "./assets/images/link.png";
import pin from "./assets/images/pin.png";
import profile from "./assets/images/profile.jpeg";
import search from "./assets/images/search.png";
import sun from "./assets/images/sun.png";
import twitter from "./assets/images/twitter.png";


//import Header from "./components/Header";
import { useState } from "react";

function App() {
  
  const [ inputText, setInputText ] = useState("");

  const [ user, setUser ] = useState(null);

  function handleInputChange(e) {
    setInputText(e.target.value);
  }

  async function searchUser() {
    try {
      const response = await fetch(`https://api.github.com/users/${inputText}`);
      const data = await response.json();
      setUser(data);

    }
    catch(error){
      console.log("Error",error);
    }
    
  }

  return (
    <div className="container">
        
        <div className="section-1">
            <h4>devfinder</h4>
            <button className="btn-mode" >
              LIGHT <img width="18" src={sun} />
            </button>
        </div>
       
        <div className="section-2">
          <div className="input-section-2">
            <img width="30" src={search} />
            <input 
              value={inputText}
              onChange={handleInputChange}
              className="input-search-section-2"
              type="text" 
              placeholder="Search GitHub username..."
            />
          </div>
          <div>
            <button 
              className="btn-search" 
              onClick={searchUser}
              >Search
            </button>
          </div>
        </div>
    {/* aca podemos hacer validacion donde digamos que el div que sigue
        exista siempre y cuando user tenga datos */}
    {user&& (
      <div className="profile-content">
            
      <div className="image-profile-content">
        <img width="100" src={profile} alt="" />
      </div>
    
        
      <div className="info-profile">
        
        <div className="title-profile">
          <h4>{user?.login}</h4>
          <p>{user?.created_at}</p>
        </div>
       
        <div className="subsection-profile">
          <p className="arroba">@{user?.login}</p>
          <p>{user?.bio}</p>
        </div>
    
        <div className="details-profile">
          <div>
            <h6>Repos</h6>
            <h4>{user?.public_repos}</h4>
          </div>
          <div>
            <h6>Followers</h6>
            <h4>{user?.followers}</h4>
          </div>
          <div>
            <h6>Following</h6>
            <h4>{user?.following}</h4>
          </div>
        </div>
   
        <div className="footer-profile">
          <div>
            <p>
              <img width="100" src={pin} alt="" />
              {user?.location}
            </p>
            <p className="httpss">
              <img width="100" src={hotel} alt="" />                   
              {user?.blog}
            </p>
          </div>
          <div>
            <p className="twitter-letter">
              <img width="100" src={twitter} alt="" />
              {user?.twitter_username}
            </p>
            <p>
              <img width="100" src={link} alt="" />
              @{user?.company}
            </p>
          </div>
        </div>
      </div>

      </div>
    )

    }
  </div>
    
  );
}

export default App;
