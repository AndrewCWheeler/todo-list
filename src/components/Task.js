import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

const Task = (props) => {
    const { task, index, list, setList } = props;
    const onClick = () => {
        setList(() => {
            return list.filter(task => list.indexOf(task) !== index)
        });
    }

    const onChange = e => {
        list[index].isComplete = !list[index].isComplete;
        
        setList([...list]);
    };

    return(
        <Container>
            <Row className="my-5 border border-light shadow p-3 mb-5 bg-white rounded">
                <Col sm="1">
                <input 
                    onChange={onChange} 
                    type="checkbox" 
                    checked={task.isComplete}
                    />
                </Col>
                <Col sm="8">
                    <h4>{task.name}</h4>
                </Col>
                <Col sm="2">
                    <Button onClick={onClick} className="btn btn-danger">Delete</Button>
                </Col>
            </Row>
        </Container>
    )
};

export default Task;