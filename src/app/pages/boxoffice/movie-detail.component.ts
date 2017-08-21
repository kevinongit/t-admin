import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { MovieService } from './services/movie.service'

@Component({
	selector: 'movie-detail',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './movie-detail.component.html'
})
export class MovieDetailComponent {
	 movieDetail : any;
	movie: any;
	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private location: Location,
		private movieService: MovieService
	) {

	}

	ngOnInit() {
		this.route.params
			.switchMap((params: Params) => this.movieService.getOneMovie(params['rank']))
		    .subscribe((movie) => this.movieDetail = movie);
	}

	// ngOnInit(): void {
	// 	this.route.params.forEach((params: Params) => {
	// 		let rank = params['rank'];
	// 		console.log('rank : ' + rank);
	// 		this.movieDetail = this.movieService.getOneMovie(rank);
	// 		console.log('Movie Detail : ' + JSON.stringify(this.movieDetail));
	// 	// 	this.movieService.getMovieDetail(movieName)
	// 	// 		.subscribe(resp => {
	// 	// 		  console.log('inside subscribe');
	// 	// 		  console.log('movie : ' + resp);
	// 	// 		 this.movieDetail = resp.channel.item[0];
	// 	// 		});
	// 	// 	console.log('ngOnInit');
	// 	// 	// this.movieServie.getMovie(id)
	// 	// 
	// 	});
	// }

	goBack(): void {
		this.movieDetail = null;
		this.location.go('/boxoffice');
	}
}