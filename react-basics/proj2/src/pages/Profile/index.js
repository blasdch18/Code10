import { useState, useEffect } from "react";
import { getProfile } from "../../services";

const Profile = () => {
    const [ user, setUser ] = useState(null);
    
    const fetchUser = async () => {
        const response = await getProfile();
        setUser(response);
    };

    useEffect( ()=> {
        fetchUser() ;
    }, []);

    return (
        <div>
            {user && (
            <div className="text-center">
                <img 
                    src={user.avatar_url} 
                    className="rounded-circle"
                    width={300} 
                    alt = ""                     
                />
                <a href={user.blog} className="">
                    <h1 className="mt-4">{user.name}</h1>
                </a>
                <p className="mt-3 fw-bold">{user.bio}</p>
            </div>                
            )}
        </div>
    )
};

export default Profile;
