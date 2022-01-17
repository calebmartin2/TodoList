import React, { useState, useEffect } from 'react';
import axios from 'axios'
import TaskCard from './TaskCard'
import AddTask from './AddTask'
import Pagination from './Pagination';
export function CurrentTasks() {
    const [TaskItems, setTaskItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [tasksPerPage] = useState(3);

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

    const indexOfLastTask = currentPage * tasksPerPage;
    const indexOfFirstTask = indexOfLastTask - tasksPerPage;
    const currentTasks = TaskItems.slice(indexOfFirstTask, indexOfLastTask);

    const paginate = pageNumber => setCurrentPage(pageNumber);



    return (
        <div>
            <AddTask refreshTasks={fetchTasks}></AddTask>
            <h1>My Tasks:</h1>
            {loading
                ? <h2>Loading...</h2>
                : currentTasks.map((task) => (
                    <TaskCard key={task.id} task={task} refreshTasks={fetchTasks} mode="current"></TaskCard>
                ))
            }

            <Pagination tasksPerPage={tasksPerPage} totalTasks={TaskItems.length} paginate={paginate} />

        </div>
    );

}