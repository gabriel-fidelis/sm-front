import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriaAgendaComponent } from './cria-agenda/cria-agenda.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';




@NgModule({
  declarations: [CriaAgendaComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class AgendaModule { }
