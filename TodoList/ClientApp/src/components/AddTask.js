import { Button, Form } from 'react-bootstrap'
import React, { useState } from 'react';
import axios from 'axios'


function AddTask(props) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    function add() {
        if (title === "" || title === null || description === "" || description == null) {
            window.alert("Input cannot be blank.");
        } else {
            const dataForm = new FormData();
            dataForm.append('Title', title)
            dataForm.append('Description', description)
            axios.post('http://localhost:5000/api/AddTask', dataForm)
                .then(function (response) {
                    console.log(response.data);
                    setTitle("");
                    setDescription("");
                    props.refreshTasks();
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        
    }

    return (
        <div>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </Form.Group>
            </Form>
            <Button variant="success" onClick={add}>Add Task</Button>
        </div>
    )

}
export default AddTask;