import React, { useState, useEffect } from 'react';
import axios from 'axios'
import TaskCard from './TaskCard'
import AddTask from './AddTask'
export function CurrentTasks() {
    const [TaskItems, setTaskItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchTasks = async () => {

        try {
            const res = await axios.get('./api/GetCurrentTasks');
            setTaskItems(res.data);
            setLoading(false);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        document.title = "Current Tasks";
        setLoading(true);
        fetchTasks();
    }, [])



    return (
        <div>
            <AddTask refreshTasks={fetchTasks}></AddTask>
            <h1>My Tasks:</h1>
            {loading
                ? <h2>Loading...</h2>
                : TaskItems.map((task) => (
                    <TaskCard key={task.id} task={task} refreshTasks={fetchTasks} mode="current"></TaskCard>
                ))
            }

        </div>
    );

}