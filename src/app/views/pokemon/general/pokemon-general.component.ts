import { Component, Input, OnInit } from '@angular/core';
import { TYPE_COLOURS } from 'src/app/shared/model/pokemon';


@Component({
  selector: 'app-pokemon-general',
  templateUrl: './pokemon-general.component.html',
  styleUrls: ['./pokemon-general.component.css']
})
export class PokemonGeneralComponent implements OnInit {

  @Input() public currentPokemon: any;

  constructor() { }

  ngOnInit(): void {}

  public getTypeColour(type: string): string {
    if (type) {
      return TYPE_COLOURS[type];
    }
  }
}
