import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { LinkContainer } from "react-router-bootstrap";

class ListaCursos extends Component {
    constructor() {
        super()
        this.state = {
            cursos: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:3001/api/cursos")
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    cursos: data
                })
            })
    }

    eliminarCurso(cursoId){
        if (window.confirm("Esta seguro que desea eliminar el curso?")){
            fetch("http://localhost:3001/api/cursos/" + cursoId, {
                method: "DELETE"
            }).then( res => {
                if(res.status == 200){
                    window.location.reload()
                }
                else {
                    alert("Hubo un error al intentar eliminar el curso")
                }
            })
        }
    }

    render(){
        let cursos =  this.state.cursos.map(curso => {
                return (
                    <Card key={curso.tema}
                          style= {{width: '18rem', display: 'inline-block', margin:'10px'}}
                    >
                        <Card.Body>
                            <Card.Title>{curso.tema}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Duracion: {curso.duracion}</Card.Subtitle>
                            <Card.Text> Año: {curso.año} </Card.Text>
                            <LinkContainer to={"/cursos/" + curso._id}>
                                <Card.Link>Ver Curso</Card.Link>
                            </LinkContainer>
                            <br />
                            <div style={{textAlign:"right"}}>
                                <Button style={{marginTop:15}} variant="primary" onClick={() => this.eliminarCurso(curso._id)}>Eliminar</Button>
                            </div>
                        </Card.Body>
                    </Card>
                )
            }
        )

        return (
            <div>
                {cursos}
            </div>
        )
    }

}

export default ListaCursos