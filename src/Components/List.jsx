import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Data from './Data';

export default function List (fighters) {

const [figther, setfigther] = useState(Data);

const getfighter = (e) => {
    setfigther(e.target.value)
  }
  return (
    <div>
        {figther.map((figther) => {
            const {id,name,serie,image} = figther;
            return (
                
                        <Col key={figther.id} className="col s6 m4">
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={image} alt={name} />
                            <Card.Body>
                                <Card.Title>n°{id}</Card.Title>
                                <Card.Text>
                                Le Combatant {name} provient de l'univers {serie}.
                                Le numéro est le  {id} de la liste des {figther.lenght}.
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>   
            )})
        }   
    </div>
  )
}
