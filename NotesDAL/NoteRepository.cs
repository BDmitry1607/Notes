using NotesDAL.Entities;
using System.Collections.Generic;
using System.Linq;

namespace NotesDAL
{
    public class NoteRepository : INoteRepository
    {
        private static List<Note> Notes = new List<Note>();
        public Note Create(Note note)
        {
            Notes.Add(note);
            return note;
        }
        public void Delete(string id)
        {
            Notes.RemoveAll(note => note.Id == id);
        }
        public Note Update( Note newNote)
        {
            Notes.FirstOrDefault(note => note.Id == newNote.Id).Text = newNote.Text;
            return newNote;
        }
        public List<Note> GetAll()
        {
            return Notes;
        }
        public Note Get(string id)
        {
            return Notes.FirstOrDefault(note => note.Id == id);
        }
    }
}
