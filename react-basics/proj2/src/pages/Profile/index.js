import { useState, useEffect } from "react";
import { get, getProfile } from "../../services";

const Profile = () => {
    const [ user, setUser ] = useState(null);

    const [tasks, setTask] = useState(null);
    
    const fetchUser = async () => {
        const response = await getProfile();
        const listTasks = await get();
        const createdTask = listTasks.filter( (task) => task.status === 1 );
        const doneTask = listTasks.filter( (task) => task.status === 2);

        setTask({
            created: createdTask.length,
            done: doneTask.length,
        });
        console.log(listTasks);
        setUser(response);
    };

    useEffect( ()=> {
        fetchUser() ;
    }, []);

    return (
        <div className="container" style={{
            maxWidth: "500px",
        }}>
            <div className="d-flex justify-content-center mt-3">
                <div className="row">
                    <div className="col-12">
                        <h6 className="text-gray">Edit Profile</h6>
                    </div>
                    {user && (
                        <div className="row d-flex gap-15">
                            <div className="col-12 mb-5 text-center">
                                <img 
                                    src={user.avatar_url} 
                                    className="rounded-circle"
                                    width={100} 
                                    alt = ""                     
                                />                                                           
                            </div>
                            <div className="col-6">
                                <label htmlFor="">First Name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value={user.name}
                                />
                            </div>
                            <div className="col-6">
                                <label htmlFor="">Email</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value={user.email}
                                />
                            </div>
                            <div className="col-12 mt-3">
                                <label htmlFor="">Contact Number</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value="+51 952486709"
                                />
                            </div>
                            <div className="col-12 mt-3">
                                <label htmlFor="">Address</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value="Av. siempre viva 123"
                                />
                            </div>
                            <div className="col-6 mt-3">
                                <label htmlFor="">City</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value="ILO"
                                />
                            </div>
                            <div className="col-6 mt-3">
                                <label htmlFor="">State</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value={user.email}
                                />
                            </div>
                            <div className="col-6 mt-3">
                                <label htmlFor="">Zipcode</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value={user.email}
                                />
                            </div>
                            <div className="col-6 mt-3">
                                <label htmlFor="">Country</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value={user.email}
                                />
                            </div>
                            <div className="col-12 mt-3">
                                <label htmlFor="">Password</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value={user.email}
                                />                                          
                            </div> 
                            <div className="col-12 mt-3">
                                <button className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    )}                    
                </div>
            </div>
        </div>
    )
};

export default Profile;
