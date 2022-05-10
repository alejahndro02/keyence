import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddItemService {
  private _historial:string[]=[];

  get historial(){
    return [...this._historial]
  }
   
  constructor() { }

  addLanguagePrograming(programingLanguages:string = ''){
    
    programingLanguages= programingLanguages.trim().toLowerCase()

    if(!this._historial.includes(programingLanguages)){
      this._historial.push(programingLanguages);
      this._historial = this._historial.slice(0,10);
    }

    console.log(this._historial);
    
  }
}
