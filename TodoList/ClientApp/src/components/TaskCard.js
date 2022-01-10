import { Card, Button } from "react-bootstrap";
import axios from 'axios'



function TaskCard(props) {

    function deleteCard(id) {
        const dataForm = new FormData();
        dataForm.append('id', id)
        axios.post('http://localhost:5000/api/DeleteTaskById', dataForm) 
            .then(function (response) {
                console.log(id);
                console.log(response.data);
                props.refreshTasks();
            })
            .catch(function (error) {
                console.log(id);
                console.log(error);
            });
    }

    return (
        <div>
            <Card style={{marginBottom: '1em'}}>
                <Card.Body>
                    <Card.Title>{props.task.title}</Card.Title>
                    <Card.Text>{props.task.description}</Card.Text>
                    <Button variant="success" style={{marginRight: '.5em'}}>Complete</Button>
                    <Button variant="primary" style={{marginRight: '.5em'}} onClick={() => console.log(props.task)}>Edit</Button>
                    <Button variant="danger" onClick={() => {if(window.confirm('Delete the item?'))deleteCard(props.task.id)}}>Delete</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default TaskCard;