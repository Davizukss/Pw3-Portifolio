import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title: string = 'Olá, seja bem vindo(a)!';
  @Input() text: string = 'Somos Estudantes da Escola Tecnica Estadual Horacio Augusto da Silveira';
  imagemUrl = "../../assets/Davi_Miguel2.jpeg";
}
