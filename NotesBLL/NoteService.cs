using NotesBLL.Views;
using NotesDAL;
using NotesDAL.Entities;
using System.Collections.Generic;
using System.Linq;

namespace NotesBLL
{
    public class NoteService : INoteService
    {
        private readonly INoteRepository _noteRepository;
        public NoteService(INoteRepository noteRepository)
        {
            _noteRepository = noteRepository;
        }
        public Note Create(AddNoteView noteView)
        {
            var note = new Note
            {
                Text = noteView.Text
            };
           return _noteRepository.Create(note);
        }
        public void Delete(string id)
        {
            _noteRepository.Delete(id);
        }
        public Note Update( UpdateNoteView noteView)
        {
            var note = new Note
            {
                Id = noteView.Id,
                Text = noteView.Text
            };
            return _noteRepository.Update( note);
        }
        public List<GetNoteView> GetAll()
        {
            var notes = _noteRepository.GetAll();
            var result = notes.Select(note => new GetNoteView()
            {
                Id = note.Id,
                Text = note.Text
            }).ToList();
            return result;
        }
        public GetNoteView Get(string id)
        {
            var note = _noteRepository.Get(id);
            return new GetNoteView { Id = note.Id, Text = note.Text };
        }
    }
}
