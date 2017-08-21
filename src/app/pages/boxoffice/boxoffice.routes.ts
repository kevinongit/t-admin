import { Routes, RouterModule } from '@angular/router';
// import { HomeRoutes } from './home/home.routes';


import { BoxofficeComponent } from './index';
import { MovieDetailComponent } from './movie-detail.component';

const routes: Routes = [
	// {
	// 	path: '',
	// 	component: BoxofficeComponent,
	// 	children: [
	// 		// { path: '', redirectTo: 'detail', pathMatch: 'full' },
	// 		{ path: 'detail/:rank', component: MovieDetailComponent }
	// 	]
	// }
	{
		path: '',
		component: BoxofficeComponent
	},
	{
		path: 'detail/:rank', 
		component: MovieDetailComponent
	}
	
];

export const routing = RouterModule.forChild(routes);


// export const BoxofficeRoutes: Route[] = [
// 	// {
// 	// 	path: 'boxoffice', redirectTo: 'boxoffice/home', pathMatch: 'full'
// 	// },
//   	{
//     	path: 'boxoffice', component: BoxofficeComponent
//     	// children: [
// 	    // 	...HomeRoutes
//     	// ]
//   	}
// ];
