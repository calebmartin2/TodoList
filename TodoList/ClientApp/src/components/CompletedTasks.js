import React, { useState, useEffect } from 'react';
import axios from 'axios'
import TaskCard from './TaskCard'
import Pagination from './Pagination';

export function CompletedTasks() {
    const [TaskItems, setTaskItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [tasksPerPage] = useState(3);


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
        document.title = "Completed Tasks";
        setLoading(true);
        fetchTasks();
    }, [])

    const indexOfLastTask = currentPage * tasksPerPage;
    const indexOfFirstTask = indexOfLastTask - tasksPerPage;
    const currentTasks = TaskItems.slice(indexOfFirstTask, indexOfLastTask);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
            <h1>Completed Tasks:</h1>

            {loading
                ? <h2>Loading...</h2>
                : currentTasks.map((task) => (
                    <TaskCard key={task.id} task={task} refreshTasks={fetchTasks} mode="completed"></TaskCard>
                ))
            }
            <Pagination tasksPerPage={tasksPerPage} totalTasks={TaskItems.length} paginate={paginate} />

        </div>
    );

}
