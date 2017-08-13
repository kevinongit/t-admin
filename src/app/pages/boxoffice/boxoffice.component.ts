import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'

import { State } from './state/state.model'
import { MovieService } from './services/movie.service'
import { BoxofficeState } from './reducers/boxoffice.reducer'
import { BoxofficeActions } from './actions/boxoffice.actions'


@Component({
	selector: 'boxoffice-cmp',
	templateUrl: './boxoffice.component.html'
})
export class BoxofficeComponent implements OnInit {
	boxofficeModel$: Observable<BoxofficeState>;

	constructor(
		private movieService : MovieService,
		private store: Store<State>
		) {
			console.log('BoxofficeComponent');
	}

	ngOnInit(): void {
		this.boxofficeModel$ = this.store.select<BoxofficeState>('boxoffice');
		this.getMovies();
	}

	getMovies(): void {
		this.store.dispatch({ type: BoxofficeActions.BOXOFFICE_UPDATE_MOVIE_LIST, payload: null});
		console.log('in getMovies()');
	}

    onSelectMovie(movie: any) {
		this.store.dispatch({type: BoxofficeActions.BOXOFFICE_SELECT_MOVIE, payload: movie });
    }
 }
