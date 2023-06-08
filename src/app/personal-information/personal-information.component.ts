import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {

  myData:string[][] =[
    ['Name' , 'Shweta Saraf'],
    ['DOB' , '20/09/1996'],
    ['work Exp' , 'fresher'],
    ['Education', 'Bsc(2019)'],
    ['Interest' ,'Singing']
  ];

  aboutMe:string[]=[
    'Hi my name is shweta and I am looking for job as Angular Developer,',
    'I have solid understanding of Angular, and its features, and its benefits.And in that I have done Internship .',
    
    'In that Internship I have done lots of things API working, components creations, directives and all and as developer I continue learning and growing' ,
    ' And I have also knowledge of designing so its benefit to designs a websites as designer also .'
     ]

 constructor(){}

  ngOnInit(): void {
    
  }

}
