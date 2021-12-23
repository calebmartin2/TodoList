namespace TodoList.Models
{
    public class Task
    {
        public int ID { get; set; }
        public int UserId { get; set; }
        public User? User { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? CompletedDate { get; set; }
        public bool IsCompleted { get; set; }

    }
}
