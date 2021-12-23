using TodoList.Data;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using TodoList.TaskService;
using TodoList.Models;
namespace TodoList.Controllers
{

    public class TasksController : ControllerBase
    {
      

        private readonly ITaskService _taskService;
        public TasksController(ITaskService taskService)
        {
            _taskService = taskService;
        }

        [HttpGet]
        [Route("api/GetAllTasks")]
        public IEnumerable<Models.Task> GetAllTasks()
        {
            return _taskService.GetAllTasks();
        }

        [HttpGet]
        [Route("api/GetTaskById")]

        public Models.Task GetTaskById(int id)
        {
            return _taskService.GetTaskById(id);
        }

    }
}
