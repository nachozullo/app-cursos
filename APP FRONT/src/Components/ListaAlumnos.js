import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from "react-router-bootstrap";
import Alumno from "./Alumno";

class ListaAlumnos extends Component {
    constructor() {
        super()
        this.state = {
            alumnos: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:3001/api/clientes")
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    alumnos: data
                })
            })
    }

    render(){
        let alumnos =  this.state.alumnos.map(alumno => {
                return (
                    <Alumno
                        nombre={alumno.nombre}
                        apellido={alumno.apellido}
                        dni={alumno.dni}
                        direccion={alumno.direccion}
                        nota={alumno.nota}
                    />
                )
            }
        )

        return (
            <div>
                {alumnos}
            </div>
        )
    }

}

export default ListaAlumnos