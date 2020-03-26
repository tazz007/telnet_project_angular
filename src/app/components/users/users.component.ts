import { Component, OnInit , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @Output() public childEvent = new EventEmitter();
  private array = [];
  constructor(){
    
  }

  add(nom: string, pr: string, age:number){
    let data = {nom: nom, pr: pr, age: age};
    this.array.push(data);
    this.childEvent.emit(this.array);
  }

  ngOnInit() {
  }

}
