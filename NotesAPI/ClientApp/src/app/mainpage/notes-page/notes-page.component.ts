import { Component, OnInit } from '@angular/core';
import { AddNoteView } from 'src/app/shared/views/add-note-view';
import { UpdateNoteView } from 'src/app/shared/views/update-note-view';
import { NoteService } from 'src/app/shared/services/note-service.service';
import { GetNoteView } from 'src/app/shared/views/get-note-view';
import { Store, select } from "@ngrx/store";
import * as noteActions from "../state/note.actions";
import { Observable } from "rxjs";
import * as fromNote from "../state/note.reducer";
import { Note } from "../../shared/views/note";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-notes-page',
  templateUrl: './notes-page.component.html',
  styleUrls: ['./notes-page.component.scss']
})
export class NotesPageComponent implements OnInit {
  addNoteForm: FormGroup;
  updateNoteForm: FormGroup;
  notes$: Observable<Note[]>;
  public addNote: AddNoteView = new AddNoteView();
  public deleteNoteId: string;
  public updateNoteId: string;
  public updateNoteView: UpdateNoteView = new UpdateNoteView;
  public getNoteId: string;
  public notesList: GetNoteView[] = [];
  public recNote: GetNoteView = new GetNoteView();

  constructor(private noteService: NoteService, private store: Store<fromNote.AppState>, private fb: FormBuilder) { }

  ngOnInit(): void {
    debugger;
    this.getNotes();
    this.addNoteForm = this.fb.group({
      text: ["", Validators.required]
    });
    this.updateNoteForm = this.fb.group({
      id: ["", Validators.required],
      text: ["", Validators.required]
    });
  }

  public getNotes(): void {
    this.store.dispatch(new noteActions.LoadNotes());
    this.notes$ = this.store.pipe(select(fromNote.getNotes))
  }

  public getNote(id: string): void {
    this.noteService.getNote(id).subscribe(res => {this.recNote = res});
  }

  public createNote() {
    const newNote: Note = {
      text: this.addNoteForm.get("text").value
    };

    this.store.dispatch(new noteActions.CreateNote(newNote));

    this.addNoteForm.reset();
    this.getNotes();
  }

  public deleteNote(id: string): void {
    this.store.dispatch(new noteActions.DeleteNote(id));
  }

  public updateNote(): void {
    const updatedNote: Note = {
      id: this.updateNoteForm.get("id").value,
      text: this.updateNoteForm.get("text").value
    };
    this.store.dispatch(new noteActions.UpdateNote(updatedNote))
  }
}
