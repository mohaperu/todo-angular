import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'todo-app';

  filter: 'all' | 'active' | 'done' = 'all';

  allPerson = [
    { person: "", done: true },
  ];

  get items() { 
    return this.allPerson.filter(item => this.filter === 'done' ? item.done : !item.done);
  }

  addItem(name: string) {  
    
    this.allPerson.unshift({  
      person: name,
      done: false
    }); 
  }

  removeItem(name : string) {
    this.allPerson.splice((name.length),name.length+1)
  }
}