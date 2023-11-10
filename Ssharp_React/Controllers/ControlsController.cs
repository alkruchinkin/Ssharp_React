using Microsoft.AspNetCore.Mvc;
using Ssharp_React.Models; // пространство имен для работы с моделями
using Ssharp_React.Date1;
using Ssharp_React.Serv.Interface;

// Импортируем необходимые пространства имен

namespace Ssharp_React.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DataTasksController : ControllerBase
    {

        private readonly ApplicationDbContext _db;// объявляем объект контекста базы данных

        // Конструктор класса, который принимает в качестве параметра объект контекста базы данных
        public DataTasksController(ApplicationDbContext db)
        {
            _db = db;
        }



        //ждет запрос с сайта   
        [HttpGet]
        public IEnumerable<DataTasks> GetAll()
        {
            IEnumerable<DataTasks> objCategoryList = _db.Categories; // получаем список категорий из базы данных
            Console.WriteLine(objCategoryList);

            var obj1 = _db.Categories.ToList();
            Console.WriteLine("____________");
            Console.WriteLine(_db.Categories);
            Console.WriteLine(obj1);
            foreach (var entity in obj1)
            {
                Console.WriteLine($"Id: {entity.Id}, Name: {entity.Name1}");
            }
            //Создаем новый обьект и вносим изменения 
            return obj1;


        }
        [HttpPost]// указываем, что метод обрабатывает POST запрос

        public async Task<ActionResult> CreateTask([FromBody] DataTasks entity)
        {

            var obj1 = _db.Categories.ToList();
            Console.WriteLine("obj!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            Console.WriteLine(entity.Date1);
            /*foreach (var entity1 in obj1)
            {
                Console.WriteLine($"Id: {entity1.Id}, Name: {entity1.Name1}");
            }*/
            entity.Date1 = DateTime.Now;

            // проверяем, прошла ли модель валидацию, атрибуты берет от Модели 
            if (ModelState.IsValid)
            {
                _db.Categories.Add(entity);// добавляем объект категории в контекст базы данных
                _db.SaveChanges();// сохраняем изменения в базе данных
            }
            return Ok(); // если модель не валидна, возвращаем представление Create с передачей модели
        }


        //редактирование
        [HttpPatch]// указываем, что метод обрабатывает POST запрос
        //[ValidateAntiForgeryToken]// указываем защиту от подделки межсайтовых запросов
        public IActionResult Edit(DataTasks obj)
        //public async Task<ActionResult> UpdateTask(int id, [FromBody] DataTasks updateModel)
        {

            Console.WriteLine(obj.Datefinish);

            // проверяем, прошла ли модель валидацию
            if (ModelState.IsValid)
            {
                _db.Categories.Update(obj);// обновляем объект категории в контексте базы данных
                _db.SaveChanges();// сохраняем изменения в базе данных
                //return RedirectToAction("Index");// перенаправляем на метод Index
            }
            return Ok();// если модель не валидна, возвращаем представление Edit с передачей модели
        }
        [HttpDelete("{id}")]// указываем, что метод обрабатывает POST запрос
        //[ValidateAntiForgeryToken]// указываем защиту от подделки межсайтовых запросов
        public IActionResult DeletePOST(int? id)
        {
            Console.WriteLine(id);
            // ищем категорию в базе данных по идентификатору
            var obj = _db.Categories.Find(id);
            // если категория не найдена
            if (obj == null)
            {
                Console.WriteLine("404");
                return NotFound();// возвращаем ошибку 404
                
            }
            _db.Categories.Remove(obj);// удаляем объект категории из контекста базы данных
            _db.SaveChanges();// сохраняем изменения в базе данных
            return Ok();// перенаправляем на метод Index


        }
    }
}
