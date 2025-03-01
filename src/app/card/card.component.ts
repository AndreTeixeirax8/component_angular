import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  //encapsulation: ViewEncapsulation.None, //remove o encapsulation com isso podemos criar classes globais no css
})
export class CardComponent {
  plano = {
    tipo: 'Simples',
    preco: 100,
  };
}
