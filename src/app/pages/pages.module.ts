import { NgModule                        } from '@angular/core';
import { CommonModule                    } from '@angular/common';
import { PagesRoutingModule              } from './pages-routing.module';
            
import { AddLanguagesProgramingComponent } from './components/add-languages-programing/add-languages-programing.component';
import { HomeComponent                   } from './home/home.component';
import { ResultsComponent                } from './components/results/results.component';


@NgModule({
  declarations: [
    AddLanguagesProgramingComponent,
    HomeComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
