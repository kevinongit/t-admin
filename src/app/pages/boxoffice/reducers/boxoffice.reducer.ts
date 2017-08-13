import { ActionReducer, Action } from '@ngrx/store'

import { BoxofficeActions } from '../actions/boxoffice.actions'

export interface BoxofficeState {
    movies : any[],
    selectedMovie : any;
};

const initialState: BoxofficeState = {
    movies: null,
    selectedMovie: null
};

// fix: https://github.com/ngrx/store/issues/190
// from : export const boxofficeReducer: ActionReducer<BoxofficeState> = (state = initialState, action: Action) => {
// to : below
export function boxofficeReducer (state = initialState, action: Action) {
    switch (action.type) {
        case BoxofficeActions.BOXOFFICE_UPDATE_MOVIE_LIST_SUCCESS: {
            return Object.assign({}, state, { movies: action.payload });
        }
        case BoxofficeActions.BOXOFFICE_SELECT_MOVIE_SUCCESS: {
            return Object.assign({}, state, { selectedMovie: action.payload });
        }
        default : {
            return state;
        }
    }
};
