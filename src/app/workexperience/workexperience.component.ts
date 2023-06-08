import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../Models/model';

@Component({
  selector: 'app-workexperience',
  templateUrl: './workexperience.component.html',
  styleUrls: ['./workexperience.component.css']
})
export class WorkexperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [

    {
      role: "Designer",
      company: "AffinityX",
      duration: 'Dec-2021 to Ang 2022',
      decription: ["I have 1 years of experience in Design Ui , Graphics",
        "Also knowledge of adobe Photoshop"
      ],
    },


    {
      role: "Angular Developer",
      company: "Internship",
      duration: 'Sep2022 to April 2023',
      decription: ["Angular, JavaScript , Typescript , CSS3, Bootstrap, HTML5 .",
        " In that Internship I have done lots of things API working, components creations ,",
        "directives and all and as developer I continue learning and growing ."
      ],
    },
  ]



  constructor() { }
  ngOnInit(): void {

  }

}
