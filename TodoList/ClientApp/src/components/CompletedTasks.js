import React, { useState, useEffect } from 'react';
import axios from 'axios'
import TaskCard from './TaskCard'
export function CompletedTasks() {
    const [TaskItems, setTaskItems] = useState([]);
    const [loading, setLoading] = useState(false);


    async function fetchTasks() {
        axios.get('./api/GetCompletedTasks')
            .then(function (response) {
                console.log(response.data);
                const data = response.data;
                setTaskItems(data);
                setLoading(false);

            })
            .catch(function (error) {
                console.log(error);
            });
    }
    useEffect(() => {
        setLoading(true);
        fetchTasks();
    }, [])

    return (
        <div>
            <h1>Completed Tasks:</h1>

            {loading
                ? <h2>Loading...</h2>
                : TaskItems.map((task) => (
                    <TaskCard key={task.id} task={task} refreshTasks={fetchTasks} mode="completed"></TaskCard>
                ))
            }

        </div>
    );

}
