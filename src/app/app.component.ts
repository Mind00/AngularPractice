import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name1: string = 'I love Angular';

  states = [
    {
      id: 1,
      sname: 'chandrapur'
    },
    {
      id: 2,
      sname: 'kathmandu'
    },
    {
      id: 3,
      sname: 'bhaktapur'
    }
  ];

  onAdd(){
    this.states.push({
      id:4,
      sname: 'lalitpur'
    });
  }
}
