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

        [HttpGet, Route("api/GetAllTasks")]
        public IEnumerable<TaskItem> GetAllTasks()
        {
            return _taskService.GetAllTasks();
        }

        [HttpGet, Route("api/GetTaskById")]

        public TaskItem GetTaskById(int id)
        {
            return _taskService.GetTaskById(id);
        }

        [HttpGet, Route("api/GetCompletedTasks")]
        public IEnumerable<TaskItem> GetCompletedTasks()
        {
            return _taskService.GetCompletedTasks();
        }

        [HttpGet, Route("api/GetCurrentTasks")]
        public IEnumerable<TaskItem> GetCurrentTasks()
        {
            return _taskService.GetCurrentTasks();
        }


        [HttpPost, Route("api/AddTask"), ProducesResponseType(StatusCodes.Status201Created)]
        public IActionResult AddTask(TaskItem taskitem)

        {
            taskitem.CreatedDate = DateTime.Now;
            taskitem.IsCompleted = false;
            TaskItem retTask = _taskService.AddTask(taskitem);
            return CreatedAtAction(nameof(GetTaskById), new { id = retTask.ID }, taskitem);
        }

        [HttpPost, Route("api/DeleteTaskById")]

        public IActionResult DeleteTaskById(int id)
        {
            var exisitingTaskItem = _taskService.GetTaskById(id);

            if (exisitingTaskItem != null)
            {
                _taskService.DeleteTaskById(id);
                return Ok();
            }
            return NotFound($"Task Item Not Found with ID: {id}");
        }

        [HttpPost, Route("api/EditTask")]

        public IActionResult EditTask(TaskItem taskitem)
        {
            if (taskitem.ID == 0)
            {
                return BadRequest($"Cannot edit task of ID: 0");
            }
            var existingTask = _taskService.GetTaskById(taskitem.ID);
            if (existingTask != null)
            {
                _taskService.EditTask(taskitem);
                return Ok();
            }
            return NotFound($"Task Item Not Found with ID: {taskitem.ID}");

        }

        [HttpPost, Route("api/CompleteTaskById")]
        public IActionResult CompleteTaskById(int id)
        {
            _taskService.CompleteTaskById(id);
            return Ok();
        }

        [HttpPost, Route("api/UndoCompleteTaskById")]
        public IActionResult UndoCompleteTaskById(int id)
        {
            _taskService.UndoCompleteTaskById(id);
            return Ok();
        }
    }
}
