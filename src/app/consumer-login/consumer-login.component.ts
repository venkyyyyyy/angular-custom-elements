import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  templateUrl: './consumer-login.component.html',
  styleUrls: ['./consumer-login.component.css']
})

export class ConsumerLoginComponent implements OnInit {
  
  public _userDetails;

  @Output() display = new EventEmitter<any>();

  @Input() set user(value) {
    this._userDetails = JSON.parse(value);
  }

  get user() {
    return this._userDetails;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  acknowledgeUser() {
    this.display.emit({
      user: this.user.email,
      thankyouMessage: this.user.locale === 'ja' ? `${this.user.email}様これは、Angular 9アプリからのお礼メッセージです。` : `Dear ${this.user.email}, This is a thank you message from Angular 9 app!!`
    });
  }

}
