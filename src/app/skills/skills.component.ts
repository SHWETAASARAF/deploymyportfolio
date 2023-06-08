import { Component, OnInit } from '@angular/core';
import { Skill } from '../Models/model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  Skills: Skill[]=[

    {
      name:"Angular , Angular Material",
      level:"Expert",
      rating:85
    },


    {
      name:"Javascript , Typescript",
      level:"Intermidiate",
      rating:70
    },


    {
      name:"Bootstrap , CSS , HTML",
      level:"Expert",
      rating:80
    }


  ]


  constructor(){}
  ngOnInit(): void {
  }

}
