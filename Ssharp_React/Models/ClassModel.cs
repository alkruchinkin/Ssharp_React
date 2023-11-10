using System.ComponentModel.DataAnnotations;
using System.ComponentModel;

namespace Ssharp_React.Models
{

    public class ClassModel
    {
        [Key] // указание на то, что свойство Id является первичным ключом таблицы в базе данных
        public int Id { get; set; }

        [Required] // указание на то, что свойство Name обязательно для заполнения
        public string Name { get; set; }
        //атрибутов валидации для ModelState.IsValid
        [DisplayName("Display Order")] // указание на то, что свойство DisplayOrder должно отображаться под именем "Display Order"
        [Range(0, 100)] // указание на то, что значение свойства DisplayOrder должно находиться в диапазоне от 0 до 100
        public int DisplayOrder { get; set; }

        public DateTime CreatedDateTime { get; set; } = DateTime.Now; // указание на то, что свойство CreatedDateTime должно содержать текущую дату и время при создании объекта класса Category
    }

    public class PostModel
    {
        public int Id { get; set; }

        public string Header { get; set; }

        public string Text { get; set; }
    }
    public class DataTasks
    {

        [Key] // указание на то, что свойство Id является первичным ключом таблицы в базе данных
        public int Id { get; set; }

        // [Required] // указание на то, что свойство Name обязательно для заполнения
        public string Name1 { get; set; }


        public bool Title { get; set; }
        public int Dep { get; set; }
        public string? A1 { get; set; }
        public int Lavel { get; set; }
        public bool Open1 { get; set; }

        public string? Opees { get; set; }

        public string? Listisp { get; set; }

        public DateTime? Date1 { get; set; }
        public int Status1 { get; set; }
        public int Trudemk { get; set; }
        public int Factdate { get; set; }
        public int Ob_trudemk { get; set; }
        public int Ob_factdate { get; set; }
        public DateTime? Datefinish { get; set; }



    }

}
