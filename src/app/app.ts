import {Component} from '@angular/core';
import {Demo} from './features/demo/demo';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		Demo
	],
	templateUrl: './app.html',
	styleUrl: './app.scss',
})
export class App {
}
