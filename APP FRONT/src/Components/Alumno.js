import React from 'react';
import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/CardImg'
import {LinkContainer} from "react-router-bootstrap";

function Alumno(props) {
    let colorNota = props.nota > 5 ? "green" : "red"
    return (
            <Card key={props.dni} style={{ width: '18rem', display: 'inline-block', margin:'10px' }}>
                <div style={{textAlign:"center"}}>
                    <CardImg style={{marginTop: 10, width: 100, height:100}} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ95GrFuesVVuyyfXOSimzstFtyiQ594yP-DNe0UfbUs_kyqqrM"/>
                </div>
                <Card.Body>
                    <Card.Title>{props.nombre} {props.apellido}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">DNI: {props.dni}</Card.Subtitle>
                    <Card.Text> Direccion: {props.direccion} </Card.Text>
                    <Card.Text style={{textAlign:"right", color: colorNota}}> Nota: {props.nota} </Card.Text>
                </Card.Body>
            </Card>
    )
}

export default Alumno