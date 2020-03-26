import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-users-registred',
  templateUrl: './users-registred.component.html',
  styleUrls: ['./users-registred.component.scss']
})
export class UsersRegistredComponent implements OnInit {
  @Input('parentData') public array;

  constructor() { }

  ngOnInit() {
  }

}
