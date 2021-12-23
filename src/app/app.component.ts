import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  reactiveForm : FormGroup
ngOnInit(): void {
this.reactiveForm = new FormGroup({
  'userBasic': new FormGroup({
    'firstname':  new FormControl('', {validators:[Validators.required]}),
    'lastname': new FormControl('null', [Validators.required]),
    'address': new FormControl('', Validators.required)
  }),
  'gender': new FormControl('Male', Validators.required),
  'state': new FormControl('', Validators.required)
})

}
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
    
  }
}
