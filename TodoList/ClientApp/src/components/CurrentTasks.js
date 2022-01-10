import React, { useState, useEffect } from 'react';
import axios from 'axios'
import TaskCard from './TaskCard'
import {Button} from 'react-bootstrap'
export function CurrentTasks() {
    const [TaskItems, setTaskItems] = useState([]);
    async function fetchTasks() {
        axios.get('./api/GetCurrentTasks')
            .then(function (response) {
                console.log(response.data);
                const data = response.data;
                setTaskItems(data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    useEffect(() => {
        fetchTasks();
    }, [])

    return (
        <div>
            <h1>My Tasks:</h1>
            <Button variant="success">Add Task</Button>
            {TaskItems.map((task) => (
                <TaskCard key={task.id} task={task} refreshTasks={fetchTasks}></TaskCard>
            ))}

        </div>
    );

}
