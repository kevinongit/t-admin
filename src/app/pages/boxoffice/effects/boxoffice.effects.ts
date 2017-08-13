import { Injectable } from '@angular/core'
import { Effect, Actions, toPayload } from '@ngrx/effects'
import { Action } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'

import { BoxofficeActions } from '../actions/boxoffice.actions'
import { MovieService } from '../services/movie.service'

@Injectable()
export class BoxofficeEffects {
    constructor(
        private actions$: Actions,
        private movieService: MovieService
    ) {}

    @Effect() updateMovieList$ = this.actions$
        .ofType(BoxofficeActions.BOXOFFICE_UPDATE_MOVIE_LIST)
        .switchMap(() => this.movieService.getMovies()
            .map(movies => ({type: BoxofficeActions.BOXOFFICE_UPDATE_MOVIE_LIST_SUCCESS, payload: movies}))
            .catch(error => Observable.of({type: BoxofficeActions.BOXOFFICE_UPDATE_MOVIE_LIST_FAIL, payload: error }))
        );

    @Effect() selectMovie$ = this.actions$
        .ofType(BoxofficeActions.BOXOFFICE_SELECT_MOVIE)
        .switchMap(action => this.movieService.getOneMovie(action.payload.rank)
            .map(movie => ({type: BoxofficeActions.BOXOFFICE_SELECT_MOVIE_SUCCESS, payload: movie}))
            .catch(error => Observable.of({type: BoxofficeActions.BOXOFFICE_SELECT_MOVIE_FAIL, payload: error }))
        );
}
