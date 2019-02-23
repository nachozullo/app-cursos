import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from "./Components/Header";
import Curso from "./Components/Curso";
import ListaCursos from "./Components/ListaCursos";
import ListaAlumnos from "./Components/ListaAlumnos";
import FormCursoNuevo from "./Components/FormCursoNuevo"
import Footer from "./Components/Footer"

function Error() {
    return (
        <div>
           <h1>404</h1>
            <h3>Not Found</h3>
        </div>
    )
}

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={ListaCursos} exact />
                    <Route path="/cursos/nuevo" component={FormCursoNuevo} exact />
                    <Route path="/cursos/:id" component={Curso} exact />
                    <Route path="/alumnos" component={ListaAlumnos} exact />
                    <Route component={Error} />
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>

    );
  }
}

export default App;
