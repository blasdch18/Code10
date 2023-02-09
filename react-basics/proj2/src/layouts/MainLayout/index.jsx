import { useNavigate, Outlet, Link } from "react-router-dom";
import { useEffect } from "react";

const MainLayout = () => {
    const history = useNavigate();

    const validateIsLogged = () => {
        const user = JSON.parse(localStorage.getItem("user"));
        if(!user) history("/login");
    };

    useEffect(() => {
        validateIsLogged();
    },[]);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Todo App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link 
                            className="nav-link active" 
                            aria-current="page" to="/perfil"
                            >
                                Perfil
                        </Link>
                    </li>
                    <li className="nav-item">
                    
                    </li>
                   
                </ul>
             
                </div>
            </div>
            </nav>
            <h1></h1>
            <Outlet />
        </div>
    );
};

export default MainLayout;