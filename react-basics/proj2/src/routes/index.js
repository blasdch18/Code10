// Paso 1 importar los componentes de React Router DOM
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Paso 2 importar nuestras vistas
import{ HomeView, LoginView, ProfileView, TaskView, RegisterView } from "../pages";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <HomeView/> }/>
                <Route path="/perfil" element={ <ProfileView/> }/>   
                <Route path="/task/:id" element={ <TaskView/> } />         
                <Route path="/login" element={ <LoginView /> } />
                <Route path="/register" element={ <RegisterView /> } />    
            </Routes>
        </BrowserRouter>
    );
}

export default Router;