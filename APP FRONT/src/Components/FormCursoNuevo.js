import React, { Component } from 'react';

class FormCursoNuevo extends Component {
    constructor() {
        super();
        this.state = {
            tema: "",
            año: "",
            duracion: "",
            alumnos: [{nombre: "", apellido: "", dni: "", direccion: ""}],
            errores: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleAddAlumno = this.handleAddAlumno.bind(this)
        this.handleAlumnoChange = this.handleAlumnoChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    limpiarFormulario() {
        this.setState({
            tema: "",
            año: "",
            duracion: "",
            alumnos: [{nombre: "", apellido: "", dni: "", direccion: ""}],
            errores: ""
        })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({[name]: value })
    }

    handleAddAlumno() {
        this.setState({
            alumnos: this.state.alumnos.concat({nombre:"", apellido: "", dni:"", direccion: ""})
        })
    }

    handleAlumnoChange(event){
        const {name, value, id} = event.target

        this.setState(viejo => {
            viejo.alumnos.map(alumno => {
                if(viejo.alumnos.indexOf(alumno) == id){
                    return alumno[name] = value
                }
            })
            return {alumnos: viejo.alumnos}
        })
    }

    handleSubmit(e) {
        e.preventDefault()

        if (!e.target.checkValidity()){
            this.setState({ errores: true })
            return
        }

        this.setState({ errores: false })

        fetch("http://localhost:3001/api/cursos", {
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                año: parseInt(this.state.año),
                duracion: this.state.duracion.toString().toLowerCase(),
                tema: this.state.tema.toString(),
                alumnos: this.state.alumnos
            })
        }).then(res => {
            if(res.status === 201){
                alert("Se cargó correctamente el curso")
                return this.limpiarFormulario()
            } else {
                alert("Hubo un error en la carga del curso, revise los valores ingresados")
            }
        })

    }

    render() {
    return (
        <div style={{textAlign: "center"}}>
            <form onSubmit={this.handleSubmit} className={this.state.errores ? 'errores' : ''}>
                <div style={{backgroundColor: "#F2F2F2", paddingTop: 20}}>
                    <h4 syle={{fontFamily: "Rubik"}}> Curso: </h4>
                    <hr style={{width: 120, border: "1px solid grey"}}/>
                    <input
                        type="text"
                        name="tema"
                        value={this.state.tema}
                        placeholder="Tema"
                        onChange={this.handleChange}
                        style={{marginBottom: 15}}
                        required
                    />
                    <br/>
                    <input
                        type="number"
                        name="año"
                        value={this.state.año}
                        placeholder="Año"
                        onChange={this.handleChange}
                        style={{marginBottom: 15}}
                    />
                    <br/>
                    <input
                        type="text"
                        name="duracion"
                        value={this.state.duracion}
                        placeholder="Duracion (N semanas-dias-meses)"
                        onChange={this.handleChange}
                        style={{marginBottom: 15}}
                        pattern="\d+ (semanas|Semanas|dias|Dias|meses|Meses)$"
                        required
                    />
                    <br/>
                    <hr/>
                </div>
                <h4> Alumnos: </h4>
                {this.state.alumnos.map(alumno => {
                    return (
                        <div key={this.state.alumnos.indexOf(alumno)} style={{display: "inline-block"}}>
                            <p style={this.state.alumnos.length > 1 ? {
                                marginBottom: 15,
                                marginRight: 25
                            } : {marginBottom: 15}}>Alumno {this.state.alumnos.indexOf(alumno) + 1}</p>
                            <input
                                style={this.state.alumnos.length > 1 ? {
                                    marginBottom: 15,
                                    marginRight: 25
                                } : {marginBottom: 15}}
                                type="text"
                                name="nombre"
                                value={alumno.nombre}
                                placeholder="Nombre"
                                id={this.state.alumnos.indexOf(alumno)}
                                onChange={this.handleAlumnoChange}
                            />
                            <br/>
                            <input
                                style={this.state.alumnos.length > 1 ? {
                                    marginBottom: 15,
                                    marginRight: 25
                                } : {marginBottom: 15}}
                                type="text"
                                name="apellido"
                                value={alumno.apellido}
                                placeholder="Apellido"
                                onChange={this.handleAlumnoChange}
                                id={this.state.alumnos.indexOf(alumno)}
                            />
                            <br/>
                            <input
                                style={this.state.alumnos.length > 1 ? {
                                    marginBottom: 15,
                                    marginRight: 25
                                } : {marginBottom: 15}}
                                pattern="\d+"
                                type="text"
                                name="dni"
                                value={alumno.dni}
                                placeholder="DNI"
                                onChange={this.handleAlumnoChange}
                                id={this.state.alumnos.indexOf(alumno)}
                            />
                            <br/>
                            <input
                                id={this.state.alumnos.indexOf(alumno)}
                                style={this.state.alumnos.length > 1 ? {
                                    marginBottom: 15,
                                    marginRight: 25
                                } : {marginBottom: 15}}
                                type="text"
                                name="direccion"
                                value={alumno.direccion}
                                placeholder="Direccion"
                                onChange={this.handleAlumnoChange}
                            />
                            <br/>
                        </div>)
                })}
                <br/>
                <button
                    type="button"
                    onClick={this.handleAddAlumno}
                    className="medium"
                    style={{marginBottom: 20}}
                >
                    Agregar Alumno
                </button>
                <br/>
                <input
                    type="submit"
                    value="Submit"
                    className="btn-primary"
                    style={{marginBottom: 20}}
                />
            </form>
        </div>
    )}
}

export default FormCursoNuevo