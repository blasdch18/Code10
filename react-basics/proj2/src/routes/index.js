// Paso 1 importar los componentes de React Router DOM
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Paso 2 importar nuestras vistas
import{ HomeView, ProfileView } from "../pages";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <HomeView/> }/>
                <Route path="/perfil" element={ <ProfileView/> }/>                
            </Routes>
        </BrowserRouter>
    );
}

export default Router;