using TodoList.Models;
using System.Collections.Generic;
using System.Linq;
using TodoList.Data;

namespace TodoList.TaskService
{
    public class TaskService : ITaskService
    {
        public TaskContext _taskContext;
        public TaskService(TaskContext taskDbContext)
        {
            _taskContext = taskDbContext;
        }
        public List<Models.Task> GetAllTasks()
        {
            return _taskContext.Tasks.ToList();
        }
        public Models.Task GetTaskById(int Id)
        {
            Models.Task retval = _taskContext.Tasks.FirstOrDefault(x => x.ID == Id);
            if (retval == null)
            {
                retval = new Models.Task();
            }
            return retval;
        }
    }
}
