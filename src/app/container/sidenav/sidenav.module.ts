import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { MaterialModule } from 'src/app/material.module';
import { UserInfoComponent } from '../user-info/user-info.component';
import { DialogsModule } from 'src/app/shared/dialogs/dialogs.module';
import { TableModule } from 'src/app/shared/table/table.module';



@NgModule({
  declarations: [
    SidenavComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DialogsModule,
    TableModule,
  ],
  exports: [SidenavComponent]
})
export class SidenavModule { }