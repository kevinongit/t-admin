import {Component, OnInit} from '@angular/core';

import {BaMsgCenterService} from './baMsgCenter.service';

@Component({
  selector: 'ba-msg-center',
  providers: [BaMsgCenterService],
  styleUrls: ['./baMsgCenter.scss'],
  templateUrl: './baMsgCenter.html'
})
export class BaMsgCenter implements OnInit {

  public notifications:Array<Object> = [];
  public messages:Array<Object> = [];

  constructor(private _baMsgCenterService:BaMsgCenterService) {
    // this.notifications = this._baMsgCenterService.getNotifications();
    // this.messages = this._baMsgCenterService.getMessages();
    
  }

  ngOnInit() {
    this.getUserNotifications();
    this.getUserMessages();
  }

  getUserNotifications(){
    this._baMsgCenterService.getUserNotifications().subscribe(
      data => {
        console.log('notifications = ' + JSON.stringify(data));
        this.notifications = data;
        console.log('notification length = ' + this.notifications.length);
      }, err => console.log('getUserNotifications() : error occurred'),
      () => {}
    );
  }

  getUserMessages(){
    this._baMsgCenterService.getUserMessages().subscribe(
      data => {
        console.log('messages = ' + JSON.stringify(data));
        this.messages = data;
      }, err => console.log('getUserMessages() : error occurred'),
      () => {}
    );
  }

}
