import React, { useState, useEffect } from 'react';
import axios from 'axios'
import TaskCard from './TaskCard'
import AddTask from './AddTask'
export function CurrentTasks() {
    const [TaskItems, setTaskItems] = useState([]);

    /*    async function fetchTasks() {
            axios.get('./api/GetCurrentTasks')
                .then(function (response) {
                    console.log(response.data);
                    const data = response.data;
                    setTaskItems(data);
                })
                .catch(function (error) {
                    console.log(error);
                });*/


    //}

    const fetchTasks = async () => {
        try {
            const res = await axios.get('./api/GetCurrentTasks');
            setTaskItems(res.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchTasks();
    }, [])

    return (
        <div>

            <AddTask refreshTasks={fetchTasks}></AddTask>

            <h1>My Tasks:</h1>
            {TaskItems.map((task) => (
                <TaskCard key={task.id} task={task} refreshTasks={fetchTasks} loading={loading} mode="current"></TaskCard>
            ))}

        </div>
    );

}