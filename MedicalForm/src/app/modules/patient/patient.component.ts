import { Component, OnInit } from '@angular/core';
import { patients } from 'src/app/patients';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patients = patients;

  constructor() { }

  ngOnInit(): void {
  }

}
