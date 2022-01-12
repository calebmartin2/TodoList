using System.ComponentModel.DataAnnotations;

namespace TodoList.Models
{
    public class TaskItem
    {
        public int ID { get; set; }
        public int UserId { get; set; }
        [Required]
        public string? Title { get; set; }
        [Required]
        public string? Description { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? CompletedDate { get; set; }
        public bool IsCompleted { get; set; }

    }
}
