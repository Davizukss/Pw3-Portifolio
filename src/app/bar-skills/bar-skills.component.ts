import { Component } from '@angular/core';

@Component({
  selector: 'app-bar-skills',
  templateUrl: './bar-skills.component.html',
  styleUrls: ['./bar-skills.component.css']
})
export class BarSkillsComponent {
  skillLogos: string[] = [
    'fab fa-html5',
    'fab fa-css3-alt',
    'fab fa-js',
    'fab fa-angular',
    'fab fa-node',
    'fab fa-python'
  ];
}
