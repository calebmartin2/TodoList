import React, { useState, useEffect } from 'react';
import axios from 'axios'
import TaskCard from './TaskCard'
export function CompletedTasks() {
    const [TaskItems, setTaskItems] = useState([]);


    async function fetchTasks() {
        axios.get('./api/GetCompletedTasks')
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
            <h1>Completed Tasks:</h1>
            
            {TaskItems.map((task) => (
                <TaskCard key={task.id} task={task} refreshTasks={fetchTasks} mode="completed"></TaskCard>
            ))}

        </div>
    );

}
