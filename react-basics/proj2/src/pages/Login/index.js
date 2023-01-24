import { useState  } from "react";
import "./index.css";
import Swal from "sweetalert2";

const Login = () => {
    const [ user, setUser ] = useState({
        email: "",
        password: ""
    });

    const handleInputChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };
    const handleLogin = () => {
        if( !user.email || !user.password ){
            Swal.fire({
                title: "Error",
                text: "Completa el correo y password",
                icon: "error",
            });
        }
        console.log(user);
    }

    return (
        <div className="bg__login">             
            <div 
                className="d-flex justify-content-center align-items-center"
                style={{
                    height: "100vh"
                }}
                >
                    <div className="card text-center p-3 opacity-95">
                        <h1> Login </h1>
                        <div className="form-outline mb-2">
                            <input 
                                type="email" 
                                name="email"
                                value={user.email}
                                className="form-control mt-3" 
                                placeholder="Email"
                                onChange={handleInputChange} />                          
                        </div>
                    
                        <div className="form-outline mb-2">
                            <input 
                                type="password" 
                                name="password"
                                value={user.password}
                                className="form-control mt-3" 
                                placeholder="Password"
                                onChange={handleInputChange} />
                        </div>
                        
                        <div className="row mb-2">
                            <div className="col d-flex justify-content-center">
                            
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                                <label className="form-check-label" for="form2Example31"> Remember me </label>
                            </div>
                            </div>

                            <div className="col">
                        
                            <a href="#!">Forgot password?</a>
                            </div>
                        </div>
                       
                        <button 
                            type="button" 
                            className="btn btn-outline-primary mt-4"
                            onClick={handleLogin}
                        >Sign in</button>
                        {/* 
                        <div className="text-center">
                            <p>Not a member? <a href="#!">Register</a></p>
                            <p>or sign up with:</p>
                            <button type="button" className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-facebook-f"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-google"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-twitter"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-github"></i>
            </button>*/}
                        </div>
                    </div>
            </div>
        
    );
};

export default Login;
