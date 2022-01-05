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
        public IEnumerable<TaskItem> GetAllTasks()
        {
            return _taskService.GetAllTasks();
        }

        [HttpGet]
        [Route("api/GetTaskById")]

        public TaskItem GetTaskById(int id)
        {
            return _taskService.GetTaskById(id);
        }

        [HttpPost]
        [Route("api/AddTask")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public IActionResult AddTask(TaskItem taskitem)

        {
            taskitem.CreatedDate = DateTime.Now;
            taskitem.IsCompleted = false;
            TaskItem retTask = _taskService.AddTask(taskitem);
            return CreatedAtAction(nameof(GetTaskById), new { id = retTask.ID }, taskitem);
        }


    }
}
