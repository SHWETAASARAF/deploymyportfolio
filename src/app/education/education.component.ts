import { Component, OnInit } from '@angular/core';
import { Education } from '../Models/model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {


educationList:Education[] =[

   {
    University:"Amravati University",
    Graduation:"Bsc",
    duration:"2015 -2019",
    score:"60%"
    },

    {
      University:"Amravati University",
      Graduation:"12th",
      duration:"2013 -2014",
      score:"66%"
      },
  

      {
        University:"Amravati University",
        Graduation:"10th",
        duration:"2011 -2012",
        score:"66 .60%"
       },
    
  

];
constructor(){}
  ngOnInit(): void {
  
  }

}
