namespace TodoList.TaskService
{
    public interface ITaskService
    {

        //Task AddTask(Task task);
        List<Models.Task> GetAllTasks();
        //void UpdateTask(Task task);
        //void DeleteTask(Task task);
        Models.Task GetTaskById(int id);
    }
}
