import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css'],
})
export class OutputComponent implements OnInit {
  @Input() customer: Customer = new Customer();
  @Output() customerChange: EventEmitter<Customer> =
    new EventEmitter<Customer>();

  constructor() {}

  ngOnInit() {}

  update() {
    this.customerChange.emit(this.customer);
  }
}
