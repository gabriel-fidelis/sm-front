import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmFooterComponent } from './sm-footer/sm-footer.component';
import { SmHeaderComponent } from './sm-header/sm-header.component';
import {MatButtonModule} from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SmSidebarComponent } from './sm-sidebar/sm-sidebar.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [SmFooterComponent, SmHeaderComponent, SmSidebarComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FontAwesomeModule,
    RouterModule,
    MatSidenavModule,
    MatDividerModule,
    MatIconModule
  ],
  exports: [SmFooterComponent, SmHeaderComponent, SmSidebarComponent]
})
export class SharedModule { }
