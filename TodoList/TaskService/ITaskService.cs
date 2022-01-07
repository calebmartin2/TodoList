namespace TodoList.TaskService
{
    using TodoList.Models;
    public interface ITaskService
    {

        TaskItem AddTask(TaskItem taskitem);
        List<TaskItem> GetAllTasks();
        List<TaskItem> GetCompletedTasks();
        List<TaskItem> GetCurrentTasks();
        void DeleteTaskById(int id);
        void EditTask(TaskItem taskitem);
        TaskItem GetTaskById(int id);
    }
}
