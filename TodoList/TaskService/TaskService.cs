﻿using TodoList.Models;
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
        public List<TaskItem> GetAllTasks()
        {
            return _taskContext.Tasks.ToList();
        }
        public TaskItem GetTaskById(int Id)
        {
            return _taskContext.Tasks.FirstOrDefault(x => x.ID == Id);
        }
        public List<TaskItem> GetCompletedTasks()
        {
            return _taskContext.Tasks.Where(x => x.IsCompleted == true).ToList();
        }
        public List<TaskItem> GetCurrentTasks()
        {
            return _taskContext.Tasks.Where(x => x.IsCompleted == false).ToList();
        }
        public void DeleteTaskById(int Id)
        {
            var task = _taskContext.Tasks.FirstOrDefault(x =>x.ID == Id);
            if (task != null)
            {
                _taskContext.Remove(task);
                _taskContext.SaveChanges();
            }
        }
        public TaskItem AddTask(TaskItem taskitem)
        {
            _taskContext.Tasks.Add(taskitem);
            _taskContext.SaveChanges();
            return taskitem;
        }

        public void EditTask(TaskItem taskitem)
        {
            var task = _taskContext.Tasks.FirstOrDefault(x => x.ID == taskitem.ID);
            if (task != null)
            {
                task.Title = taskitem.Title;
                task.Description = taskitem.Description;
            }
            _taskContext.SaveChanges();

        }
        public void CompleteTaskById(int Id)
        {
            var task = _taskContext.Tasks.FirstOrDefault(x => x.ID == Id);
            if (task != null)
            {
                task.CompletedDate = DateTime.Now;
                task.IsCompleted = true;
            }
            _taskContext.SaveChanges();
        }

        public void UndoCompleteTaskById(int Id)
        {
            var task = _taskContext.Tasks.FirstOrDefault(x => x.ID == Id);
            if (task != null)
            {
                task.CompletedDate = null;
                task.IsCompleted = false;
            }
            _taskContext.SaveChanges();
        }
    }

}
