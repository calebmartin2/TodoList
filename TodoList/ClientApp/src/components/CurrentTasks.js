import React, { useState, useEffect } from 'react';
import axios from 'axios'
export function CurrentTasks() {
    const [TaskItems, setTaskItems] = useState([]);
    useEffect(() => {
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
        fetchTasks();
    }, [])
    
    return (
        <div>
            <h1>My Tasks:</h1>
            <ul>
            {TaskItems.map((task) => (
                <li key={task.id}>
                    {task.title} - {task.description}
                </li>
            ))}
            </ul>
        </div>
    );

}
