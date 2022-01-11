import { Card, Button, Form } from "react-bootstrap";
import axios from 'axios'
import { Fragment, useState } from "react";

function TaskCard(props) {

    const [mode, setMode] = useState(props.mode)
    const [title, setTitle] = useState(props.task.title)
    const [description, setDescription] = useState(props.task.description)

    function deleteCard(id) {
        const dataForm = new FormData();
        dataForm.append('id', id)
        axios.post('http://localhost:5000/api/DeleteTaskById', dataForm)
            .then(function (response) {
                console.log(response.data);
                props.refreshTasks();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function completeCard(id) {
        const dataForm = new FormData();
        dataForm.append('id', id)
        axios.post('http://localhost:5000/api/CompleteTaskById', dataForm)
            .then(function (response) {
                console.log(response.data);
                props.refreshTasks();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function undoCompleteCard(id) {
        const dataForm = new FormData();
        dataForm.append('id', id)
        axios.post('http://localhost:5000/api/UndoCompleteTaskById', dataForm)
            .then(function (response) {
                console.log(response.data);
                props.refreshTasks();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function edit() {
        const dataForm = new FormData();
        dataForm.append('id', props.task.id)
        dataForm.append('Title', title)
        dataForm.append('Description', description)
        axios.post('http://localhost:5000/api/EditTask', dataForm)
            .then(function (response) {
                console.log(response.data);
                props.refreshTasks();
            })
            .catch(function (error) {
                console.log(error);
            });
        setMode("current")
    }

    return (
        <div>
            <Card style={{ marginBottom: '1em' }}>
                <Card.Body>
                    {mode === "editing" &&
                        <Fragment>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
                                </Form.Group>
                            </Form>
                            <Button variant="success" style={{ marginRight: '.5em' }} onClick={() => edit()}>Save</Button>
                            <Button variant="danger" style={{ marginRight: '.5em' }} onClick={() => setMode("current")}>Cancel</Button>
                        </Fragment>
                    }
                    {mode === "current" &&
                        <Fragment>
                            <Card.Title>{props.task.title}</Card.Title>
                            <Card.Text>{props.task.description}</Card.Text>
                            <Button variant="success" style={{ marginRight: '.5em' }} onClick={() => completeCard(props.task.id)}>Complete</Button>
                            <Button variant="primary" style={{ marginRight: '.5em' }} onClick={() => setMode("editing")}>Edit</Button>
                            <Button variant="danger" onClick={() => { if (window.confirm('Delete the item?')) deleteCard(props.task.id) }}>Delete</Button>
                        </Fragment>
                    }
                    {mode === "completed" &&
                        <Fragment>
                            <Card.Title>{props.task.title}</Card.Title>
                            <Card.Text>{props.task.description}</Card.Text>
                            <Button variant="warning" style={{ marginRight: '.5em' }} onClick={() => undoCompleteCard(props.task.id)}>Undo Complete</Button>
                            <Button variant="danger" onClick={() => { if (window.confirm('Delete the item?')) deleteCard(props.task.id) }}>Delete</Button>
                        </Fragment>
                    }
                </Card.Body>
            </Card>
        </div>
    )
}
export default TaskCard;