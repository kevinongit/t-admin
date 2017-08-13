import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'movie-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './movie-list.component.html'
})
export class MovieListComponent {
	@Input() movies: any[];
	@Output() selectMovie = new EventEmitter<any>();

}