namespace TodoList.Models
{
    public class User
    {
        public int ID { get; set; }
        public string? Name { get; set; }
        public List<Task>? Tasks { get; set; }
    }
}
