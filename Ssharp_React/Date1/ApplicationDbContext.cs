using Microsoft.EntityFrameworkCore;//контекст базы данных для Entity Framework Core и используется для взаимодействия с базой данных, включая выполнение запросов и сохранение данных

using Ssharp_React.Models;

namespace Ssharp_React.Date1
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<DataTasks> Categories { get; set; }

    }
    public class MyDataContext
    {
        public List<PostModel> Posts { get; set; }

        public MyDataContext()
        {
            Posts = new List<PostModel>();
        }
    }

}
