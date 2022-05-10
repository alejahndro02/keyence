import { Component, 
         ElementRef, 
         ViewChild } from '@angular/core';
import { AddItemService } from 'src/app/services/add-item.service';

@Component({
  selector: 'app-add-languages-programing',
  templateUrl: './add-languages-programing.component.html',
  styleUrls: ['./add-languages-programing.component.css']
})
export class AddLanguagesProgramingComponent{

  @ViewChild('txtLanguagePrograming') txtLanguagePrograming!:ElementRef<HTMLInputElement>

  constructor(private addItemService: AddItemService) { }

  addLanguagePrograming(){
    
    const languageProgramingValue = this.txtLanguagePrograming.nativeElement.value
      // Evalua si no hay nada en el input 
    if(languageProgramingValue.trim().length === 0){
      return
    }
    this.addItemService.addLanguagePrograming(languageProgramingValue)
   
    this.txtLanguagePrograming.nativeElement.value='';
    
  }
}
