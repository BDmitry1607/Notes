using Microsoft.AspNetCore.Mvc;
using NotesBLL;
using NotesBLL.Views;

namespace NotesAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    public class NoteController : Controller
    {
        private readonly INoteService _noteService;
        public NoteController(INoteService noteService)
        {
            _noteService = noteService;
        }
        [HttpGet]
        public IActionResult GetAll()
        {
            var result = _noteService.GetAll();
            return Ok(result);
        }
        [HttpGet("{id}")]
        public IActionResult Get(string id)
        {
            var result = _noteService.Get(id);
            return Ok(result);
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            _noteService.Delete(id);
            return Ok();
        }
        [HttpPost]
        public IActionResult Create([FromBody] AddNoteView note)
        {
            var newNote = _noteService.Create(note);
            return Ok(newNote);
        }
        [HttpPut("{id}")]
        public IActionResult Update( [FromBody]UpdateNoteView note)
        {
            var newNote = _noteService.Update( note);
            return Ok(newNote);
        }
    }
}
