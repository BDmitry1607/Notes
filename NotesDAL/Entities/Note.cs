using System;

namespace NotesDAL.Entities
{
    public class Note
    {
        public string Id { get; set; }
        public string Text { get; set; }
        public Note()
        {
            Id = Guid.NewGuid().ToString();
        }
    }
}
