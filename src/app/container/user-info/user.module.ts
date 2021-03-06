import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogsModule } from '../../shared/dialogs/dialogs.module';
import { MaterialModule } from '../../material.module';
import { TableModule } from '../../shared/table/table.module';
import { UserInfoService } from './user-info.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DialogsModule,
    MaterialModule,
    TableModule,
  ],
  providers: [UserInfoService],
})
export class UserModule { }
