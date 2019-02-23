import React, { Component } from 'react';
import Alumno from "./Alumno";


class Curso extends Component {
    constructor() {
        super()
        this.state = {
            curso: {}
        }
        this.destacado = 0
    }


    componentDidMount(){
        fetch("http://localhost:3001/api/cursos/" + this.props.match.params.id)
            .then(res => res.json())
            .then((data) => {

                this.setState({
                    curso: data
                })

            })
    }

    render(){
        return (
            <div>
                <div style={{backgroundColor: "#F2F2F2", paddingTop:15}}>
                <h1 style={{fontFamily: "Rubik",textAlign: "center"}}> Curso</h1>
                <div style={{textAlign: "center", fontFamily:"Open Sans", color:"grey"}}>
                    <h5>Año: {this.state.curso.año}</h5>
                    <h5>Tema: {this.state.curso.tema}</h5>
                    <h5>Duracion: {this.state.curso.duracion}</h5>
                </div>
                    <hr />
                </div>
                {console.log(this.destacado)}
                <h4 style={{marginLeft: 20, color:"grey"}}>Alumnos: </h4>

                {
                        this.state.curso.alumnos
                            ? this.state.curso.alumnos.map(alumno => {
                                return (
                                    <Alumno
                                        key={alumno.dni}
                                        nombre={alumno.nombre}
                                        apellido={alumno.apellido}
                                        dni={alumno.dni}
                                        direccion={alumno.direccion}
                                        nota={alumno.nota}
                                    />
                                )
                            })
                            : <h2>No hay alumnos</h2>
                    }
            </div>
        )
    }
}

export default Curso