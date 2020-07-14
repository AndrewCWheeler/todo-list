import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const Input = (props) => {
    const { list, setList } = props;
    let task = {
        name: "",
        isComplete: false
    };
    const onChange = (e) => {
        task.name = e.target.value;
    };

    const onClick = (e) => {
        setList([...list, task]);
        e.target.value="";
        
    };

    return (
        <Container>
            <Row>
                <Col>
                    <Form.Control 
                    className="form-control form-control-lg my-3" 
                    onChange={onChange} 
                    type="text" 
                    name="task" 
                    />
                    <Button 
                    className="btn-primary btn-lg my-3 " 
                    onClick={onClick}>Add Task
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Input
