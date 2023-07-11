import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = "ironman";
  public age: number = 33;


  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  public getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(name:string): void {
    //Cambiar nombre de héroe
    this.name = name;
  }

  changeAge() :void {
    //Cambiar edad
    this.age = 25;
  }
}


