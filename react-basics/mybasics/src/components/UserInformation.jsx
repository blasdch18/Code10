import hotel from "../assets/images/hotel.png";
import link from "../assets/images/link.png";
import pin from "../assets/images/pin.png";
import profile from "../assets/images/profile.jpeg";
//import search from "../assets/images/search.png";
//import sun from "../assets/images/sun.png";
import twitter from "../assets/images/twitter.png";



function UserInformation(props) {
    const {user} = props;
    return(
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
    );
}
export default UserInformation;