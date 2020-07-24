import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { NoteService } from "../../shared/services/note-service.service";
import * as noteActions from "./note.actions";
import { Note } from "../../shared/views/note";

@Injectable()
export class NoteEffect {
    constructor(private actions$: Actions,
        private noteService: NoteService) { }

        @Effect()
        loadNotes$: Observable<Action> = this.actions$.pipe(
            ofType<noteActions.LoadNotes>(
                noteActions.NoteActionTypes.LOAD_NOTES
            ),
            mergeMap((actions: noteActions.LoadNotes) => 
            this.noteService.getNotes().pipe(
                map((notes: Note[]) => 
                new noteActions.LoadNotesSuccess(notes))
            )),
            catchError(err => of(new noteActions.LoadNotesFail(err)))
        )

        @Effect()
        loadNote$: Observable<Action> = this.actions$.pipe(
            ofType<noteActions.LoadNote>(
                noteActions.NoteActionTypes.LOAD_NOTE
            ),
            mergeMap((action: noteActions.LoadNote) => 
            this.noteService.getNote(action.payload).pipe(
                map((note: Note) => 
                new noteActions.LoadNoteSuccess(note))
            )),
            catchError(err => of(new noteActions.LoadNoteFail(err)))
        )

        @Effect()
        createNote$: Observable<Action> = this.actions$.pipe(
            ofType<noteActions.CreateNote>(
                noteActions.NoteActionTypes.CREATE_NOTE
            ),
            map((action: noteActions.CreateNote) => action.payload),
            mergeMap((note: Note) => 
            this.noteService.create(note).pipe(
                map((newNote: Note) => 
                new noteActions.CreateNoteSuccess(newNote))
            )),
            catchError(err => of(new noteActions.CreateNoteFail(err)))
        )

        @Effect()
        updateNote$: Observable<Action> = this.actions$.pipe(
            ofType<noteActions.UpdateNote>(
                noteActions.NoteActionTypes.UPDATE_NOTE
            ),
            map((action: noteActions.UpdateNote) => action.payload),
            mergeMap((note: Note) => 
            this.noteService.update(note).pipe(
                map((updateNote: Note) => 
                new noteActions.UpdateNoteSuccess({
                    id: updateNote.id,
                    changes: updateNote
                }))
            )),
            catchError(err => of(new noteActions.UpdateNoteFail(err)))
        )

        @Effect()
        deleteNote$: Observable<Action> = this.actions$.pipe(
            ofType<noteActions.DeleteNote>(
                noteActions.NoteActionTypes.DELETE_NOTE
            ),
            map((action: noteActions.DeleteNote) => action.payload),
            mergeMap((id: string) => 
            this.noteService.delete(id).pipe(
                map(() => 
                new noteActions.DeleteNoteSuccess(id))
            )),
            catchError(err => of(new noteActions.DeleteNoteFail(err)))
        )
}