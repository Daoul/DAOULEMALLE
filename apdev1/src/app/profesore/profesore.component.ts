import { Component, OnInit } from '@angular/core';
import { profesorBD } from '../modelos/profesor';


@Component({
  selector: 'app-profesore',
  templateUrl: './profesore.component.html',
  styleUrls: ['./profesore.component.css']
})
export class ProfesoreComponent implements OnInit{
  public profesorDat: Array<profesorBD>

  constructor(){
    this.profesorDat = [
new profesorBD("Miguel", "Ramírez", "miguel@gmail.com", "123456789", "./assets/medias/avatar5.jpg", true),
    ]
  }

  ngOnInit(): void {
    console.log(this.profesorDat)
  }
  }

