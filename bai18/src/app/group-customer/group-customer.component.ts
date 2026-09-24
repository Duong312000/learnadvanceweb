import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-group-customer',
  templateUrl: './group-customer.component.html',
  standalone: false,
  styleUrl: './group-customer.component.css'
})
export class GroupCustomerComponent implements OnInit {
  customerGroups: any[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.getGroupCustomers().subscribe({
      next: (data) => {
        this.customerGroups = data;
      },
      error: (err) => {
        console.error('Error loading customers.json', err);
      }
    });
  }
}
