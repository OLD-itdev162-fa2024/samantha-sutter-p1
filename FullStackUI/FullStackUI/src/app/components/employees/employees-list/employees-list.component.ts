import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  
  employees: Employee[] = [
    {
      id: 'EMP12345',
      name: 'John Smith',
      email: 'john.smith@example.com',
      phone: '(555)555-1234',
      salary: 70000
    },
    {
      id: 'EMP67890',
      name: 'Emily Davis',
      email: 'emily.davis@example.com',
      phone: '(555)555-5678',
      salary: 50000
    },
    {
      id: 'EMP24680',
      name: 'Michael Johnson',
      email: 'michael.johnson@example.com',
      phone: '(555) 555-2468',
      salary: 1000000
    }
  ];
  constructor() {}

  ngOnInit(): void {

    this.employees.push()
  }
}
