namespace TodoList.TaskService
{
    using TodoList.Models;
    public interface ITaskService
    {

        TaskItem AddTask(TaskItem taskitem);
        List<TaskItem> GetAllTasks();
        void DeleteTaskById(int id);
        TaskItem GetTaskById(int id);
    }
}
