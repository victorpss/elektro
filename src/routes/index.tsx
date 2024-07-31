import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Celular from "../pages/Celular";
import Entrar from "../pages/Entrar";
import NaoLogado from "../pages/NaoLogado";
import Pesquisa from "../pages/Pesquisa";
import TV from "../pages/TV";

export default function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path='/'/>
                <Route element={<Celular/>} path='/celular'/>
                <Route element={<Entrar/>} path='/entrar'/>
                <Route element={<NaoLogado/>} path='/naologado'/>
                <Route element={<Pesquisa/>} path='/pesquisa'/>
                <Route element={<TV/>} path='/tv'/>
            </Routes>
        </BrowserRouter>
    );
}