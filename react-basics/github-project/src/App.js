//import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";

import sun from "./assets/icons/sun-icon-15.png";
import git from "./assets/icons/git.png";
import link from "./assets/icons/link.png";
import perfil from "./assets/icons/perfil.png";
import search from "./assets/icons/search.png";
import twitter from "./assets/icons/twitter.png";
import ubi from "./assets/icons/ubi.png";
import perfil_ from "./assets/icons/perfil.jpg";

function App() {
  function saludar() {
    console.log("Hola Mundo");
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
            className="input-search-section-2"
            type="text" 
            placeholder="Search GitHub username..."
          />
        </div>
        <div>
          <button className="btn-search">Search</button>
        </div>
      </div>
      
      <div>
          
      </div>
    
      <div className="profile-content">
      
          <div className="image-profile-content">
            <img width="100" src={perfil_} alt="" />
          </div>
      
            
          <div className="info-profile">
          
            <div className="title-profile">
              <h4>The Octocat</h4>
              <p>Joined 25 Jan 2011</p>
            </div>
      
            <div className="subsection-profile">
              <p className="arroba">@octocat</p>
              <p>This profile has no bio</p>
            </div>
          
            <div className="details-profile">
              <div>
                <h6>Repos</h6>
                <h4>8</h4>
              </div>
              <div>
                <h6>Followers</h6>
                <h4>3938</h4>
              </div>
              <div>
                <h6>Following</h6>
                <h4>9</h4>
              </div>
            </div>
           
            <div className="footer-profile">
              <div>
                <p>
                  <img width="100" src={ubi} alt="" />
                  San Francisco
                </p>
                <p className="httpss">
                  <img width="100" src={link} alt="" />                   
                  https://github.blog
                </p>
              </div>
              <div>
                <p className="twitter-letter">
                  <img width="100" src={twitter} alt="" />
                  Not available
                </p>
                <p>
                  <img width="100" src={git} alt="" />
                  @blasdch18
                </p>
              </div>
            </div>
          </div>
</div>
</div>
 
  );
}

export default App;
