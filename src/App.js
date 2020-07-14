import React, {useState} from 'react';
import Input from './components/Input';
import Task from './components/Task';
import { Container, Row, Col } from 'react-bootstrap';
import {SlideDown} from 'react-slidedown';
import './App.css';

function App() {
    const [list, setList] = useState([]);
    
    

    return (
        <Container className="App">
            <Row>
                <Col sm="6">
                    <h1 className="my-4">Dump & Chunk</h1>
                    <i 
                    id="plus" 
                    className="fa fa-plus" 
                    aria-hidden="true"
                    >
                    </i>
                
                    <Input list={list} setList={setList} />
                    { list.map((task, i) => (
                    <Task task={task} setList={setList} index={i} list={list} />
                    ))}
                            
                </Col>
            </Row>
        </Container>
    );
}

    export default App;
