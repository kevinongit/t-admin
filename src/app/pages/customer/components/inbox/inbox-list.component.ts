import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'

@Component({
    selector: 'inbox-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './inbox-list.component.html'
})
export class InboxListComponent {
	@Input() data: any;
	// @Output() selectMovie = new EventEmitter<any>();

}