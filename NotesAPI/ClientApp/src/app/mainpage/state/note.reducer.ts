import * as noteActions from "./note.actions";
import { Note } from "../../shared/views/note";
import * as fromRoot from "../../state/app-state";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { state } from '@angular/animations';

export interface NoteState extends EntityState<Note> {
    selectedNoteId: string | null,
    loading: boolean,
    loaded: boolean,
    error: string
}

export interface AppState extends fromRoot.AppState {
    notes: NoteState
}

export const noteAdapter: EntityAdapter<Note> = createEntityAdapter<Note>();

export const defaultNote: NoteState = {
    ids: [],
    entities: {},
    selectedNoteId: null,
    loading: false,
    loaded: false,
    error: ""
}

export const initialState = noteAdapter.getInitialState(defaultNote)

export function noteReducer(state = initialState, action: noteActions.Action): NoteState{
    switch(action.type) {
        case noteActions.NoteActionTypes.LOAD_NOTES_SUCCESS: {
            return noteAdapter.addAll(action.payload, {
                ...state,
                loading: false,
                loaded: true
            });
        }
        case noteActions.NoteActionTypes.LOAD_NOTES_FAIL: {
            return {
                ...state,
                entities: {},
                loading: false,
                loaded: false,
                error: action.payload
            };
        }

        case noteActions.NoteActionTypes.LOAD_NOTE_SUCCESS: {
            return noteAdapter.addOne(action.payload, {
                ...state,
                selectedNoteId: action.payload.id
            });
        }
        case noteActions.NoteActionTypes.LOAD_NOTE_FAIL: {
            return {
                ...state,
                error: action.payload
            };
        }

        case noteActions.NoteActionTypes.CREATE_NOTE_SUCCESS: {
            return noteAdapter.addOne(action.payload, state);
        }
        case noteActions.NoteActionTypes.CREATE_NOTE_FAIL: {
            return {
                ...state,
                error: action.payload
            };
        }

        case noteActions.NoteActionTypes.UPDATE_NOTE_SUCCESS: {
            return noteAdapter.updateOne(action.payload, state);
        }
        case noteActions.NoteActionTypes.UPDATE_NOTE_FAIL: {
            return {
                ...state,
                error: action.payload
            };
        }

        case noteActions.NoteActionTypes.UPDATE_NOTE_SUCCESS: {
            return noteAdapter.updateOne(action.payload, state);
        }
        case noteActions.NoteActionTypes.UPDATE_NOTE_FAIL: {
            return {
                ...state,
                error: action.payload
            };
        }

        case noteActions.NoteActionTypes.DELETE_NOTE_SUCCESS: {
            return noteAdapter.removeOne(action.payload, state);
        }
        case noteActions.NoteActionTypes.DELETE_NOTE_FAIL: {
            return {
                ...state,
                error: action.payload
            };
        }

        default: {
            return state;
        }
    }
}

const getNoteFeatureState = createFeatureSelector<NoteState>("notes");

export const getNotes = createSelector(getNoteFeatureState, noteAdapter.getSelectors().selectAll);

export const getNotesLoading = createSelector(getNoteFeatureState, (state: NoteState) => state.loading);

export const getNotesLoaded = createSelector(getNoteFeatureState, (state: NoteState) => state.loaded);

export const getError = createSelector(getNoteFeatureState, (state: NoteState) => state.error);

export const getCurrentNoteId = createSelector(
    getNoteFeatureState,
    (state: NoteState) => state.selectedNoteId
);

export const getCurrentNote = createSelector(
    getNoteFeatureState,
    getCurrentNoteId,
    state => state.entities[state.selectedNoteId]
);